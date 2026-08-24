import { Discount } from '../type/Discount';
import { DiscountResponse } from '../type/DiscountResponse';
import { DiscountSearchInput } from '../type/DiscountSearchInput';
import { DiscountCreateInput } from '../type/DiscountCreateInput';
import { DiscountUpdateInput } from '../type/DiscountUpdateInput';
import { DiscountCsvInput } from '../type/DiscountCsvInput';
import { CsvImportResponse } from '../type/CsvImportResponse';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as discountDoc } from '../generated/operations/discount';
import { document as discountsDoc } from '../generated/operations/discounts';
import { document as discountCreateDoc } from '../generated/operations/discountCreate';
import { document as discountUpdateDoc } from '../generated/operations/discountUpdate';
import { document as discountCsvImportDoc } from '../generated/operations/discountCsvImport';
import type { DiscountUpdateVariables } from '../generated/operationVariables';
/**
 Service class for Discount-related GraphQL operations
 */
export function discountService(client: GraphQLClient) {
  return {
    /**
       Fetches a single discount by ID
       * @param id Discount ID to fetch
       * @returns Promise<Discount> The discount data
       */
    async getDiscount(id: number): Promise<Discount> {
      const result = await runOperation<{ discount: Discount }>(client, discountDoc, 'discount', { id });
      return result.data.discount as Discount;
    },
    /**
       Fetches a list of discounts with search criteria
       * @param input Discount search input parameters
       * @returns Promise<DiscountResponse> The discounts response data
       */
    async getDiscounts(input?: DiscountSearchInput): Promise<DiscountResponse> {
      const result = await runOperation<{ discounts: DiscountResponse }>(client, discountsDoc, 'discounts', { input });
      return result.data.discounts as DiscountResponse;
    },
    /**
       Creates a new discount
       * @param input Discount creation input data
       * @returns Promise<Discount> The created discount
       */
    async createDiscount(input: DiscountCreateInput): Promise<Discount> {
      const result = await runOperation<{ discountCreate: Discount }>(client, discountCreateDoc, 'discountCreate', { input });
      return result.data.discountCreate as Discount;
    },
    /**
       Updates an existing discount
       * @param variables Discount update input data
       * @returns Promise<Discount> The updated discount
       */
    async updateDiscount(variables: DiscountUpdateVariables): Promise<Discount> {
      const result = await runOperation<{ discountUpdate: Discount }>(client, discountUpdateDoc, 'discountUpdate', variables);
      return result.data.discountUpdate as Discount;
    },
    /**
       Imports discounts from CSV
       * @param input Discount CSV import input data
       * @returns Promise<any> The import response
       */
    async importDiscountsCsv(input: DiscountCsvInput): Promise<CsvImportResponse> {
      const result = await runOperation<{ discountCsvImport: CsvImportResponse }>(client, discountCsvImportDoc, 'discountCsvImport', { input });
      return result.data.discountCsvImport as CsvImportResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `discountService(client)`.
 */
export class DiscountService {
  private readonly _svc: ReturnType<typeof discountService>;
  constructor(client: GraphQLClient) { this._svc = discountService(client); }
  /**
   * Fetches a single discount by ID
   * @param id Discount ID to fetch
   */
  getDiscount(id: number): Promise<Discount> { return this._svc.getDiscount(id); }
  /**
   * Fetches a list of discounts with search criteria
   * @param input Discount search input parameters
   */
  getDiscounts(input?: DiscountSearchInput): Promise<DiscountResponse> { return this._svc.getDiscounts(input); }
  /**
   * Creates a new discount
   * @param input Discount creation input data
   */
  createDiscount(input: DiscountCreateInput): Promise<Discount> { return this._svc.createDiscount(input); }
  /**
   * Updates an existing discount
   * @param variables Discount update input data
   */
  updateDiscount(variables: DiscountUpdateVariables): Promise<Discount> { return this._svc.updateDiscount(variables); }
  /**
   * Imports discounts from CSV
   * @param input Discount CSV import input data
   */
  importDiscountsCsv(input: DiscountCsvInput): Promise<CsvImportResponse> { return this._svc.importDiscountsCsv(input); }
}
