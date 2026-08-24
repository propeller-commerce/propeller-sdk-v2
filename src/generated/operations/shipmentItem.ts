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

query shipmentItem(\$id: String!) {
  shipmentItem(id: \$id) {
    ...ShipmentItemFields
  }
}`;
