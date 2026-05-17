/* Auto-generated. Do not edit. */
export const document: string = `fragment MagicTokenFields on MagicToken {
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

mutation magicTokenCreate(\$input: MagicTokenCreateInput!) {
  magicTokenCreate(input: \$input) {
    ...MagicTokenFields
  }
}`;
