/* Auto-generated. Do not edit. */
export const document = `fragment IEventActionConfigFields on IEventActionConfig {
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
  ... on EventToEmailConfig {
    ...EventToEmailConfigFields
  }
  ... on EventToWebHookConfig {
    ...EventToWebHookConfigFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment EventToEmailConfigFields on EventToEmailConfig {
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
  emailTemplateId
}

fragment EventToWebHookConfigFields on EventToWebHookConfig {
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

query eventActionConfig(\$id: String!) {
  eventActionConfig(id: \$id) {
    ...IEventActionConfigFields
  }
}`;
