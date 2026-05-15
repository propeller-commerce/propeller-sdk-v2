import { BaseService } from './BaseService';
import { Logout } from '../type/Logout';
/**
 Service for handling user logout operations
 * @extends BaseService
 */
export class LogoutService extends BaseService {
  /**
   Logs out a user and ends their session
   * @deprecated The upstream `logout` mutation is deprecated; a `signOut` mutation will be available in the future.
   * @param userId User ID to logout
   * @returns Promise<Logout> Logout response
   */
  async logout(userId: number): Promise<Logout> {
    const variables = { userId };
    const result = await this.executeMutation('logout', variables);
    return new Logout(result.data.logout);
  }
}