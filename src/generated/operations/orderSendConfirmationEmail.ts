/* Auto-generated. Do not edit. */
export const document = `fragment SendOrderConfirmResponseTypeFields on SendOrderConfirmResponseType {
  messageId
  success
}

mutation orderSendConfirmationEmail(\$orderId: Int!, \$attachments: [Base64FileInput!]) {
  orderSendConfirmationEmail(orderId: \$orderId, attachments: \$attachments) {
    ...SendOrderConfirmResponseTypeFields
  }
}`;
