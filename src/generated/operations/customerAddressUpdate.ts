/* Auto-generated. Do not edit. */
export const document: string = `fragment AddressFields on Address {
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

mutation customerAddressUpdate(\$input: CustomerAddressUpdateInput!) {
  customerAddressUpdate(input: \$input) {
    ...AddressFields
  }
}`;
