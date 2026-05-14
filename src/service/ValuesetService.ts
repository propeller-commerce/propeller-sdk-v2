import { BaseService } from './BaseService';
import { Valueset } from '../type/Valueset';
import { ValuesetResponse } from '../type/ValuesetResponse';
import { ValuesetSearchInput } from '../type/ValuesetSearchInput';
import { ValuesetCreateInput } from '../type/ValuesetCreateInput';
import { ValuesetUpdateInput } from '../type/ValuesetUpdateInput';
import { ValuesetItem } from '../type/ValuesetItem';
import { ValuesetItemResponse } from '../type/ValuesetItemResponse';
import { ValuesetItemSearchInput } from '../type/ValuesetItemSearchInput';
/**
 Service class for Valueset-related GraphQL operations
 */
export class ValuesetService extends BaseService {
  /**
   Fetches a single valueset by ID
   * @param id Valueset ID to fetch
   * @returns Promise<Valueset> The valueset data
   */
  async getValueset(id: number): Promise<Valueset> {
    const variables = { id };
    const result = await this.executeQuery('valueset', variables);
    return result.data.valueset as Valueset;
  }
  /**
   Fetches a list of valuesets with search criteria
   * @param input Valueset search input parameters
   * @returns Promise<ValuesetResponse> The valuesets response data
   */
  async getValuesets(input?: ValuesetSearchInput): Promise<ValuesetResponse> {
    const variables = { input };
    const result = await this.executeQuery('valuesets', variables);
    return result.data.valuesets as ValuesetResponse;
  }
  /**
   Creates a new valueset
   * @param input Valueset creation input data
   * @returns Promise<Valueset> The created valueset
   */
  async createValueset(input: ValuesetCreateInput): Promise<Valueset> {
    const variables = { input };
    const result = await this.executeMutation('valuesetCreate', variables);
    return result.data.valuesetCreate as Valueset;
  }
  /**
   Updates an existing valueset
   * @param input Valueset update input data
   * @returns Promise<Valueset> The updated valueset
   */
  async updateValueset(input: ValuesetUpdateInput): Promise<Valueset> {
    const variables = { input };
    const result = await this.executeMutation('valuesetUpdate', variables);
    return result.data.valuesetUpdate as Valueset;
  }
  /**
   Deletes a valueset
   * @param id Valueset ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteValueset(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('valuesetDelete', variables);
    return result.data.valuesetDelete;
  }
  /**
   Fetches valueset items with search criteria
   * @param input ValuesetItem search input parameters
   * @returns Promise<ValuesetItemResponse> The valueset items response data
   */
  async getValuesetItems(input?: ValuesetItemSearchInput): Promise<ValuesetItemResponse> {
    const variables = { input };
    const result = await this.executeQuery('valuesetItems', variables);
    return result.data.valuesetItems as ValuesetItemResponse;
  }
}