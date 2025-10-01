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
   * @param id Tax ID
   * @returns Promise<Tax> Tax data
   */
  async getTax(id: number): Promise<Tax> {
    const variables = { id };
    const result = await this.executeQuery('tax', variables);
    return new Tax(result.data.tax);
  }
  /**
   Retrieves taxes with search criteria
   * @param input Search input parameters
   * @returns Promise<TaxesResponse> Taxes response
   */
  async getTaxes(input?: TaxSearchInput): Promise<TaxesResponse> {
    const variables = { input };
    const result = await this.executeQuery('taxes', variables);
    return new TaxesResponse(result.data.taxes);
  }
  /**
   Creates a new tax
   * @param input Tax creation input
   * @returns Promise<Tax> The created tax
   */
  async createTax(input: TaxCreateInput): Promise<Tax> {
    const variables = { input };
    const result = await this.executeMutation('taxCreate', variables);
    return new Tax(result.data.taxCreate);
  }
  /**
   Updates an existing tax
   * @param input Tax update input
   * @returns Promise<Tax> The updated tax
   */
  async updateTax(input: TaxUpdateInput): Promise<Tax> {
    const variables = { input };
    const result = await this.executeMutation('taxUpdate', variables);
    return new Tax(result.data.taxUpdate);
  }
  /**
   Retrieves a specific zone tax code
   * @param id Zone tax code ID
   * @returns Promise<ZoneTaxCode> Zone tax code data
   */
  async getZoneTaxCode(id: number): Promise<ZoneTaxCode> {
    const variables = { id };
    const result = await this.executeQuery('zoneTaxCode', variables);
    return new ZoneTaxCode(result.data.zoneTaxCode);
  }
  /**
   Retrieves zone tax codes with search criteria
   * @param input Search input parameters
   * @returns Promise<ZoneTaxCodeResponse> Zone tax codes response
   */
  async getZoneTaxCodes(input?: ZoneTaxCodeSearchInput): Promise<ZoneTaxCodeResponse> {
    const variables = { input };
    const result = await this.executeQuery('zoneTaxCodes', variables);
    return new ZoneTaxCodeResponse(result.data.zoneTaxCodes);
  }
  /**
   Creates a new zone tax code
   * @param input Zone tax code creation input
   * @returns Promise<ZoneTaxCode> The created zone tax code
   */
  async createZoneTaxCode(input: ZoneTaxCodeCreateInput): Promise<ZoneTaxCode> {
    const variables = { input };
    const result = await this.executeMutation('zoneTaxCodeCreate', variables);
    return new ZoneTaxCode(result.data.zoneTaxCodeCreate);
  }
  /**
   Creates multiple zone tax codes
   * @param input Array of zone tax code creation inputs
   * @returns Promise<ZoneTaxCode[]> Array of created zone tax codes
   */
  async createZoneTaxCodes(input: ZoneTaxCodeCreateInput[]): Promise<ZoneTaxCode[]> {
    const variables = { input };
    const result = await this.executeMutation('zoneTaxCodesCreate', variables);
    return result.data.zoneTaxCodesCreate.map((zoneTaxCode: any) => new ZoneTaxCode(zoneTaxCode));
  }
  /**
   Updates an existing zone tax code
   * @param input Zone tax code update input
   * @returns Promise<ZoneTaxCode> The updated zone tax code
   */
  async updateZoneTaxCode(input: ZoneTaxCodeUpdateInput): Promise<ZoneTaxCode> {
    const variables = { input };
    const result = await this.executeMutation('zoneTaxCodeUpdate', variables);
    return new ZoneTaxCode(result.data.zoneTaxCodeUpdate);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}