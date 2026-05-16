/* Auto-generated. Do not edit. */
export const document = `fragment AddressFields on Address {
  id
  firstName
  middleName
  lastName
  gender
  company
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  phone
  mobile
  email
  fax
  code
  notes
  isDefault
  type
  icp
  url
  active
  name
}

query addressesByOrderId(\$orderId: Int!, \$type: AddressType) {
  addressesByOrderId(orderId: \$orderId, type: \$type) {
    ...AddressFields
  }
}`;
