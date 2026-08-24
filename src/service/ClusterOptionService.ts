import { ClusterOption } from '../type/ClusterOption';
import { ClusterOptionsResponse } from '../type/ClusterOptionsResponse';
import { Product } from '../type/Product';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as clusterOptionDoc } from '../generated/operations/clusterOption';
import { document as clusterOptionAssignProductsDoc } from '../generated/operations/clusterOptionAssignProducts';
import { document as clusterOptionMoveAboveDoc } from '../generated/operations/clusterOptionMoveAbove';
import { document as clusterOptionMoveBelowDoc } from '../generated/operations/clusterOptionMoveBelow';
import { document as clusterOptionProductCreateDoc } from '../generated/operations/clusterOptionProductCreate';
import { document as clusterOptionProductDeleteDoc } from '../generated/operations/clusterOptionProductDelete';
import { document as clusterOptionProductUpdateDoc } from '../generated/operations/clusterOptionProductUpdate';
import { document as clusterOptionRemoveProductsDoc } from '../generated/operations/clusterOptionRemoveProducts';
import { document as clusterOptionsDoc } from '../generated/operations/clusterOptions';
import type { ClusterOptionAssignProductsVariables, ClusterOptionMoveAboveVariables, ClusterOptionMoveBelowVariables, ClusterOptionProductCreateVariables, ClusterOptionProductDeleteVariables, ClusterOptionProductUpdateVariables, ClusterOptionRemoveProductsVariables, ClusterOptionVariables, ClusterOptionsVariables } from '../generated/operationVariables';
/**
 Service for ClusterOption-related GraphQL operations
 */
export function clusterOptionService(client: GraphQLClient) {
  return {
    /**
       Retrieve a single cluster option by global identifier.
       */
    async getClusterOption(variables: ClusterOptionVariables): Promise<ClusterOption> {
      const result = await runOperation<{ clusterOption: ClusterOption }>(client, clusterOptionDoc, 'clusterOption', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterOption as ClusterOption;
    },
    /**
       Attach existing products to a cluster option so they become selectable for it.
       */
    async clusterOptionAssignProducts(variables: ClusterOptionAssignProductsVariables): Promise<ClusterOption> {
      const result = await runOperation<{ clusterOptionAssignProducts: ClusterOption }>(client, clusterOptionAssignProductsDoc, 'clusterOptionAssignProducts', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterOptionAssignProducts as ClusterOption;
    },
    /**
       Reorder a cluster option within its cluster so it appears immediately before another option.
       */
    async clusterOptionMoveAbove(variables: ClusterOptionMoveAboveVariables): Promise<ClusterOption[]> {
      const result = await runOperation<{ clusterOptionMoveAbove: ClusterOption[] }>(client, clusterOptionMoveAboveDoc, 'clusterOptionMoveAbove', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterOptionMoveAbove as ClusterOption[];
    },
    /**
       Reorder a cluster option within its cluster so it appears immediately after another option.
       */
    async clusterOptionMoveBelow(variables: ClusterOptionMoveBelowVariables): Promise<ClusterOption[]> {
      const result = await runOperation<{ clusterOptionMoveBelow: ClusterOption[] }>(client, clusterOptionMoveBelowDoc, 'clusterOptionMoveBelow', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterOptionMoveBelow as ClusterOption[];
    },
    /**
       Create a product directly within a cluster option.
       */
    async clusterOptionProductCreate(variables: ClusterOptionProductCreateVariables): Promise<Product> {
      const result = await runOperation<{ clusterOptionProductCreate: Product }>(client, clusterOptionProductCreateDoc, 'clusterOptionProductCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterOptionProductCreate as Product;
    },
    /**
       Remove a product attached to a cluster option from the catalogue.
       */
    async clusterOptionProductDelete(variables: ClusterOptionProductDeleteVariables): Promise<boolean> {
      const result = await runOperation<{ clusterOptionProductDelete: boolean }>(client, clusterOptionProductDeleteDoc, 'clusterOptionProductDelete', { ...variables });
      return result.data.clusterOptionProductDelete as boolean;
    },
    /**
       Apply a partial update to a product attached to a cluster option.
       */
    async clusterOptionProductUpdate(variables: ClusterOptionProductUpdateVariables): Promise<Product> {
      const result = await runOperation<{ clusterOptionProductUpdate: Product }>(client, clusterOptionProductUpdateDoc, 'clusterOptionProductUpdate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterOptionProductUpdate as Product;
    },
    /**
       Detach products from a cluster option.
       */
    async clusterOptionRemoveProducts(variables: ClusterOptionRemoveProductsVariables): Promise<ClusterOption> {
      const result = await runOperation<{ clusterOptionRemoveProducts: ClusterOption }>(client, clusterOptionRemoveProductsDoc, 'clusterOptionRemoveProducts', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterOptionRemoveProducts as ClusterOption;
    },
    /**
       Search cluster options with filtering and pagination.
       */
    async getClusterOptions(variables: ClusterOptionsVariables): Promise<ClusterOptionsResponse> {
      const result = await runOperation<{ clusterOptions: ClusterOptionsResponse }>(client, clusterOptionsDoc, 'clusterOptions', { ...variables });
      return result.data.clusterOptions as ClusterOptionsResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `clusterOptionService(client)`.
 */
export class ClusterOptionService {
  private readonly _svc: ReturnType<typeof clusterOptionService>;
  constructor(client: GraphQLClient) { this._svc = clusterOptionService(client); }
  getClusterOption(variables: ClusterOptionVariables): Promise<ClusterOption> { return this._svc.getClusterOption(variables); }
  clusterOptionAssignProducts(variables: ClusterOptionAssignProductsVariables): Promise<ClusterOption> { return this._svc.clusterOptionAssignProducts(variables); }
  clusterOptionMoveAbove(variables: ClusterOptionMoveAboveVariables): Promise<ClusterOption[]> { return this._svc.clusterOptionMoveAbove(variables); }
  clusterOptionMoveBelow(variables: ClusterOptionMoveBelowVariables): Promise<ClusterOption[]> { return this._svc.clusterOptionMoveBelow(variables); }
  clusterOptionProductCreate(variables: ClusterOptionProductCreateVariables): Promise<Product> { return this._svc.clusterOptionProductCreate(variables); }
  clusterOptionProductDelete(variables: ClusterOptionProductDeleteVariables): Promise<boolean> { return this._svc.clusterOptionProductDelete(variables); }
  clusterOptionProductUpdate(variables: ClusterOptionProductUpdateVariables): Promise<Product> { return this._svc.clusterOptionProductUpdate(variables); }
  clusterOptionRemoveProducts(variables: ClusterOptionRemoveProductsVariables): Promise<ClusterOption> { return this._svc.clusterOptionRemoveProducts(variables); }
  getClusterOptions(variables: ClusterOptionsVariables): Promise<ClusterOptionsResponse> { return this._svc.getClusterOptions(variables); }
}
