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
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as taxDoc } from '../generated/operations/tax';
import { document as taxesDoc } from '../generated/operations/taxes';
import { document as taxCreateDoc } from '../generated/operations/taxCreate';
import { document as taxUpdateDoc } from '../generated/operations/taxUpdate';
import { document as zoneTaxCodeDoc } from '../generated/operations/zoneTaxCode';
import { document as zoneTaxCodesDoc } from '../generated/operations/zoneTaxCodes';
import { document as zoneTaxCodeCreateDoc } from '../generated/operations/zoneTaxCodeCreate';
import { document as zoneTaxCodesCreateDoc } from '../generated/operations/zoneTaxCodesCreate';
import { document as zoneTaxCodeUpdateDoc } from '../generated/operations/zoneTaxCodeUpdate';
import type { TaxUpdateVariables, ZoneTaxCodeUpdateVariables } from '../generated/operationVariables';
/**
 Service for managing tax and zone tax code operations
 */
export function taxService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific tax
       * @param id Tax ID (UUID string)
       * @returns Promise<Tax> Tax data
       */
    async getTax(id: string): Promise<Tax> {
      const result = await runOperation<{ tax: Tax }>(client, taxDoc, 'tax', { id });
      return result.data.tax as Tax;
    },
    /**
       Retrieves taxes with search criteria
       * @param input Search input parameters
       * @returns Promise<TaxesResponse> Taxes response
       */
    async getTaxes(input?: TaxSearchInput): Promise<TaxesResponse> {
      const result = await runOperation<{ taxes: TaxesResponse }>(client, taxesDoc, 'taxes', { input });
      return result.data.taxes as TaxesResponse;
    },
    /**
       Creates a new tax
       * @param input Tax creation input
       * @returns Promise<Tax> The created tax
       */
    async createTax(input: TaxCreateInput): Promise<Tax> {
      const result = await runOperation<{ taxCreate: Tax }>(client, taxCreateDoc, 'taxCreate', { input });
      return result.data.taxCreate as Tax;
    },
    /**
       Updates an existing tax
       * @param input Tax update input
       * @returns Promise<Tax> The updated tax
       */
    async updateTax(variables: TaxUpdateVariables): Promise<Tax> {
      const result = await runOperation<{ taxUpdate: Tax }>(client, taxUpdateDoc, 'taxUpdate', variables);
      return result.data.taxUpdate as Tax;
    },
    /**
       Retrieves a specific zone tax code
       * @param id Zone tax code ID
       * @returns Promise<ZoneTaxCode> Zone tax code data
       */
    async getZoneTaxCode(id: number): Promise<ZoneTaxCode> {
      const result = await runOperation<{ zoneTaxCode: ZoneTaxCode }>(client, zoneTaxCodeDoc, 'zoneTaxCode', { id });
      return result.data.zoneTaxCode as ZoneTaxCode;
    },
    /**
       Retrieves zone tax codes with search criteria
       * @param input Search input parameters
       * @returns Promise<ZoneTaxCodeResponse> Zone tax codes response
       */
    async getZoneTaxCodes(input?: ZoneTaxCodeSearchInput): Promise<ZoneTaxCodeResponse> {
      const result = await runOperation<{ zoneTaxCodes: ZoneTaxCodeResponse }>(client, zoneTaxCodesDoc, 'zoneTaxCodes', { input });
      return result.data.zoneTaxCodes as ZoneTaxCodeResponse;
    },
    /**
       Creates a new zone tax code
       * @param input Zone tax code creation input
       * @returns Promise<ZoneTaxCode> The created zone tax code
       */
    async createZoneTaxCode(input: ZoneTaxCodeCreateInput): Promise<ZoneTaxCode> {
      const result = await runOperation<{ zoneTaxCodeCreate: ZoneTaxCode }>(client, zoneTaxCodeCreateDoc, 'zoneTaxCodeCreate', { input });
      return result.data.zoneTaxCodeCreate as ZoneTaxCode;
    },
    /**
       Creates multiple zone tax codes
       * @param input Array of zone tax code creation inputs
       * @returns Promise<ZoneTaxCode[]> Array of created zone tax codes
       */
    async createZoneTaxCodes(input: ZoneTaxCodeCreateInput[]): Promise<ZoneTaxCode[]> {
      const result = await runOperation<{ zoneTaxCodesCreate: ZoneTaxCode[] }>(client, zoneTaxCodesCreateDoc, 'zoneTaxCodesCreate', { input });
      return result.data.zoneTaxCodesCreate as ZoneTaxCode[];
    },
    /**
       Updates an existing zone tax code
       * @param input Zone tax code update input
       * @returns Promise<ZoneTaxCode> The updated zone tax code
       */
    async updateZoneTaxCode(variables: ZoneTaxCodeUpdateVariables): Promise<ZoneTaxCode> {
      const result = await runOperation<{ zoneTaxCodeUpdate: ZoneTaxCode }>(client, zoneTaxCodeUpdateDoc, 'zoneTaxCodeUpdate', variables);
      return result.data.zoneTaxCodeUpdate as ZoneTaxCode;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `taxService(client)`.
 */
export class TaxService {
  private readonly _svc: ReturnType<typeof taxService>;
  constructor(client: GraphQLClient) { this._svc = taxService(client); }
  /**
   * Retrieves a specific tax
   * @param id Tax ID (UUID string)
   */
  getTax(id: string): Promise<Tax> { return this._svc.getTax(id); }
  /**
   * Retrieves taxes with search criteria
   * @param input Search input parameters
   */
  getTaxes(input?: TaxSearchInput): Promise<TaxesResponse> { return this._svc.getTaxes(input); }
  /**
   * Creates a new tax
   * @param input Tax creation input
   */
  createTax(input: TaxCreateInput): Promise<Tax> { return this._svc.createTax(input); }
  /**
   * Updates an existing tax
   * @param input Tax update input
   */
  updateTax(variables: TaxUpdateVariables): Promise<Tax> { return this._svc.updateTax(variables); }
  /**
   * Retrieves a specific zone tax code
   * @param id Zone tax code ID
   */
  getZoneTaxCode(id: number): Promise<ZoneTaxCode> { return this._svc.getZoneTaxCode(id); }
  /**
   * Retrieves zone tax codes with search criteria
   * @param input Search input parameters
   */
  getZoneTaxCodes(input?: ZoneTaxCodeSearchInput): Promise<ZoneTaxCodeResponse> { return this._svc.getZoneTaxCodes(input); }
  /**
   * Creates a new zone tax code
   * @param input Zone tax code creation input
   */
  createZoneTaxCode(input: ZoneTaxCodeCreateInput): Promise<ZoneTaxCode> { return this._svc.createZoneTaxCode(input); }
  /**
   * Creates multiple zone tax codes
   * @param input Array of zone tax code creation inputs
   */
  createZoneTaxCodes(input: ZoneTaxCodeCreateInput[]): Promise<ZoneTaxCode[]> { return this._svc.createZoneTaxCodes(input); }
  /**
   * Updates an existing zone tax code
   * @param input Zone tax code update input
   */
  updateZoneTaxCode(variables: ZoneTaxCodeUpdateVariables): Promise<ZoneTaxCode> { return this._svc.updateZoneTaxCode(variables); }
}
