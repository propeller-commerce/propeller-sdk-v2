/* Auto-generated. Do not edit. */
export const document = `fragment ShipmentItemResponseFields on ShipmentItemResponse {
  items {
    ...ShipmentItemFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

query shipmentItems(\$input: ShipmentItemSearchInput) {
  shipmentItems(input: \$input) {
    ...ShipmentItemResponseFields
  }
}`;
