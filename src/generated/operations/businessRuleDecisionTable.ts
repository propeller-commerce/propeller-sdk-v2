/* Auto-generated. Do not edit. */
export const document = `fragment BusinessRuleDecisionTableFields on BusinessRuleDecisionTable {
  type
  id
  name
  description
  content {
    hitPolicy
  }
}

query businessRuleDecisionTable(\$input: BusinessRuleDecisionTableSearchInput!) {
  businessRuleDecisionTable(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;
