/**
 Object class for RegisterUserSession
 */
export class RegisterUserSession {
  /** JWT Bearer access token */
  accessToken?: string;
  /** Refresh token */
  refreshToken?: string;
  /** Expiration time */
  expirationTime?: string;
  constructor(data: Partial<RegisterUserSession> = {}) {
    Object.assign(this, data);
  }

  /** Returns `accessToken`. */
  getAccessToken(): string | undefined {
    return this.accessToken;
  }
  /** Returns `refreshToken`. */
  getRefreshToken(): string | undefined {
    return this.refreshToken;
  }
  /** Returns `expirationTime`. */
  getExpirationTime(): string | undefined {
    return this.expirationTime;
  }
}