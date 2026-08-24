/* Auto-generated. Do not edit. */
export const document: string = `fragment ShipmentFields on Shipment {
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
  sources {
    ...SourceFields
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

fragment SourceFields on Source {
  id
  name
}

query shipment(\$id: String!) {
  shipment(id: \$id) {
    ...ShipmentFields
  }
}`;
