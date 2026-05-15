import { BusinessRuleExpressionGroup } from './BusinessRuleExpressionGroup';
import { LocalizedString } from './LocalizedString';
/**
 Represents a single cell in a decisionTable,
  each cell either hold an expression, string value or numeric value based on the column type and field
 */
export class BusinessRuleDecisionTableCell {
  /** The columnId of the cell */
  columnId!: string | number;
  /** The expressions value for this cell */
  expression?: BusinessRuleExpressionGroup;
  /** The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in "" */
  value?: string;
  /** The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output */
  localizedValue?: LocalizedString[];
  /** The numeric value for this cell, used in output cells */
  number?: number;
  constructor(data: Partial<BusinessRuleDecisionTableCell> = {}) {
    Object.assign(this, data);
  }

  /** Returns `columnId`. */
  getColumnId(): string | number {
    return this.columnId;
  }
  /** Returns `expression` as a BusinessRuleExpressionGroup instance (coerced on first access). */
  getExpression(): BusinessRuleExpressionGroup | undefined {
    if (this.expression == null) return undefined;
    if (!(this.expression instanceof BusinessRuleExpressionGroup)) {
      this.expression = new BusinessRuleExpressionGroup(this.expression as any);
    }
    return this.expression;
  }
  /** Returns `value`. */
  getValue(): string | undefined {
    return this.value;
  }
  /** Returns the localizedValue for the given language, falling back to NL. */
  getLocalizedValue(language: string = 'NL'): string | undefined {
    const arr = this.localizedValue;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `number`. */
  getNumber(): number | undefined {
    return this.number;
  }
}