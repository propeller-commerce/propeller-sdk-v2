import { BaseService } from './BaseService';
import { Login } from '../type/Login';
import { LoginInput } from '../type/LoginInput';
import { CreateAuthenticationInput } from '../type/CreateAuthenticationInput';
import { ExchangeRefreshTokenInput } from '../type/ExchangeRefreshTokenInput';
import { RefreshTokenResponse } from '../type/RefreshTokenResponse';
/**
 Service for handling user authentication and login operations
 * @extends BaseService
 */
export class LoginService extends BaseService {
  /**
   Authenticates a user with credentials
   * @param input Login credentials input
   * @returns Promise<Login> Login response with user data
   */
  async login(input: LoginInput): Promise<Login> {
    const variables = { input };
    const result = await this.executeMutation('login', variables);
    return new Login(result.data.login);
  }
  /**
   Creates authentication claims for a user
   * @param input Authentication input data
   * @returns Promise<Login> Authentication response
   */
  async authenticate(input: CreateAuthenticationInput): Promise<Login> {
    const variables = { input };
    const result = await this.executeMutation('authenticationCreate', variables);
    return new Login(result.data.authenticationCreate);
  }
  /**
   Exchanges a refresh token for a new access token
   * @param refreshToken The refresh token to exchange
   * @returns Promise<RefreshTokenResponse> New token response with fresh access token
   */
  async exchangeRefreshToken(refreshToken: string): Promise<RefreshTokenResponse> {
    const input: ExchangeRefreshTokenInput = { refreshToken };
    const variables = { input };
    const result = await this.executeMutation('exchangeRefreshToken', variables);
    return new RefreshTokenResponse(result.data.exchangeRefreshToken);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}