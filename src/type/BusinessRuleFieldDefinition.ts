import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { LocalizedString } from './LocalizedString';
import { BusinessRuleActionField } from './BusinessRuleActionField';
/**
 Represents a business rule field definition
 */
export class BusinessRuleFieldDefinition {
  /** The ID for this field definition */
  id!: string | number;
  /** The descriptive name of the field */
  name!: LocalizedString[];
  /** The expected path to the field in the input payload */
  path!: string;
  /** The expected type of the field */
  type!: BusinessRuleExpressionTypes;
  /** The actionable sub-fields when the type is 'complex' */
  fields?: BusinessRuleActionField[];
  /** The potential sub-fields when the type is 'complex' */
  expressions?: BusinessRuleFieldDefinition[];
  constructor(data: Partial<BusinessRuleFieldDefinition> = {}) {
    Object.assign(this, data);
  }
}