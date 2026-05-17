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

mutation orderStatusSetAddOrderStatuses(\$id: Int!, \$input: AddOrderStatusesToOrderStatusSetInput!) {
  orderStatusSetAddOrderStatuses(id: \$id, input: \$input) {
    ...OrderStatusSetFields
  }
}`;
