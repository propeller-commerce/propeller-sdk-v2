/* Auto-generated. Do not edit. */
export const document: string = `fragment DiscountResponseFields on DiscountResponse {
  items {
    ...DiscountFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
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

query discounts(\$input: DiscountSearchInput) {
  discounts(input: \$input) {
    ...DiscountResponseFields
  }
}`;
