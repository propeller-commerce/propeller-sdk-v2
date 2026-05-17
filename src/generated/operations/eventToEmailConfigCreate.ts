/* Auto-generated. Do not edit. */
export const document: string = `fragment EventToEmailConfigFields on EventToEmailConfig {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation eventToEmailConfigCreate(\$input: EventToEmailConfigCreateInput!) {
  eventToEmailConfigCreate(input: \$input) {
    ...EventToEmailConfigFields
  }
}`;
