import { BaseService } from './BaseService';
import { IBaseUser } from '../type/IBaseUser';
/**
 Service class for GCIP User-related GraphQL operations
 */
export class GCIPUserService extends BaseService {
  /**
   * Retrieve GCIP user by ID
   * @param id - The user ID to retrieve
   * @returns Promise resolving to user data
   */
  async getGCIPUser(id: number): Promise<IBaseUser> {
    const variables = { id };
    const result = await this.executeQuery('user', variables);
    return result.data.user as IBaseUser;
  }
}