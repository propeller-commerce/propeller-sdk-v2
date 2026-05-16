/* Auto-generated. Do not edit. */
export const document = `fragment OrderAddressFields on OrderAddress {
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

query orderAddress(\$id: Int!, \$orderId: Int!) {
  orderAddress(id: \$id, orderId: \$orderId) {
    ...OrderAddressFields
  }
}`;
