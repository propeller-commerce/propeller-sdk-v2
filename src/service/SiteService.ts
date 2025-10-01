import { BaseService } from './BaseService';
import { Site } from '../type/Site';
/**
 Service class for Site-related GraphQL operations
 */
export class SiteService extends BaseService {
  /**
   Fetches site information
   * @returns Promise<Site> The site data
   */
  async getSite(): Promise<Site> {
    const variables = {};
    const result = await this.executeQuery('site', variables);
    return new Site(result.data.site);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}