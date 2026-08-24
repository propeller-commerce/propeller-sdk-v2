/* Auto-generated. Do not edit. */
export const document: string = `fragment BusinessRuleFieldDefinitionGroupFields on BusinessRuleFieldDefinitionGroup {
  id
  name
  isRoot
  definitions {
    id
    name {
      ...LocalizedStringFields
    }
    path
    type
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query businessRuleFieldDefinitions(\$name: String!) {
  businessRuleFieldDefinitions(name: \$name) {
    ...BusinessRuleFieldDefinitionGroupFields
  }
}`;
