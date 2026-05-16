/* Auto-generated. Do not edit. */
export const document = `fragment OrderStatusesResponseFields on OrderStatusesResponse {
  items {
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
  itemsFound
  offset
  page
  pages
  start
  end
}

query orderStatuses(\$input: OrderStatusesSearchInput) {
  orderStatuses(input: \$input) {
    ...OrderStatusesResponseFields
  }
}`;
