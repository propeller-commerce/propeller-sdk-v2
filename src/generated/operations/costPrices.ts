/* Auto-generated. Do not edit. */
export const document: string = `fragment CostPriceResponseFields on CostPriceResponse {
  items {
    id
    priceId
    createdAt
    lastModifiedAt
    quantityFrom
    value
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

query costPrices(\$input: CostPriceSearchInput) {
  costPrices(input: \$input) {
    ...CostPriceResponseFields
  }
}`;
