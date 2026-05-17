/* Auto-generated. Do not edit. */
export const document: string = `fragment PublishEmailEventResponseFields on PublishEmailEventResponse {
  success
  messageId
}

mutation publishPasswordResetEmailEvent(\$input: PasswordResetLinkEmailInput!) {
  publishPasswordResetEmailEvent(input: \$input) {
    ...PublishEmailEventResponseFields
  }
}`;
