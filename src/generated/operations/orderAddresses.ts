/* Auto-generated. Do not edit. */
export const document: string = `fragment OrderAddressFields on OrderAddress {
  id
  orderId
  createdAt
  lastModifiedAt
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
  code
  notes
  type
  icp
  url
  name
}

query orderAddresses(\$orderId: Int!, \$type: AddressType) {
  orderAddresses(orderId: \$orderId, type: \$type) {
    ...OrderAddressFields
  }
}`;
