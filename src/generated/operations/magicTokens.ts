/* Auto-generated. Do not edit. */
export const document: string = `fragment MagicTokenResponseFields on MagicTokenResponse {
  items {
    ...MagicTokenFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment MagicTokenFields on MagicToken {
  id
  contactId
  customerId
  expiresAt
  lastAccessedAt
  failedLogins
  successfulLogins
  oneTimeUse
  extra
}

query magicTokens(\$input: MagicTokenSearchInput) {
  magicTokens(input: \$input) {
    ...MagicTokenResponseFields
  }
}`;
