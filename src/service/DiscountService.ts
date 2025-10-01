import { BaseService } from './BaseService';
import { Discount } from '../type/Discount';
import { DiscountResponse } from '../type/DiscountResponse';
import { DiscountSearchInput } from '../type/DiscountSearchInput';
import { DiscountCreateInput } from '../type/DiscountCreateInput';
import { DiscountUpdateInput } from '../type/DiscountUpdateInput';
import { DiscountCsvInput } from '../type/DiscountCsvInput';
/**
 Service class for Discount-related GraphQL operations
 */
export class DiscountService extends BaseService {
  /**
   Fetches a single discount by ID
   * @param id Discount ID to fetch
   * @returns Promise<Discount> The discount data
   */
  async getDiscount(id: number): Promise<Discount> {
    const variables = { id };
    const result = await this.executeQuery('discount', variables);
    return new Discount(result.data.discount);
  }
  /**
   Fetches a list of discounts with search criteria
   * @param input Discount search input parameters
   * @returns Promise<DiscountResponse> The discounts response data
   */
  async getDiscounts(input?: DiscountSearchInput): Promise<DiscountResponse> {
    const variables = { input };
    const result = await this.executeQuery('discounts', variables);
    return new DiscountResponse(result.data.discounts);
  }
  /**
   Creates a new discount
   * @param input Discount creation input data
   * @returns Promise<Discount> The created discount
   */
  async createDiscount(input: DiscountCreateInput): Promise<Discount> {
    const variables = { input };
    const result = await this.executeMutation('discountCreate', variables);
    return new Discount(result.data.discountCreate);
  }
  /**
   Updates an existing discount
   * @param input Discount update input data
   * @returns Promise<Discount> The updated discount
   */
  async updateDiscount(input: DiscountUpdateInput): Promise<Discount> {
    const variables = { input };
    const result = await this.executeMutation('discountUpdate', variables);
    return new Discount(result.data.discountUpdate);
  }
  /**
   Imports discounts from CSV
   * @param input Discount CSV import input data
   * @returns Promise<any> The import response
   */
  async importDiscountsCsv(input: DiscountCsvInput): Promise<any> {
    const variables = { input };
    const result = await this.executeMutation('discountCsvImport', variables);
    return result.data.discountCsvImport;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}