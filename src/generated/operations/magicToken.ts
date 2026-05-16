/* Auto-generated. Do not edit. */
export const document = `fragment MagicTokenFields on MagicToken {
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

query magicToken(\$id: String!) {
  magicToken(id: \$id) {
    ...MagicTokenFields
  }
}`;
