import { MagicToken } from '../type/MagicToken';
import { MagicTokenResponse } from '../type/MagicTokenResponse';
import { MagicTokenSearchInput } from '../type/MagicTokenSearchInput';
import { MagicTokenCreateInput } from '../type/MagicTokenCreateInput';
import { MagicTokenUpdateInput } from '../type/MagicTokenUpdateInput';
import { Login } from '../type/Login';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as magicTokenDoc } from '../generated/operations/magicToken';
import { document as magicTokensDoc } from '../generated/operations/magicTokens';
import { document as magicTokenCreateDoc } from '../generated/operations/magicTokenCreate';
import { document as magicTokenUpdateDoc } from '../generated/operations/magicTokenUpdate';
import { document as magicTokenLoginDoc } from '../generated/operations/magicTokenLogin';
/**
 Service for magic token authentication
 */
export function magicTokenService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific magic token
       * @param id Magic token ID
       * @returns Promise<MagicToken> Magic token data
       */
    async getMagicToken(id: number): Promise<MagicToken> {
      const result = await runOperation<{ magicToken: MagicToken }>(client, magicTokenDoc, 'magicToken', { id });
      return result.data.magicToken as MagicToken;
    },
    /**
       Retrieves magic tokens with search
       * @param input Search input parameters
       * @returns Promise<MagicTokenResponse> Magic tokens response
       */
    async getMagicTokens(input?: MagicTokenSearchInput): Promise<MagicTokenResponse> {
      const result = await runOperation<{ magicTokens: MagicTokenResponse }>(client, magicTokensDoc, 'magicTokens', { input });
      return result.data.magicTokens as MagicTokenResponse;
    },
    /**
       Creates a new magic token
       * @param input Magic token creation input
       * @returns Promise<MagicToken> The created magic token
       */
    async createMagicToken(input: MagicTokenCreateInput): Promise<MagicToken> {
      const result = await runOperation<{ magicTokenCreate: MagicToken }>(client, magicTokenCreateDoc, 'magicTokenCreate', { input });
      return result.data.magicTokenCreate as MagicToken;
    },
    /**
       Updates an existing magic token
       * @param id Magic token ID
       * @param input Magic token update input
       * @returns Promise<MagicToken> The updated magic token
       */
    async updateMagicToken(id: string, input: MagicTokenUpdateInput): Promise<MagicToken> {
      const result = await runOperation<{ magicTokenUpdate: MagicToken }>(client, magicTokenUpdateDoc, 'magicTokenUpdate', { id, input });
      return result.data.magicTokenUpdate as MagicToken;
    },
    /**
       Authenticates a user using a magic token
       * @param id Magic token ID
       * @returns Promise<Login> Login response with user data
       */
    async magicTokenLogin(id: string): Promise<Login> {
      const result = await runOperation<{ magicTokenLogin: Login }>(client, magicTokenLoginDoc, 'magicTokenLogin', { id });
      return result.data.magicTokenLogin as Login;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `magicTokenService(client)`.
 */
export class MagicTokenService {
  private readonly _svc: ReturnType<typeof magicTokenService>;
  constructor(client: GraphQLClient) { this._svc = magicTokenService(client); }
  /**
   * Retrieves a specific magic token
   * @param id Magic token ID
   */
  getMagicToken(id: number): Promise<MagicToken> { return this._svc.getMagicToken(id); }
  /**
   * Retrieves magic tokens with search
   * @param input Search input parameters
   */
  getMagicTokens(input?: MagicTokenSearchInput): Promise<MagicTokenResponse> { return this._svc.getMagicTokens(input); }
  /**
   * Creates a new magic token
   * @param input Magic token creation input
   */
  createMagicToken(input: MagicTokenCreateInput): Promise<MagicToken> { return this._svc.createMagicToken(input); }
  /**
   * Updates an existing magic token
   * @param id Magic token ID
   * @param input Magic token update input
   */
  updateMagicToken(id: string, input: MagicTokenUpdateInput): Promise<MagicToken> { return this._svc.updateMagicToken(id, input); }
  /**
   * Authenticates a user using a magic token
   * @param id Magic token ID
   */
  magicTokenLogin(id: string): Promise<Login> { return this._svc.magicTokenLogin(id); }
}
