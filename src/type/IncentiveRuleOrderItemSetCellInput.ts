import { BusinessRuleExpressionGroupInput } from './BusinessRuleExpressionGroupInput';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for IncentiveRuleOrderItemSetCellInput
 */
export interface IncentiveRuleOrderItemSetCellInput {
  /** The ID of the BusinessRule that contains the table cell */
  ruleId: string | number;
  /** The ID of the row the table cell */
  rowId: string | number;
  /** The expressions value for this cell */
  expression?: BusinessRuleExpressionGroupInput;
  /** The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in "" */
  value?: string;
  /** The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output */
  localizedValue?: LocalizedStringInput[];
  /** The numeric value for this cell, used in output cells */
  number?: number;
}