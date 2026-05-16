/* Auto-generated. Do not edit. */
export const document = `fragment OrderStatusSetsResponseFields on OrderStatusSetsResponse {
  items {
    ...OrderStatusSetFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment OrderStatusSetFields on OrderStatusSet {
  id
  name
  description
  orderStatuses {
    id
    name
    code
    type
    orderType
    description
    priority
    isDefault
    isPublic
    isEditable
    isDeletable
    isExportable
    isConfirmable
    isArchivable
    createdAt
    lastModifiedAt
  }
}

query orderStatusSets(\$input: OrderStatusSetsSearchInput) {
  orderStatusSets(input: \$input) {
    ...OrderStatusSetsResponseFields
  }
}`;
