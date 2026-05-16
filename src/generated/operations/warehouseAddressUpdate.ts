/* Auto-generated. Do not edit. */
export const document = `fragment WarehouseAddressFields on WarehouseAddress {
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
  icp
  url
  name
}

mutation warehouseAddressUpdate(\$id: Float!, \$input: UpdateWarehouseAddressInput!) {
  warehouseAddressUpdate(id: \$id, input: \$input) {
    ...WarehouseAddressFields
  }
}`;
