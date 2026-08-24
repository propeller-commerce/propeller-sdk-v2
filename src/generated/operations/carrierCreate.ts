/* Auto-generated. Do not edit. */
export const document: string = `fragment CarrierFields on Carrier {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  trackAndTraceURL
  logo
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  trackAndTraces {
    ...TrackAndTraceFields
  }
  warehouses {
    ...WarehouseFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
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

mutation carrierCreate(\$input: CarrierCreateInput!) {
  carrierCreate(input: \$input) {
    ...CarrierFields
  }
}`;
