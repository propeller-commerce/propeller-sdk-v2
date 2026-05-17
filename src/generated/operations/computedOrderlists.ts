/* Auto-generated. Do not edit. */
export const document: string = `fragment ComputedOrderlistsResponseFields on ComputedOrderlistsResponse {
  positiveOrderlistsProductIds
  negativeOrderListsProductIds
  positiveOrderListsClusterIds
  negativeOrderListsClusterIds
  positiveOrderlistsCount
  negativeOrderlistsCount
}

query computedOrderlists(\$input: ComputedOrderlistsInput!) {
  computedOrderlists(input: \$input) {
    ...ComputedOrderlistsResponseFields
  }
}`;
