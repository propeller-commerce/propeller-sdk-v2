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
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as pricesDoc } from '../generated/operations/prices';
import { document as priceDoc } from '../generated/operations/price';
import { document as priceCalculateDoc } from '../generated/operations/priceCalculate';
import { document as priceDefaultDoc } from '../generated/operations/priceDefault';
import { document as priceExplainDoc } from '../generated/operations/priceExplain';
import { document as priceCreateDoc } from '../generated/operations/priceCreate';
import { document as priceUpdateDoc } from '../generated/operations/priceUpdate';
import { document as priceCsvImportDoc } from '../generated/operations/priceCsvImport';
/**
 Service class for Price-related GraphQL operations
 */
export function priceService(client: GraphQLClient) {
  return {
    /**
       Fetches a list of prices with search criteria
       * @param input Price search input parameters
       * @returns Promise<PriceResponse> The prices response data
       */
    async getPrices(input?: PriceSearchInput): Promise<PriceResponse> {
      const result = await runOperation<{ prices: PriceResponse }>(client, pricesDoc, 'prices', { input });
      return result.data.prices as PriceResponse;
    },
    /**
       Fetches a single price by ID
       * @param variables Variables for the price query
       * - id: string - Price ID to fetch
       * @returns Promise<Price> The price data
       */
    async getPrice(variables: PriceQueryVariables): Promise<Price> {
      const result = await runOperation<{ price: Price }>(client, priceDoc, 'price', variables);
      return result.data.price as Price;
    },
    /**
       Calculates price based on input parameters
       * @param variables Variables for the price calculate query
       * - input: PriceCalculateInput - Price calculation input parameters
       * @returns Promise<ProductPrice> The calculated price data
       */
    async calculatePrice(variables: PriceCalculateQueryVariables): Promise<ProductPrice> {
      const result = await runOperation<{ priceCalculate: ProductPrice }>(client, priceCalculateDoc, 'priceCalculate', variables);
      return result.data.priceCalculate as ProductPrice;
    },
    /**
       Gets the default price based on input parameters
       * @param variables Variables for the price default query
       * - input: PriceCalculateDefaultInput - Price calculation default input parameters
       * @returns Promise<ProductPrice> The default price data
       */
    async getDefaultPrice(variables: PriceDefaultQueryVariables): Promise<ProductPrice[]> {
      const result = await runOperation<{ priceDefault: ProductPrice[] }>(client, priceDefaultDoc, 'priceDefault', variables);
      return result.data.priceDefault as ProductPrice[];
    },
    /**
       Explains price calculation breakdown
       * @param variables Variables for the price explain query
       * - input: PriceCalculateInput - Price calculation input parameters
       * @returns Promise<ProductPrice> The price explanation data
       */
    async explainPrice(variables: PriceCalculateQueryVariables): Promise<ProductPrice[]> {
      const result = await runOperation<{ priceExplain: ProductPrice[] }>(client, priceExplainDoc, 'priceExplain', variables);
      return result.data.priceExplain as ProductPrice[];
    },
    /**
       Creates a new price
       * @param input Price creation input data
       * @returns Promise<Price> The created price data
       */
    async createPrice(input: PriceCreateInput): Promise<Price> {
      const result = await runOperation<{ priceCreate: Price }>(client, priceCreateDoc, 'priceCreate', { input });
      return result.data.priceCreate as Price;
    },
    /**
       Updates an existing price
       * @param id Price ID to update
       * @param input Price update input data
       * @returns Promise<Price> The updated price data
       */
    async updatePrice(id: string, input: PriceUpdateInput): Promise<Price> {
      const result = await runOperation<{ priceUpdate: Price }>(client, priceUpdateDoc, 'priceUpdate', { id, input });
      return result.data.priceUpdate as Price;
    },
    /**
       Imports prices from CSV file
       * @param input CSV import input data
       * @returns Promise<CsvImportResponse> The CSV import response
       */
    async importPricesFromCSV(input: PriceCsvInput): Promise<CsvImportResponse> {
      const result = await runOperation<{ priceCsvImport: CsvImportResponse }>(client, priceCsvImportDoc, 'priceCsvImport', { input });
      return result.data.priceCsvImport as CsvImportResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `priceService(client)`.
 */
export class PriceService {
  private readonly _svc: ReturnType<typeof priceService>;
  constructor(client: GraphQLClient) { this._svc = priceService(client); }
  /**
   * Fetches a list of prices with search criteria
   * @param input Price search input parameters
   */
  getPrices(input?: PriceSearchInput): Promise<PriceResponse> { return this._svc.getPrices(input); }
  /**
   * Fetches a single price by ID
   * @param variables Variables for the price query
   * @param id Price ID to fetch
   */
  getPrice(variables: PriceQueryVariables): Promise<Price> { return this._svc.getPrice(variables); }
  /**
   * Calculates price based on input parameters
   * @param variables Variables for the price calculate query
   * @param input Price calculation input parameters
   */
  calculatePrice(variables: PriceCalculateQueryVariables): Promise<ProductPrice> { return this._svc.calculatePrice(variables); }
  /**
   * Gets the default price based on input parameters
   * @param variables Variables for the price default query
   * @param input Price calculation default input parameters
   */
  getDefaultPrice(variables: PriceDefaultQueryVariables): Promise<ProductPrice[]> { return this._svc.getDefaultPrice(variables); }
  /**
   * Explains price calculation breakdown
   * @param variables Variables for the price explain query
   * @param input Price calculation input parameters
   */
  explainPrice(variables: PriceCalculateQueryVariables): Promise<ProductPrice[]> { return this._svc.explainPrice(variables); }
  /**
   * Creates a new price
   * @param input Price creation input data
   */
  createPrice(input: PriceCreateInput): Promise<Price> { return this._svc.createPrice(input); }
  /**
   * Updates an existing price
   * @param id Price ID to update
   * @param input Price update input data
   */
  updatePrice(id: string, input: PriceUpdateInput): Promise<Price> { return this._svc.updatePrice(id, input); }
  /**
   * Imports prices from CSV file
   * @param input CSV import input data
   */
  importPricesFromCSV(input: PriceCsvInput): Promise<CsvImportResponse> { return this._svc.importPricesFromCSV(input); }
}
