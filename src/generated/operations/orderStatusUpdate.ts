/* Auto-generated. Do not edit. */
export const document: string = `fragment OrderStatusFields on OrderStatus {
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
  statusSet {
    id
    name
    description
  }
  nextStatuses {
    itemsFound
    offset
    page
    pages
    start
    end
  }
  previousStatuses {
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

mutation orderStatusUpdate(\$id: Int!, \$input: UpdateOrderStatusInput!) {
  orderStatusUpdate(id: \$id, input: \$input) {
    ...OrderStatusFields
  }
}`;
