import { VerifyToken } from '../type/VerifyToken';
import { VerifyTokenInput } from '../type/VerifyTokenInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as verifyTokenDoc } from '../generated/operations/verifyToken';
/**
 Service class for VerifyToken-related GraphQL operations
 */
export function verifyTokenService(client: GraphQLClient) {
  return {
    /**
       Verifies a token and returns response
       * @param input VerifyToken input data
       * @returns Promise<VerifyToken> The verify token response data
       */
    async verifyToken(input: VerifyTokenInput): Promise<VerifyToken> {
      const result = await runOperation(client, verifyTokenDoc, 'verifyToken', { input });
      return result.data.verifyToken as VerifyToken;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `verifyTokenService(client)`.
 */
export class VerifyTokenService {
  private readonly _svc: ReturnType<typeof verifyTokenService>;
  constructor(client: GraphQLClient) { this._svc = verifyTokenService(client); }
  /**
   * Verifies a token and returns response
   * @param input VerifyToken input data
   */
  verifyToken(input: VerifyTokenInput): Promise<VerifyToken> { return this._svc.verifyToken(input); }
}
