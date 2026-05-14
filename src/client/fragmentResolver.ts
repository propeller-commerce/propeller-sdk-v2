import {
  parse,
  print,
  visit,
  type DocumentNode,
  type FragmentDefinitionNode,
  type FragmentSpreadNode,
  Kind,
} from 'graphql';
import { fragments as bundledFragments } from '../generated/fragments';

/**
 * Module-scoped, lazily-initialized registry of parsed fragment AST nodes.
 *
 * Parsing ~200 fragments is non-trivial work. The previous implementation did
 * it once per service instance — every `new ProductService(client)` re-parsed
 * the whole set. This module parses once on first use, shared across every
 * service and every client in the process.
 */
interface FragmentEntry {
  def: FragmentDefinitionNode;
  source: string;
}

let fragmentRegistry: Map<string, FragmentEntry> | null = null;
const resolvedOperationCache = new Map<string, string>();

function getFragmentRegistry(): Map<string, FragmentEntry> {
  if (fragmentRegistry !== null) return fragmentRegistry;
  const registry = new Map<string, FragmentEntry>();
  for (const [fragmentName, fragmentString] of Object.entries(bundledFragments) as [string, string][]) {
    try {
      const doc = parse(fragmentString);
      const def = doc.definitions[0] as FragmentDefinitionNode | undefined;
      if (def && def.kind === Kind.FRAGMENT_DEFINITION) {
        registry.set(def.name.value, { def, source: fragmentString });
      }
    } catch {
      // Skip malformed fragments rather than failing module init.
      // Operations referencing them will fail with a clearer downstream error.
    }
  }
  fragmentRegistry = registry;
  return registry;
}

/**
 * Register or override a fragment in the shared registry.
 * Used by GraphQLClient.registerFragment for custom/test fragments.
 */
export function registerFragment(name: string, definition: string): void {
  const registry = getFragmentRegistry();
  try {
    const doc = parse(definition);
    const def = doc.definitions[0] as FragmentDefinitionNode | undefined;
    if (def && def.kind === Kind.FRAGMENT_DEFINITION) {
      registry.set(name, { def, source: definition });
    }
  } catch {
    // ignore malformed input
  }
}

export function hasFragment(name: string): boolean {
  return getFragmentRegistry().has(name);
}

export function getFragment(name: string): string | undefined {
  return getFragmentRegistry().get(name)?.source;
}

export function getFragmentNames(): string[] {
  return Array.from(getFragmentRegistry().keys());
}

function collectRequiredFragments(
  document: DocumentNode,
  registry: Map<string, FragmentEntry>,
  visited: Set<string> = new Set()
): Set<string> {
  const required = new Set<string>();
  visit(document, {
    FragmentSpread: (node: FragmentSpreadNode) => {
      const name = node.name.value;
      if (visited.has(name) || !registry.has(name)) return;
      visited.add(name);
      required.add(name);
      const nested = collectRequiredFragments(
        { kind: Kind.DOCUMENT, definitions: [registry.get(name)!.def] },
        registry,
        visited
      );
      nested.forEach(n => required.add(n));
    },
  });
  return required;
}

/**
 * Inline all required fragment definitions into the given operation string.
 *
 * Result is cached on the input string so subsequent calls are O(1). The cache
 * is shared across all callers in the process.
 */
export function resolveFragments(operationString: string): string {
  const cached = resolvedOperationCache.get(operationString);
  if (cached !== undefined) return cached;

  const registry = getFragmentRegistry();
  let resolved: string;
  try {
    const document = parse(operationString);
    const required = collectRequiredFragments(document, registry);
    const fragmentDefs = Array.from(required)
      .map(name => registry.get(name)!.def)
      .filter(Boolean);
    const withFragments: DocumentNode = {
      ...document,
      definitions: [...fragmentDefs, ...document.definitions],
    };
    resolved = print(withFragments);
  } catch {
    // If parsing fails (e.g. unusual input from manual client.execute calls),
    // fall back to returning the original string. The server will reject it.
    resolved = operationString;
  }

  resolvedOperationCache.set(operationString, resolved);
  return resolved;
}
