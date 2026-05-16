/* Auto-generated. Do not edit. */
export const document = `fragment ClusterBulkMoveResponseFields on ClusterBulkMoveResponse {
  movedCount
  errors {
    ...ClusterBulkMoveErrorFields
  }
}

fragment ClusterBulkMoveErrorFields on ClusterBulkMoveError {
  code
  messages
  record
  rowNumber
}

mutation clusterBulkMove(\$input: ClusterBulkMoveInput!) {
  clusterBulkMove(input: \$input) {
    ...ClusterBulkMoveResponseFields
  }
}`;
