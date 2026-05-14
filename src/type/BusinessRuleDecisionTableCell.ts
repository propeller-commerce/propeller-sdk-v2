import { BusinessRuleExpressionGroup } from './BusinessRuleExpressionGroup';
import { LocalizedString } from './LocalizedString';
/**
 Represents a single cell in a decisionTable,
  each cell either hold an expression, string value or numeric value based on the column type and field
 */
export interface BusinessRuleDecisionTableCell {
  /** The columnId of the cell */
  columnId: string | number;
  /** The expressions value for this cell */
  expression?: BusinessRuleExpressionGroup;
  /** The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in "" */
  value?: string;
  /** The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output */
  localizedValue?: LocalizedString[];
  /** The numeric value for this cell, used in output cells */
  number?: number;
}