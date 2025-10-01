import { parse, print, visit, DocumentNode, FragmentDefinitionNode, InlineFragmentNode, FragmentSpreadNode, Kind } from 'graphql';
import { GraphQLClient } from '../client/GraphQLClient';
import { queries } from '../generated/queries';
import { mutations } from '../generated/mutations';
import { fragments } from '../generated/fragments';

/**
 * Base service class providing common GraphQL operations
 * with proper fragment inlining using GraphQL AST manipulation
 */
export abstract class BaseService {
    protected client: GraphQLClient;
    
    // Cache for resolved GraphQL documents
    private queryCache = new Map<string, DocumentNode>();
    private mutationCache = new Map<string, DocumentNode>();
    private fragmentDefinitions = new Map<string, FragmentDefinitionNode>();

    constructor(client: GraphQLClient) {
        this.client = client;
        this.initializeFragments();
    }

    /**
     * Initialize all fragments as parsed GraphQL AST nodes
     */
    private initializeFragments(): void {
        console.log('🔧 Initializing fragments with GraphQL AST...');
        
        try {
            const fragmentEntries = Object.entries(fragments) as [string, string][];
            for (const [fragmentName, fragmentString] of fragmentEntries) {
                try {
                    const fragmentDoc = parse(fragmentString);
                    const fragmentDef = fragmentDoc.definitions[0] as FragmentDefinitionNode;
                    if (fragmentDef && fragmentDef.kind === Kind.FRAGMENT_DEFINITION) {
                        this.fragmentDefinitions.set(fragmentDef.name.value, fragmentDef);
                    }
                } catch (error) {
                    console.warn(`⚠️  Failed to parse fragment ${fragmentName}:`, error);
                }
            }
            
            console.log(`✅ Fragments initialized. Cache size: ${this.fragmentDefinitions.size}`);
        } catch (error) {
            console.error('❌ Failed to initialize fragments:', error);
        }
    }

    /**
     * Execute a query with automatic fragment inlining
     */
    protected async executeQuery(queryName: string, variables: any = {}): Promise<any> {
        console.log(`🔍 Loading query: ${queryName}`);
        
        // Check cache first
        if (this.queryCache.has(queryName)) {
            const cachedQuery = this.queryCache.get(queryName)!;
            return this.client.execute({ query: print(cachedQuery), variables, skipFragmentResolution: true });
        }

        // Get raw query string with proper type checking
        const queryString = (queries as Record<string, string>)[queryName];
        if (!queryString) {
            throw new Error(`Query '${queryName}' not found in bundled queries`);
        }

        console.log(`📄 Raw query loaded: ${queryString.substring(0, 100)}...`);

        try {
            // Parse and inline fragments
            const resolvedQuery = this.inlineFragments(queryString);
            
            // Cache the resolved query
            this.queryCache.set(queryName, resolvedQuery);
            
            console.log(`✅ Query resolved and cached.`);
            
            return this.client.execute({ query: print(resolvedQuery), variables, skipFragmentResolution: true });
        } catch (error) {
            console.error(`❌ Failed to resolve query ${queryName}:`, error);
            throw error;
        }
    }

    /**
     * Execute a mutation with automatic fragment inlining
     */
    protected async executeMutation(mutationName: string, variables: any = {}): Promise<any> {
        console.log(`🔍 Loading mutation: ${mutationName}`);
        
        // Check cache first
        if (this.mutationCache.has(mutationName)) {
            const cachedMutation = this.mutationCache.get(mutationName)!;
            return this.client.execute({ query: print(cachedMutation), variables, skipFragmentResolution: true });
        }

        // Get raw mutation string with proper type checking
        const mutationString = (mutations as Record<string, string>)[mutationName];
        if (!mutationString) {
            throw new Error(`Mutation '${mutationName}' not found in bundled mutations`);
        }

        console.log(`📄 Raw mutation loaded: ${mutationString.substring(0, 100)}...`);

        try {
            // Parse and inline fragments
            const resolvedMutation = this.inlineFragments(mutationString);
            
            // Cache the resolved mutation
            this.mutationCache.set(mutationName, resolvedMutation);
            
            console.log(`✅ Mutation resolved and cached.`);
            
            return this.client.execute({ query: print(resolvedMutation), variables, skipFragmentResolution: true });
        } catch (error) {
            console.error(`❌ Failed to resolve mutation ${mutationName}:`, error);
            throw error;
        }
    }

    /**
     * Resolve fragments by including fragment definitions while keeping fragment spreads as references
     */
    private inlineFragments(operationString: string): DocumentNode {
        try {
            // Parse the operation
            const document = parse(operationString);
            
            // Collect all required fragments recursively
            const requiredFragments = this.collectRequiredFragments(document);
            
            // Add fragment definitions to the document
            const fragmentDefinitions = Array.from(requiredFragments)
                .map(fragmentName => this.fragmentDefinitions.get(fragmentName))
                .filter(Boolean) as FragmentDefinitionNode[];
            
            // Create new document with fragment definitions included
            const documentWithFragments: DocumentNode = {
                ...document,
                definitions: [
                    ...fragmentDefinitions,
                    ...document.definitions
                ]
            };
            
            return documentWithFragments;
        } catch (error) {
            console.error('❌ Failed to resolve fragments:', error);
            // Fallback to original operation
            return parse(operationString);
        }
    }

    /**
     * Recursively collect all required fragments from a GraphQL document
     */
    private collectRequiredFragments(document: DocumentNode, visited: Set<string> = new Set()): Set<string> {
        const requiredFragments = new Set<string>();
        
        visit(document, {
            FragmentSpread: (node: FragmentSpreadNode) => {
                const fragmentName = node.name.value;
                
                if (!visited.has(fragmentName) && this.fragmentDefinitions.has(fragmentName)) {
                    visited.add(fragmentName);
                    requiredFragments.add(fragmentName);
                    
                    // Recursively collect fragments used by this fragment
                    const fragmentDef = this.fragmentDefinitions.get(fragmentName)!;
                    const fragmentDoc: DocumentNode = {
                        kind: Kind.DOCUMENT,
                        definitions: [fragmentDef]
                    };
                    
                    const nestedFragments = this.collectRequiredFragments(fragmentDoc, visited);
                    nestedFragments.forEach(name => requiredFragments.add(name));
                }
            }
        });
        
        return requiredFragments;
    }
} 