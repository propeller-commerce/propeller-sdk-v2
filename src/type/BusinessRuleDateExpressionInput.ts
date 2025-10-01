import { BusinessRuleDateExpressionOperators } from '../enum/BusinessRuleDateExpressionOperators';
/**
 Represents the input for a business rule date expression
 */
export interface BusinessRuleDateExpressionInput {
  /** Numeric value, use when the condition is one of:
   beforeDaysFromToday, afterDaysFromToday, onDaysFromToday,
   beforeMinutesFromNow, afterMinutesFromNow, onMinutesFromNow,
   onDayOfWeek, onDayOfMonth, onMonthOfYear */
  number?: number;
  /** Date value, use when the condition is one of: before, after */
  date?: string;
  /** Time value in HH:mm:ss format, use when the condition is one of: onTime, beforeTime, afterTime */
  string?: string;
  /** The operator used for this expression */
  operator: BusinessRuleDateExpressionOperators;
  /** Path to the field, can be used to add additional expressions and calculations on the field.
        Use $ to target the field's value.
        When omitted, the field's value is used.
        The expression will be used on the left-hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression.
        Check https://gorules.io/docs/rules-engine/expression-language/date-and-time for options. */
  path?: string;
}