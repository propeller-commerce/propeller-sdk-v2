/* Auto-generated. Do not edit. */
export const document: string = `fragment DiscountFields on Discount {
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

mutation discountUpdate(\$id: String!, \$input: DiscountUpdateInput!) {
  discountUpdate(id: \$id, input: \$input) {
    ...DiscountFields
  }
}`;
