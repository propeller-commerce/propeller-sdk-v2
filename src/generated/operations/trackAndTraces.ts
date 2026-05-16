/* Auto-generated. Do not edit. */
export const document = `fragment TrackAndTraceResponseFields on TrackAndTraceResponse {
  items {
    ...TrackAndTraceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
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

query trackAndTraces(\$input: TrackAndTraceSearchInput) {
  trackAndTraces(input: \$input) {
    ...TrackAndTraceResponseFields
  }
}`;
