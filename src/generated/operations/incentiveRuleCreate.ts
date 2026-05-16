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

mutation incentiveRuleCreate(\$input: BusinessRuleCreateInput!) {
  incentiveRuleCreate(input: \$input) {
    ...BusinessRuleFields
  }
}`;
