/* Auto-generated. Do not edit. */
export const document: string = `fragment TrackAndTraceFields on TrackAndTrace {
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

mutation trackAndTraceUpdate(\$id: String!, \$input: TrackAndTraceUpdateInput!) {
  trackAndTraceUpdate(id: \$id, input: \$input) {
    ...TrackAndTraceFields
  }
}`;
