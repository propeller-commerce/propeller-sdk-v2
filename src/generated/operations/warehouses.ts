/* Auto-generated. Do not edit. */
export const document: string = `fragment WarehousesResponseFields on WarehousesResponse {
  items {
    ...WarehouseFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment WarehouseFields on Warehouse {
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

query warehouses(\$input: WarehousesSearchInput) {
  warehouses(input: \$input) {
    ...WarehousesResponseFields
  }
}`;
