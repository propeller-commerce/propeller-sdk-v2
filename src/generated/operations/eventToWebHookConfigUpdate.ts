/* Auto-generated. Do not edit. */
export const document: string = `fragment EventToWebHookConfigFields on EventToWebHookConfig {
  id
  trigger
  code
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  names {
    ...LocalizedStringFields
  }
  channelIds
  url
  signatureSalt
  basicAuthUsername
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation eventToWebHookConfigUpdate(\$id: String!, \$input: EventToWebHookConfigUpdateInput!) {
  eventToWebHookConfigUpdate(id: \$id, input: \$input) {
    ...EventToWebHookConfigFields
  }
}`;
