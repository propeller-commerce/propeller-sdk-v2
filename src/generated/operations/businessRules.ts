/* Auto-generated. Do not edit. */
export const document: string = `fragment BusinessRuleResponseFields on BusinessRuleResponse {
  items {
    ...BusinessRuleFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment BusinessRuleFields on BusinessRule {
  id
  shopId
  type
  name {
    ...LocalizedStringFields
  }
  edges {
    id
    sourceId
    targetId
    type
  }
  nodes {
    type
    id
    name
    description
  }
  createdAt
  updatedAt
  jdm
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query businessRules(\$filter: BusinessRuleSearchInput) {
  businessRules(filter: \$filter) {
    ...BusinessRuleResponseFields
  }
}`;
