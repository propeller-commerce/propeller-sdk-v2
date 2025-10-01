/**
 Object class for RegisterUserSession
 */
export class RegisterUserSession {
  /** JWT Bearer access token */
  private _accessToken?: string;
  /** Refresh token */
  private _refreshToken?: string;
  /** Expiration time */
  private _expirationTime?: string;
  /**
   Creates a new instance of RegisterUserSession
   */
  constructor(data: Partial<RegisterUserSession> = {}) {
    this._accessToken = data.accessToken;
    this._refreshToken = data.refreshToken;
    this._expirationTime = data.expirationTime;
  }
  /**
   JWT Bearer access token
   */
  get accessToken(): string | undefined {
    return this._accessToken;
  }
  /**
   JWT Bearer access token
   */
  set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  /**
   Refresh token
   */
  get refreshToken(): string | undefined {
    return this._refreshToken;
  }
  /**
   Refresh token
   */
  set refreshToken(value: string | undefined) {
    this._refreshToken = value;
  }
  /**
   Expiration time
   */
  get expirationTime(): string | undefined {
    return this._expirationTime;
  }
  /**
   Expiration time
   */
  set expirationTime(value: string | undefined) {
    this._expirationTime = value;
  }
}