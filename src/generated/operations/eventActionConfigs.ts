/* Auto-generated. Do not edit. */
export const document = `fragment EventActionConfigResponseFields on EventActionConfigResponse {
  items {
    ...IEventActionConfigFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment IEventActionConfigFields on IEventActionConfig {
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

query eventActionConfigs(\$input: EventActionConfigSearchInput!) {
  eventActionConfigs(input: \$input) {
    ...EventActionConfigResponseFields
  }
}`;
