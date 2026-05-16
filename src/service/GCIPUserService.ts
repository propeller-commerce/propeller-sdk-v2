import { IBaseUser } from '../type/IBaseUser';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as userDoc } from '../generated/operations/user';
/**
 Service class for GCIP User-related GraphQL operations
 */
export function gCIPUserService(client: GraphQLClient) {
  return {
    /**
       * Retrieve GCIP user by ID
       * @param id - The user ID to retrieve
       * @returns Promise resolving to user data
       */
    async getGCIPUser(id: number): Promise<IBaseUser> {
      const result = await runOperation(client, userDoc, 'user', { id });
      return result.data.user as IBaseUser;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `gCIPUserService(client)`.
 */
export class GCIPUserService {
  private readonly _svc: ReturnType<typeof gCIPUserService>;
  constructor(client: GraphQLClient) { this._svc = gCIPUserService(client); }
  /**
   * Retrieve GCIP user by ID
   * @param id - The user ID to retrieve
   */
  getGCIPUser(id: number): Promise<IBaseUser> { return this._svc.getGCIPUser(id); }
}
