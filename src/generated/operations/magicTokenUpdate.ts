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

mutation magicTokenUpdate(\$id: String!, \$input: MagicTokenUpdateInput!) {
  magicTokenUpdate(id: \$id, input: \$input) {
    ...MagicTokenFields
  }
}`;
