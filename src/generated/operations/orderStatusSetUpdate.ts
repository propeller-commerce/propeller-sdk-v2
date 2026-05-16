/* Auto-generated. Do not edit. */
export const document = `fragment OrderStatusSetFields on OrderStatusSet {
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

mutation orderStatusSetUpdate(\$id: Int!, \$input: UpdateOrderStatusSetInput!) {
  orderStatusSetUpdate(id: \$id, input: \$input) {
    ...OrderStatusSetFields
  }
}`;
