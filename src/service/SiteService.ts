import { BaseService } from './BaseService';
/**
 Service class for Site-related GraphQL operations
 */
export class SiteService extends BaseService {
  /**
   Fetches site information
   * @returns Promise<any> The site data
   */
  async getSite(): Promise<any> {
    const variables = {};
    const result = await this.executeQuery('site', variables);
    return result.data.site;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}