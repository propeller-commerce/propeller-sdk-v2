/**
 Object class for RefreshTokenResponse
 */
export class RefreshTokenResponse {
  /** access_token field */
  access_token!: string;
  /** refresh_token field */
  refresh_token!: string;
  /** expires_in field */
  expires_in!: number;
  /** token_type field */
  token_type!: string;
  /** user_id field */
  user_id!: string;
  constructor(data: Partial<RefreshTokenResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `access_token`. */
  getAccess_token(): string {
    return this.access_token;
  }
  /** Returns `refresh_token`. */
  getRefresh_token(): string {
    return this.refresh_token;
  }
  /** Returns `expires_in`. */
  getExpires_in(): number {
    return this.expires_in;
  }
  /** Returns `token_type`. */
  getToken_type(): string {
    return this.token_type;
  }
  /** Returns `user_id`. */
  getUser_id(): string {
    return this.user_id;
  }
}