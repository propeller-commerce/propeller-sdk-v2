import { BaseService } from './BaseService';
import { Tax } from '../type/Tax';
import { TaxesResponse } from '../type/TaxesResponse';
import { TaxSearchInput } from '../type/TaxSearchInput';
import { TaxCreateInput } from '../type/TaxCreateInput';
import { TaxUpdateInput } from '../type/TaxUpdateInput';
import { ZoneTaxCode } from '../type/ZoneTaxCode';
import { ZoneTaxCodeResponse } from '../type/ZoneTaxCodeResponse';
import { ZoneTaxCodeSearchInput } from '../type/ZoneTaxCodeSearchInput';
import { ZoneTaxCodeCreateInput } from '../type/ZoneTaxCodeCreateInput';
import { ZoneTaxCodeUpdateInput } from '../type/ZoneTaxCodeUpdateInput';
/**
 Service for managing tax and zone tax code operations
 * @extends BaseService
 */
export class TaxService extends BaseService {
  /**
   Retrieves a specific tax
   * @param id Tax ID (UUID string)
   * @returns Promise<Tax> Tax data
   */
  async getTax(id: string): Promise<Tax> {
    const variables = { id };
    const result = await this.executeQuery('tax', variables);
    return result.data.tax as Tax;
  }
  /**
   Retrieves taxes with search criteria
   * @param input Search input parameters
   * @returns Promise<TaxesResponse> Taxes response
   */
  async getTaxes(input?: TaxSearchInput): Promise<TaxesResponse> {
    const variables = { input };
    const result = await this.executeQuery('taxes', variables);
    return result.data.taxes as TaxesResponse;
  }
  /**
   Creates a new tax
   * @param input Tax creation input
   * @returns Promise<Tax> The created tax
   */
  async createTax(input: TaxCreateInput): Promise<Tax> {
    const variables = { input };
    const result = await this.executeMutation('taxCreate', variables);
    return result.data.taxCreate as Tax;
  }
  /**
   Updates an existing tax
   * @param input Tax update input
   * @returns Promise<Tax> The updated tax
   */
  async updateTax(input: TaxUpdateInput): Promise<Tax> {
    const variables = { input };
    const result = await this.executeMutation('taxUpdate', variables);
    return result.data.taxUpdate as Tax;
  }
  /**
   Retrieves a specific zone tax code
   * @param id Zone tax code ID
   * @returns Promise<ZoneTaxCode> Zone tax code data
   */
  async getZoneTaxCode(id: number): Promise<ZoneTaxCode> {
    const variables = { id };
    const result = await this.executeQuery('zoneTaxCode', variables);
    return result.data.zoneTaxCode as ZoneTaxCode;
  }
  /**
   Retrieves zone tax codes with search criteria
   * @param input Search input parameters
   * @returns Promise<ZoneTaxCodeResponse> Zone tax codes response
   */
  async getZoneTaxCodes(input?: ZoneTaxCodeSearchInput): Promise<ZoneTaxCodeResponse> {
    const variables = { input };
    const result = await this.executeQuery('zoneTaxCodes', variables);
    return result.data.zoneTaxCodes as ZoneTaxCodeResponse;
  }
  /**
   Creates a new zone tax code
   * @param input Zone tax code creation input
   * @returns Promise<ZoneTaxCode> The created zone tax code
   */
  async createZoneTaxCode(input: ZoneTaxCodeCreateInput): Promise<ZoneTaxCode> {
    const variables = { input };
    const result = await this.executeMutation('zoneTaxCodeCreate', variables);
    return result.data.zoneTaxCodeCreate as ZoneTaxCode;
  }
  /**
   Creates multiple zone tax codes
   * @param input Array of zone tax code creation inputs
   * @returns Promise<ZoneTaxCode[]> Array of created zone tax codes
   */
  async createZoneTaxCodes(input: ZoneTaxCodeCreateInput[]): Promise<ZoneTaxCode[]> {
    const variables = { input };
    const result = await this.executeMutation('zoneTaxCodesCreate', variables);
    return result.data.zoneTaxCodesCreate as ZoneTaxCode[];
  }
  /**
   Updates an existing zone tax code
   * @param input Zone tax code update input
   * @returns Promise<ZoneTaxCode> The updated zone tax code
   */
  async updateZoneTaxCode(input: ZoneTaxCodeUpdateInput): Promise<ZoneTaxCode> {
    const variables = { input };
    const result = await this.executeMutation('zoneTaxCodeUpdate', variables);
    return result.data.zoneTaxCodeUpdate as ZoneTaxCode;
  }
}