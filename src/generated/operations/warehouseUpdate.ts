/* Auto-generated. Do not edit. */
export const document: string = `fragment WarehouseFields on Warehouse {
  id
  addressId
  address {
    ...WarehouseAddressFields
  }
  name
  description
  notes
  isActive
  isStore
  isPickupLocation
  businessHours {
    ...BusinessHoursFields
  }
  createdAt
  lastModifiedAt
}

fragment WarehouseAddressFields on WarehouseAddress {
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

fragment BusinessHoursFields on BusinessHours {
  dayOfWeek
  openingTime
  closingTime
  lunchBeakStartTime
  lunchBeakEndTime
}

mutation warehouseUpdate(\$id: Float!, \$input: UpdateWarehouseInput!) {
  warehouseUpdate(id: \$id, input: \$input) {
    ...WarehouseFields
  }
}`;
