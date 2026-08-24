/* Auto-generated. Do not edit. */
export const document: string = `fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

mutation shipmentItemUpdate(\$id: String!, \$input: ShipmentItemUpdateInput!) {
  shipmentItemUpdate(id: \$id, input: \$input) {
    ...ShipmentItemFields
  }
}`;
