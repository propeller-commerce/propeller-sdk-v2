/* Auto-generated. Do not edit. */
export const document: string = `fragment BusinessRuleFields on BusinessRule {
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

mutation incentiveRuleSetOrderItemConditions(\$input: IncentiveRuleOrderItemSetCellInput!) {
  incentiveRuleSetOrderItemConditions(input: \$input) {
    ...BusinessRuleFields
  }
}`;
