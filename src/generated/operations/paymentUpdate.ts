/* Auto-generated. Do not edit. */
export const document = `fragment PaymentFields on Payment {
  id
  userId
  anonymousId
  paymentId
  orderId
  amount
  currency
  method
  status
  transactions {
    ...TransactionFields
  }
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}

fragment TransactionFields on Transaction {
  id
  transactionId
  paymentId
  orderId
  amount
  currency
  description
  timestamp
  type
  provider
  status
}

mutation paymentUpdate(\$searchBy: SearchByInput!, \$input: UpdatePaymentInput!) {
  paymentUpdate(searchBy: \$searchBy, input: \$input) {
    ...PaymentFields
  }
}`;
