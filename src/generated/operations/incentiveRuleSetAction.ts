/* Auto-generated. Do not edit. */
export const document = `fragment BusinessRuleFields on BusinessRule {
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

mutation incentiveRuleSetAction(\$input: IncentiveRuleSetActionInput!) {
  incentiveRuleSetAction(input: \$input) {
    ...BusinessRuleFields
  }
}`;
