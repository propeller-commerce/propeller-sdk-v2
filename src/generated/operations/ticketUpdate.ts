/* Auto-generated. Do not edit. */
export const document = `fragment TicketFields on Ticket {
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

mutation ticketUpdate(\$id: ID!, \$input: TicketUpdateInput!) {
  ticketUpdate(id: \$id, input: \$input) {
    ...TicketFields
  }
}`;
