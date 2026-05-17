/* Auto-generated. Do not edit. */
export const document: string = `fragment ProductPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on BulkCostPrice {
      ...BulkCostPriceFields
    }
    ... on BulkPrice {
      ...BulkPriceFields
    }
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

query priceExplain(\$input: PriceCalculateInput!) {
  priceExplain(input: \$input) {
    ...ProductPriceFields
  }
}`;
