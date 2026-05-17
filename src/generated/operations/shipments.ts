/* Auto-generated. Do not edit. */
export const document: string = `fragment ShipmentResponseFields on ShipmentResponse {
  items {
    ...ShipmentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ...ShipmentItemFields
  }
  trackAndTraces {
    ...TrackAndTraceFields
  }
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

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

query shipments(\$input: ShipmentSearchInput) {
  shipments(input: \$input) {
    ...ShipmentResponseFields
  }
}`;
