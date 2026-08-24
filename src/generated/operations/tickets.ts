/* Auto-generated. Do not edit. */
export const document: string = `fragment TicketResponseFields on TicketResponse {
  items {
    ...TicketFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment TicketFields on Ticket {
  id
  titles {
    language
    value
  }
  descriptions {
    language
    value
  }
  buttonLabels {
    language
    value
  }
  type
  status
  assignedToAdminUserId
  contactId
  customerId
  productId
  clusterId
  orderId
  companyId
  email
  phone
  externalUrl
  createdAt
  lastModifiedAt
  pickedUpAt
  completedAt
  lastModifiedByAdminUserId
  createdByAdminUserId
}

query tickets(\$input: TicketSearchInput) {
  tickets(input: \$input) {
    ...TicketResponseFields
  }
}`;
