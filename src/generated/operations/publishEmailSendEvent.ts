/* Auto-generated. Do not edit. */
export const document: string = `fragment PublishEmailEventResponseFields on PublishEmailEventResponse {
  success
  messageId
}

mutation publishEmailSendEvent(\$input: EmailSendEventInput!) {
  publishEmailSendEvent(input: \$input) {
    ...PublishEmailEventResponseFields
  }
}`;
