import { Crossupsell } from '../type/Crossupsell';
import { CrossupsellsResponse } from '../type/CrossupsellsResponse';
import { CrossupsellSearchInput } from '../type/CrossupsellSearchInput';
import { CrossupsellCreateInput } from '../type/CrossupsellCreateInput';
import { CrossupsellUpdateInput } from '../type/CrossupsellUpdateInput';
import { MediaImageProductSearchInput, PriceCalculateProductInput, TransformationsInput } from '../type';

/**
 * Variables for `crossupsells query` — fetches a list of crossupsells with search criteria
 */
export interface CrossupsellsQueryVariables {
  /** Crossupsell search input parameters */
  input?: CrossupsellSearchInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
  /** Price calculate product input */
  priceCalculateProductInput?: PriceCalculateProductInput;
}

import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as crossupsellDoc } from '../generated/operations/crossupsell';
import { document as crossupsellsDoc } from '../generated/operations/crossupsells';
import { document as crossupsellCreateDoc } from '../generated/operations/crossupsellCreate';
import { document as crossupsellUpdateDoc } from '../generated/operations/crossupsellUpdate';
/**
 Service class for Crossupsell-related GraphQL operations
 */
export function crossupsellService(client: GraphQLClient) {
  return {
    /**
       Fetches a single crossupsell by ID
       * @param id Crossupsell ID to fetch
       * @returns Promise<Crossupsell> The crossupsell data
       */
    async getCrossupsell(id: number): Promise<Crossupsell> {
      const result = await runOperation(client, crossupsellDoc, 'crossupsell', { id });
      return result.data.crossupsell as Crossupsell;
    },
    /**
       Fetches a list of crossupsells with search criteria
       * @param variables Crossupsell search input parameters
       * @returns Promise<CrossupsellsResponse> The crossupsells response data
       */
    async getCrossupsells(variables?: CrossupsellsQueryVariables): Promise<CrossupsellsResponse> {
      const language = variables?.language ?? client.getDefaultLanguage();
      const result = await runOperation(client, crossupsellsDoc, 'crossupsells', { ...variables, language });
      return result.data.crossupsells as CrossupsellsResponse;
    },
    /**
       Creates a new crossupsell
       * @param input Crossupsell creation input data
       * @returns Promise<Crossupsell> The created crossupsell
       */
    async createCrossupsell(input: CrossupsellCreateInput): Promise<Crossupsell> {
      const result = await runOperation(client, crossupsellCreateDoc, 'crossupsellCreate', { input });
      return result.data.crossupsellCreate as Crossupsell;
    },
    /**
       Updates an existing crossupsell
       * @param input Crossupsell update input data
       * @returns Promise<Crossupsell> The updated crossupsell
       */
    async updateCrossupsell(input: CrossupsellUpdateInput): Promise<Crossupsell> {
      const result = await runOperation(client, crossupsellUpdateDoc, 'crossupsellUpdate', { input });
      return result.data.crossupsellUpdate as Crossupsell;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `crossupsellService(client)`.
 */
export class CrossupsellService {
  private readonly _svc: ReturnType<typeof crossupsellService>;
  constructor(client: GraphQLClient) { this._svc = crossupsellService(client); }
  /**
   * Fetches a single crossupsell by ID
   * @param id Crossupsell ID to fetch
   */
  getCrossupsell(id: number): Promise<Crossupsell> { return this._svc.getCrossupsell(id); }
  /**
   * Fetches a list of crossupsells with search criteria
   * @param variables Crossupsell search input parameters
   */
  getCrossupsells(variables?: CrossupsellsQueryVariables): Promise<CrossupsellsResponse> { return this._svc.getCrossupsells(variables); }
  /**
   * Creates a new crossupsell
   * @param input Crossupsell creation input data
   */
  createCrossupsell(input: CrossupsellCreateInput): Promise<Crossupsell> { return this._svc.createCrossupsell(input); }
  /**
   * Updates an existing crossupsell
   * @param input Crossupsell update input data
   */
  updateCrossupsell(input: CrossupsellUpdateInput): Promise<Crossupsell> { return this._svc.updateCrossupsell(input); }
}
