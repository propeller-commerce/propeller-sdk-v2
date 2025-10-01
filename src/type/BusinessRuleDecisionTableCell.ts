import { BusinessRuleExpressionGroup } from './BusinessRuleExpressionGroup';
import { LocalizedString } from './LocalizedString';
/**
 Represents a single cell in a decisionTable,
  each cell either hold an expression, string value or numeric value based on the column type and field
 */
export class BusinessRuleDecisionTableCell {
  /** The columnId of the cell */
  private _columnId: string | number;
  /** The expressions value for this cell */
  private _expression?: BusinessRuleExpressionGroup;
  /** The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in "" */
  private _value?: string;
  /** The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output */
  private _localizedValue?: LocalizedString[];
  /** The numeric value for this cell, used in output cells */
  private _number?: number;
  /**
   Creates a new instance of BusinessRuleDecisionTableCell
   */
  constructor(data: Partial<BusinessRuleDecisionTableCell> = {}) {
    this._columnId = data.columnId!;
    this._expression = data.expression;
    this._value = data.value;
    this._localizedValue = data.localizedValue;
    this._number = data.number;
  }
  /**
   The columnId of the cell
   */
  get columnId(): string | number {
    return this._columnId;
  }
  /**
   The columnId of the cell
   */
  set columnId(value: string | number) {
    this._columnId = value;
  }
  /**
   The expressions value for this cell
   */
  get expression(): BusinessRuleExpressionGroup | undefined {
    return this._expression;
  }
  /**
   The expressions value for this cell
   */
  set expression(value: BusinessRuleExpressionGroup | undefined) {
    this._expression = value;
  }
  /**
   The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in ""
   */
  get value(): string | undefined {
    return this._value;
  }
  /**
   The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in ""
   */
  set value(value: string | undefined) {
    this._value = value;
  }
  /**
   The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output
   */
  get localizedValue(): LocalizedString[] | undefined {
    return this._localizedValue;
  }
  /**
   The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output
   */
  set localizedValue(value: LocalizedString[] | undefined) {
    this._localizedValue = value;
  }
  /**
   The numeric value for this cell, used in output cells
   */
  get number(): number | undefined {
    return this._number;
  }
  /**
   The numeric value for this cell, used in output cells
   */
  set number(value: number | undefined) {
    this._number = value;
  }
}