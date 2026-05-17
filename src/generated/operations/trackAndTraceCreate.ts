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

mutation trackAndTraceCreate(\$input: TrackAndTraceCreateInput!) {
  trackAndTraceCreate(input: \$input) {
    ...TrackAndTraceFields
  }
}`;
