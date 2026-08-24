/* Auto-generated. Do not edit. */
export const document: string = `fragment BusinessRuleDecisionTableFields on BusinessRuleDecisionTable {
  type
  id
  name
  description
  content {
    hitPolicy
  }
}

mutation businessRuleDecisionTableAddRow(\$input: BusinessRuleDecisionTableSearchInput!) {
  businessRuleDecisionTableAddRow(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;
