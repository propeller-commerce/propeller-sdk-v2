/**
 * Unit tests for the schema-type drift guard's reference projection.
 *
 * `resolveIntrospectionRef` is the highest-fragility piece: it walks
 * introspection TypeRefs ({kind:'NON_NULL'|'LIST', ofType}, named leaves with
 * `name`/`kind`), the introspection-shape sibling of resolveInner() in
 * build-graphql-bundle.js (which walks SDL AST). The two walkers must never be
 * crossed; this test pins the introspection one against hand-built refs.
 *
 * It also asserts the load-bearing deprecation filter on the real committed
 * snapshot — if a future snapshot is regenerated without `isDeprecated`, this
 * fails loudly instead of silently reintroducing deprecated fields as drift.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  resolveIntrospectionRef,
  buildSchemaProjection,
} = require('../../scripts/lib/schema-type-project');

const NAMED = (kind: string, name: string) => ({ kind, name, ofType: null });
const NN = (ofType: unknown) => ({ kind: 'NON_NULL', name: null, ofType });
const LIST = (ofType: unknown) => ({ kind: 'LIST', name: null, ofType });

describe('resolveIntrospectionRef', () => {
  it('maps bare scalars via SCALAR_TS', () => {
    expect(resolveIntrospectionRef(NAMED('SCALAR', 'String'))).toBe('string');
    expect(resolveIntrospectionRef(NAMED('SCALAR', 'Int'))).toBe('number');
    expect(resolveIntrospectionRef(NAMED('SCALAR', 'Boolean'))).toBe('boolean');
  });

  it('unwraps NON_NULL', () => {
    expect(resolveIntrospectionRef(NN(NAMED('SCALAR', 'Int')))).toBe('number');
  });

  it('appends [] for LIST and handles nested NON_NULL LIST NON_NULL', () => {
    expect(resolveIntrospectionRef(LIST(NAMED('SCALAR', 'String')))).toBe('string[]');
    expect(
      resolveIntrospectionRef(NN(LIST(NN(NAMED('OBJECT', 'Product')))))
    ).toBe('Product[]');
  });

  it('applies GQL_TS_ALIASES (Taxcode -> TaxCode)', () => {
    expect(resolveIntrospectionRef(NAMED('ENUM', 'Taxcode'))).toBe('TaxCode');
  });

  it('maps unknown custom scalars (e.g. JSON) to any', () => {
    expect(resolveIntrospectionRef(NAMED('SCALAR', 'JSON'))).toBe('any');
  });

  it('returns the named type for objects/enums', () => {
    expect(resolveIntrospectionRef(NAMED('OBJECT', 'Product'))).toBe('Product');
    expect(resolveIntrospectionRef(NAMED('ENUM', 'ProductStatus'))).toBe('ProductStatus');
  });

  it('returns any for a null/absent ref', () => {
    expect(resolveIntrospectionRef(null)).toBe('any');
    expect(resolveIntrospectionRef(undefined)).toBe('any');
  });
});

describe('buildSchemaProjection — deprecation filter (load-bearing)', () => {
  const p = buildSchemaProjection();

  it('excludes deprecated Product fields from members', () => {
    const m = p.types.get('Product').members;
    expect(m.has('mediaImages')).toBe(false);
    expect(m.has('mediaVideos')).toBe(false);
    expect(m.has('mediaDocuments')).toBe(false);
    expect(m.has('shortName')).toBe(false);
  });

  it('records deprecated Product fields under deprecatedMembers', () => {
    const dep = p.deprecatedMembers.get('Product');
    expect(dep).toBeDefined();
    for (const f of ['mediaImages', 'mediaVideos', 'mediaDocuments', 'shortName']) {
      expect(dep.has(f)).toBe(true);
    }
  });

  it('keeps only live enum values; deprecated split out', () => {
    expect([...p.types.get('ProductStatus').enumValues].sort().join('')).toBe('ANPRST');
    expect([...p.types.get('SortOrder').enumValues].sort()).toEqual(['ASC', 'DESC']);
    expect([...p.deprecatedMembers.get('SortOrder')].sort()).toEqual(['asc', 'desc']);
  });

  it('applies the TaxCode alias as the projection key', () => {
    expect(p.types.has('TaxCode')).toBe(true);
    expect(p.types.has('Taxcode')).toBe(false);
  });
});
