/**
 Object class for RefreshTokenResponse
 */
export interface RefreshTokenResponse {
  /** access_token field */
  access_token: string;
  /** refresh_token field */
  refresh_token: string;
  /** expires_in field */
  expires_in: number;
  /** token_type field */
  token_type: string;
  /** user_id field */
  user_id: string;
}