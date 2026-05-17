import { Logout } from '../type/Logout';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as logoutDoc } from '../generated/operations/logout';
/**
 Service for handling user logout operations
 */
export function logoutService(client: GraphQLClient) {
  return {
    /**
       Logs out a user and ends their session
       * @deprecated The upstream `logout` mutation is deprecated; a `signOut` mutation will be available in the future.
       * @param userId User ID to logout
       * @returns Promise<Logout> Logout response
       */
    async logout(): Promise<Logout> {
      const result = await runOperation(client, logoutDoc, 'logout');
      return result.data.logout as Logout;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `logoutService(client)`.
 */
export class LogoutService {
  private readonly _svc: ReturnType<typeof logoutService>;
  constructor(client: GraphQLClient) { this._svc = logoutService(client); }
  /**
   * Logs out a user and ends their session
   * @param userId User ID to logout
   */
  logout(): Promise<Logout> { return this._svc.logout(); }
}
