import { BaseService } from './BaseService';
import { Price } from '../type/Price';
import { PriceResponse } from '../type/PriceResponse';
import { PriceSearchInput } from '../type/PriceSearchInput';
import { PriceCreateInput } from '../type/PriceCreateInput';
import { PriceUpdateInput } from '../type/PriceUpdateInput';
import { PriceCalculateInput } from '../type/PriceCalculateInput';
import { PriceCalculateDefaultInput } from '../type/PriceCalculateDefaultInput';
import { PriceCsvInput } from '../type/PriceCsvInput';
import { ProductPrice } from '../type/ProductPrice';
import { CsvImportResponse } from '../type/CsvImportResponse';
/**
 * Price query variables interface
 Variables for the price query
 */
export interface PriceQueryVariables {
  /** Price ID to fetch */
  id: string;
}
/**
 * Price calculate query variables interface
 Variables for the price calculate query
 */
export interface PriceCalculateQueryVariables {
  /** Price calculation input parameters */
  input: PriceCalculateInput;
}
/**
 * Price default query variables interface
 Variables for the price default query
 */
export interface PriceDefaultQueryVariables {
  /** Price calculation default input parameters */
  input: PriceCalculateDefaultInput;
}
/**
 Service class for Price-related GraphQL operations
 */
export class PriceService extends BaseService {
  /**
   Fetches a list of prices with search criteria
   * @param input Price search input parameters
   * @returns Promise<PriceResponse> The prices response data
   */
  async getPrices(input?: PriceSearchInput): Promise<PriceResponse> {
    const variables = { input };
    const result = await this.executeQuery('prices', variables);
    return new PriceResponse(result.data.prices);
  }
  /**
   Fetches a single price by ID
   * @param variables Variables for the price query
   * - id: string - Price ID to fetch
   * @returns Promise<Price> The price data
   */
  async getPrice(variables: PriceQueryVariables): Promise<Price> {
    const result = await this.executeQuery('price', variables);
    return new Price(result.data.price);
  }
  /**
   Calculates price based on input parameters
   * @param variables Variables for the price calculate query
   * - input: PriceCalculateInput - Price calculation input parameters
   * @returns Promise<ProductPrice> The calculated price data
   */
  async calculatePrice(variables: PriceCalculateQueryVariables): Promise<ProductPrice> {
    const result = await this.executeQuery('priceCalculate', variables);
    return new ProductPrice(result.data.priceCalculate);
  }
  /**
   Gets the default price based on input parameters
   * @param variables Variables for the price default query
   * - input: PriceCalculateDefaultInput - Price calculation default input parameters
   * @returns Promise<ProductPrice> The default price data
   */
  async getDefaultPrice(variables: PriceDefaultQueryVariables): Promise<ProductPrice> {
    const result = await this.executeQuery('priceDefault', variables);
    return new ProductPrice(result.data.priceDefault);
  }
  /**
   Explains price calculation breakdown
   * @param variables Variables for the price explain query
   * - input: PriceCalculateInput - Price calculation input parameters
   * @returns Promise<ProductPrice> The price explanation data
   */
  async explainPrice(variables: PriceCalculateQueryVariables): Promise<ProductPrice> {
    const result = await this.executeQuery('priceExplain', variables);
    return new ProductPrice(result.data.priceExplain);
  }
  /**
   Creates a new price
   * @param input Price creation input data
   * @returns Promise<Price> The created price data
   */
  async createPrice(input: PriceCreateInput): Promise<Price> {
    const variables = { input };
    const result = await this.executeMutation('priceCreate', variables);
    return new Price(result.data.priceCreate);
  }
  /**
   Updates an existing price
   * @param id Price ID to update
   * @param input Price update input data
   * @returns Promise<Price> The updated price data
   */
  async updatePrice(id: string, input: PriceUpdateInput): Promise<Price> {
    const variables = { id, input };
    const result = await this.executeMutation('priceUpdate', variables);
    return new Price(result.data.priceUpdate);
  }
  /**
   Imports prices from CSV file
   * @param input CSV import input data
   * @returns Promise<CsvImportResponse> The CSV import response
   */
  async importPricesFromCSV(input: PriceCsvInput): Promise<CsvImportResponse> {
    const variables = { input };
    const result = await this.executeMutation('priceCsvImport', variables);
    return new CsvImportResponse(result.data.priceCsvImport);
  }
}