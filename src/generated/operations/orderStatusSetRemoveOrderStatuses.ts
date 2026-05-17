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

mutation orderStatusSetRemoveOrderStatuses(\$id: Int!, \$input: RemoveOrderStatusesFromOrderStatusSetInput!) {
  orderStatusSetRemoveOrderStatuses(id: \$id, input: \$input) {
    ...OrderStatusSetFields
  }
}`;
