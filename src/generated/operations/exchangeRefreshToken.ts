/* Auto-generated. Do not edit. */
export const document: string = `fragment RefreshTokenResponseFields on RefreshTokenResponse {
  access_token
  refresh_token
  expires_in
  token_type
  user_id
}

mutation exchangeRefreshToken(\$input: ExchangeRefreshTokenInput!) {
  exchangeRefreshToken(input: \$input) {
    ...RefreshTokenResponseFields
  }
}`;
