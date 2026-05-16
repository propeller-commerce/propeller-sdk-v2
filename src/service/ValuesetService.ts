import { Valueset } from '../type/Valueset';
import { ValuesetResponse } from '../type/ValuesetResponse';
import { ValuesetSearchInput } from '../type/ValuesetSearchInput';
import { ValuesetCreateInput } from '../type/ValuesetCreateInput';
import { ValuesetUpdateInput } from '../type/ValuesetUpdateInput';
import { ValuesetItem } from '../type/ValuesetItem';
import { ValuesetItemResponse } from '../type/ValuesetItemResponse';
import { ValuesetItemSearchInput } from '../type/ValuesetItemSearchInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as valuesetDoc } from '../generated/operations/valueset';
import { document as valuesetsDoc } from '../generated/operations/valuesets';
import { document as valuesetCreateDoc } from '../generated/operations/valuesetCreate';
import { document as valuesetUpdateDoc } from '../generated/operations/valuesetUpdate';
import { document as valuesetDeleteDoc } from '../generated/operations/valuesetDelete';
import { document as valuesetItemsDoc } from '../generated/operations/valuesetItems';
/**
 Service class for Valueset-related GraphQL operations
 */
export function valuesetService(client: GraphQLClient) {
  return {
    /**
       Fetches a single valueset by ID
       * @param id Valueset ID to fetch
       * @returns Promise<Valueset> The valueset data
       */
    async getValueset(id: number): Promise<Valueset> {
      const result = await runOperation(client, valuesetDoc, 'valueset', { id });
      return result.data.valueset as Valueset;
    },
    /**
       Fetches a list of valuesets with search criteria
       * @param input Valueset search input parameters
       * @returns Promise<ValuesetResponse> The valuesets response data
       */
    async getValuesets(input?: ValuesetSearchInput): Promise<ValuesetResponse> {
      const result = await runOperation(client, valuesetsDoc, 'valuesets', { input });
      return result.data.valuesets as ValuesetResponse;
    },
    /**
       Creates a new valueset
       * @param input Valueset creation input data
       * @returns Promise<Valueset> The created valueset
       */
    async createValueset(input: ValuesetCreateInput): Promise<Valueset> {
      const result = await runOperation(client, valuesetCreateDoc, 'valuesetCreate', { input });
      return result.data.valuesetCreate as Valueset;
    },
    /**
       Updates an existing valueset
       * @param input Valueset update input data
       * @returns Promise<Valueset> The updated valueset
       */
    async updateValueset(input: ValuesetUpdateInput): Promise<Valueset> {
      const result = await runOperation(client, valuesetUpdateDoc, 'valuesetUpdate', { input });
      return result.data.valuesetUpdate as Valueset;
    },
    /**
       Deletes a valueset
       * @param id Valueset ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteValueset(id: number): Promise<boolean> {
      const result = await runOperation(client, valuesetDeleteDoc, 'valuesetDelete', { id });
      return result.data.valuesetDelete;
    },
    /**
       Fetches valueset items with search criteria
       * @param input ValuesetItem search input parameters
       * @returns Promise<ValuesetItemResponse> The valueset items response data
       */
    async getValuesetItems(input?: ValuesetItemSearchInput): Promise<ValuesetItemResponse> {
      const result = await runOperation(client, valuesetItemsDoc, 'valuesetItems', { input });
      return result.data.valuesetItems as ValuesetItemResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `valuesetService(client)`.
 */
export class ValuesetService {
  private readonly _svc: ReturnType<typeof valuesetService>;
  constructor(client: GraphQLClient) { this._svc = valuesetService(client); }
  /**
   * Fetches a single valueset by ID
   * @param id Valueset ID to fetch
   */
  getValueset(id: number): Promise<Valueset> { return this._svc.getValueset(id); }
  /**
   * Fetches a list of valuesets with search criteria
   * @param input Valueset search input parameters
   */
  getValuesets(input?: ValuesetSearchInput): Promise<ValuesetResponse> { return this._svc.getValuesets(input); }
  /**
   * Creates a new valueset
   * @param input Valueset creation input data
   */
  createValueset(input: ValuesetCreateInput): Promise<Valueset> { return this._svc.createValueset(input); }
  /**
   * Updates an existing valueset
   * @param input Valueset update input data
   */
  updateValueset(input: ValuesetUpdateInput): Promise<Valueset> { return this._svc.updateValueset(input); }
  /**
   * Deletes a valueset
   * @param id Valueset ID to delete
   */
  deleteValueset(id: number): Promise<boolean> { return this._svc.deleteValueset(id); }
  /**
   * Fetches valueset items with search criteria
   * @param input ValuesetItem search input parameters
   */
  getValuesetItems(input?: ValuesetItemSearchInput): Promise<ValuesetItemResponse> { return this._svc.getValuesetItems(input); }
}
