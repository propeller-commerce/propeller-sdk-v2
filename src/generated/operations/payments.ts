/* Auto-generated. Do not edit. */
export const document = `fragment PaymentsResponseFields on PaymentsResponse {
  items {
    ...PaymentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment PaymentFields on Payment {
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

query payments(\$input: PaymentsSearchInput) {
  payments(input: \$input) {
    ...PaymentsResponseFields
  }
}`;
