/* Auto-generated. Do not edit. */
export const document = `fragment EventToWebHookConfigFields on EventToWebHookConfig {
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

mutation eventToWebHookConfigCreate(\$input: EventToWebHookConfigCreateInput!) {
  eventToWebHookConfigCreate(input: \$input) {
    ...EventToWebHookConfigFields
  }
}`;
