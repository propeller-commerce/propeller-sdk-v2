import { BaseService } from './BaseService';
import { Crossupsell } from '../type/Crossupsell';
import { CrossupsellsResponse } from '../type/CrossupsellsResponse';
import { CrossupsellSearchInput } from '../type/CrossupsellSearchInput';
import { CrossupsellCreateInput } from '../type/CrossupsellCreateInput';
import { CrossupsellUpdateInput } from '../type/CrossupsellUpdateInput';
/**
 Service class for Crossupsell-related GraphQL operations
 */
export class CrossupsellService extends BaseService {
  /**
   Fetches a single crossupsell by ID
   * @param id Crossupsell ID to fetch
   * @returns Promise<Crossupsell> The crossupsell data
   */
  async getCrossupsell(id: number): Promise<Crossupsell> {
    const variables = { id };
    const result = await this.executeQuery('crossupsell', variables);
    return new Crossupsell(result.data.crossupsell);
  }
  /**
   Fetches a list of crossupsells with search criteria
   * @param input Crossupsell search input parameters
   * @returns Promise<CrossupsellsResponse> The crossupsells response data
   */
  async getCrossupsells(input?: CrossupsellSearchInput): Promise<CrossupsellsResponse> {
    const variables = { input };
    const result = await this.executeQuery('crossupsells', variables);
    return new CrossupsellsResponse(result.data.crossupsells);
  }
  /**
   Creates a new crossupsell
   * @param input Crossupsell creation input data
   * @returns Promise<Crossupsell> The created crossupsell
   */
  async createCrossupsell(input: CrossupsellCreateInput): Promise<Crossupsell> {
    const variables = { input };
    const result = await this.executeMutation('crossupsellCreate', variables);
    return new Crossupsell(result.data.crossupsellCreate);
  }
  /**
   Updates an existing crossupsell
   * @param input Crossupsell update input data
   * @returns Promise<Crossupsell> The updated crossupsell
   */
  async updateCrossupsell(input: CrossupsellUpdateInput): Promise<Crossupsell> {
    const variables = { input };
    const result = await this.executeMutation('crossupsellUpdate', variables);
    return new Crossupsell(result.data.crossupsellUpdate);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}