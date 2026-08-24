/* Auto-generated. Do not edit. */
export const document: string = `fragment TicketFields on Ticket {
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

mutation ticketCreate(\$input: TicketCreateInput!) {
  ticketCreate(input: \$input) {
    ...TicketFields
  }
}`;
