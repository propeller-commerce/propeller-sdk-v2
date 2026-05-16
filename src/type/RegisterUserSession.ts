/**
 Object class for RegisterUserSession
 */
export interface RegisterUserSession {
  /** JWT Bearer access token */
  accessToken?: string;
  /** Refresh token */
  refreshToken?: string;
  /** Expiration time */
  expirationTime?: string;
}