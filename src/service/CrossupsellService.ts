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
import type { CrossupsellCreateVariables, CrossupsellUpdateVariables, CrossupsellVariables } from '../generated/operationVariables';
/**
 Service class for Crossupsell-related GraphQL operations
 */
export function crossupsellService(client: GraphQLClient) {
  return {
    /**
       Fetches a single crossupsell by ID
       * @param variables Crossupsell ID to fetch
       * @returns Promise<Crossupsell> The crossupsell data
       */
    async getCrossupsell(variables: CrossupsellVariables): Promise<Crossupsell> {
      const result = await runOperation<{ crossupsell: Crossupsell }>(client, crossupsellDoc, 'crossupsell', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.crossupsell as Crossupsell;
    },
    /**
       Fetches a list of crossupsells with search criteria
       * @param variables Crossupsell search input parameters
       * @returns Promise<CrossupsellsResponse> The crossupsells response data
       */
    async getCrossupsells(variables?: CrossupsellsQueryVariables): Promise<CrossupsellsResponse> {
      const language = variables?.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ crossupsells: CrossupsellsResponse }>(client, crossupsellsDoc, 'crossupsells', { ...variables, language });
      return result.data.crossupsells as CrossupsellsResponse;
    },
    /**
       Creates a new crossupsell
       * @param variables Crossupsell creation input data
       * @returns Promise<Crossupsell> The created crossupsell
       */
    async createCrossupsell(variables: CrossupsellCreateVariables): Promise<Crossupsell> {
      const result = await runOperation<{ crossupsellCreate: Crossupsell }>(client, crossupsellCreateDoc, 'crossupsellCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.crossupsellCreate as Crossupsell;
    },
    /**
       Updates an existing crossupsell
       * @param variables Crossupsell update input data
       * @returns Promise<Crossupsell> The updated crossupsell
       */
    async updateCrossupsell(variables: CrossupsellUpdateVariables): Promise<Crossupsell> {
      const result = await runOperation<{ crossupsellUpdate: Crossupsell }>(client, crossupsellUpdateDoc, 'crossupsellUpdate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
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
   * @param variables Crossupsell ID to fetch
   */
  getCrossupsell(variables: CrossupsellVariables): Promise<Crossupsell> { return this._svc.getCrossupsell(variables); }
  /**
   * Fetches a list of crossupsells with search criteria
   * @param variables Crossupsell search input parameters
   */
  getCrossupsells(variables?: CrossupsellsQueryVariables): Promise<CrossupsellsResponse> { return this._svc.getCrossupsells(variables); }
  /**
   * Creates a new crossupsell
   * @param variables Crossupsell creation input data
   */
  createCrossupsell(variables: CrossupsellCreateVariables): Promise<Crossupsell> { return this._svc.createCrossupsell(variables); }
  /**
   * Updates an existing crossupsell
   * @param variables Crossupsell update input data
   */
  updateCrossupsell(variables: CrossupsellUpdateVariables): Promise<Crossupsell> { return this._svc.updateCrossupsell(variables); }
}
