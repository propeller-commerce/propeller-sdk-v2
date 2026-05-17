/* Auto-generated. Do not edit. */
export const document: string = `fragment OrderStatusSetFields on OrderStatusSet {
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

mutation orderStatusSetCreate(\$input: CreateOrderStatusSetInput!) {
  orderStatusSetCreate(input: \$input) {
    ...OrderStatusSetFields
  }
}`;
