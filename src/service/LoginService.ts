import { Login } from '../type/Login';
import { LoginInput } from '../type/LoginInput';
import { CreateAuthenticationInput } from '../type/CreateAuthenticationInput';
import { ExchangeRefreshTokenInput } from '../type/ExchangeRefreshTokenInput';
import { RefreshTokenResponse } from '../type/RefreshTokenResponse';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as loginDoc } from '../generated/operations/login';
import { document as authenticationCreateDoc } from '../generated/operations/authenticationCreate';
import { document as exchangeRefreshTokenDoc } from '../generated/operations/exchangeRefreshToken';
import type { ExchangeRefreshTokenVariables } from '../generated/operationVariables';
/**
 Service for handling user authentication and login operations
 */
export function loginService(client: GraphQLClient) {
  return {
    /**
       Authenticates a user with credentials
       * @param input Login credentials input
       * @returns Promise<Login> Login response with user data
       */
    async login(input: LoginInput): Promise<Login> {
      const result = await runOperation<{ login: Login }>(client, loginDoc, 'login', { input });
      return result.data.login as Login;
    },
    /**
       Creates authentication claims for a user
       * @param input Authentication input data
       * @returns Promise<Login> Authentication response
       */
    async authenticate(input: CreateAuthenticationInput): Promise<Login> {
      const result = await runOperation<{ authenticationCreate: Login }>(client, authenticationCreateDoc, 'authenticationCreate', { input });
      return result.data.authenticationCreate as Login;
    },
    /**
       Exchanges a refresh token for a new access token
       * @param variables The refresh token to exchange
       * @returns Promise<RefreshTokenResponse> New token response with fresh access token
       */
    async exchangeRefreshToken(variables: ExchangeRefreshTokenVariables): Promise<RefreshTokenResponse> {
      const result = await runOperation<{ exchangeRefreshToken: RefreshTokenResponse }>(client, exchangeRefreshTokenDoc, 'exchangeRefreshToken', variables);
      return result.data.exchangeRefreshToken as RefreshTokenResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `loginService(client)`.
 */
export class LoginService {
  private readonly _svc: ReturnType<typeof loginService>;
  constructor(client: GraphQLClient) { this._svc = loginService(client); }
  /**
   * Authenticates a user with credentials
   * @param input Login credentials input
   */
  login(input: LoginInput): Promise<Login> { return this._svc.login(input); }
  /**
   * Creates authentication claims for a user
   * @param input Authentication input data
   */
  authenticate(input: CreateAuthenticationInput): Promise<Login> { return this._svc.authenticate(input); }
  /**
   * Exchanges a refresh token for a new access token
   * @param variables The refresh token to exchange
   */
  exchangeRefreshToken(variables: ExchangeRefreshTokenVariables): Promise<RefreshTokenResponse> { return this._svc.exchangeRefreshToken(variables); }
}
