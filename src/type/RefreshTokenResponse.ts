/**
 Object class for RefreshTokenResponse
 */
export class RefreshTokenResponse {
  /** access_token field */
  private _access_token: string;
  /** refresh_token field */
  private _refresh_token: string;
  /** expires_in field */
  private _expires_in: number;
  /** token_type field */
  private _token_type: string;
  /** user_id field */
  private _user_id: string;
  /**
   Creates a new instance of RefreshTokenResponse
   */
  constructor(data: Partial<RefreshTokenResponse> = {}) {
    this._access_token = data.access_token!;
    this._refresh_token = data.refresh_token!;
    this._expires_in = data.expires_in!;
    this._token_type = data.token_type!;
    this._user_id = data.user_id!;
  }
  /**
   access_token field
   */
  get access_token(): string {
    return this._access_token;
  }
  /**
   access_token field
   */
  set access_token(value: string) {
    this._access_token = value;
  }
  /**
   refresh_token field
   */
  get refresh_token(): string {
    return this._refresh_token;
  }
  /**
   refresh_token field
   */
  set refresh_token(value: string) {
    this._refresh_token = value;
  }
  /**
   expires_in field
   */
  get expires_in(): number {
    return this._expires_in;
  }
  /**
   expires_in field
   */
  set expires_in(value: number) {
    this._expires_in = value;
  }
  /**
   token_type field
   */
  get token_type(): string {
    return this._token_type;
  }
  /**
   token_type field
   */
  set token_type(value: string) {
    this._token_type = value;
  }
  /**
   user_id field
   */
  get user_id(): string {
    return this._user_id;
  }
  /**
   user_id field
   */
  set user_id(value: string) {
    this._user_id = value;
  }
}