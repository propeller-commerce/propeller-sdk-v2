import { BaseService } from './BaseService';
/**
 Service class for GCIP User-related GraphQL operations
 */
export class GCIPUserService extends BaseService {
  /**
   * Retrieve GCIP user by ID
   * @param id - The user ID to retrieve
   * @returns Promise resolving to user data
   */
  async getGCIPUser(id: number): Promise<any> {
    const variables = { input: { id } };
    const result = await this.executeQuery('user', variables);
    return result.data.user;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}