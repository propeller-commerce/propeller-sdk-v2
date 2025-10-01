import { BusinessRuleHitPolicyOption } from '../enum/BusinessRuleHitPolicyOption';
import { BusinessRuleDecisionTableRow } from './BusinessRuleDecisionTableRow';
import { BusinessRuleDecisionTableInputOutput } from './BusinessRuleDecisionTableInputOutput';
/**
 Object class for BusinessRuleDecisionTableContent
 */
export class BusinessRuleDecisionTableContent {
  /** The table's hitPolicy.
  Possible values: first, collect.
  'first' means that the first matching row is used.
  'collect' means that all matching rows are used. */
  private _hitPolicy: BusinessRuleHitPolicyOption;
  /** The table's rows */
  private _rows: BusinessRuleDecisionTableRow[];
  /** The table's input columns */
  private _inputs: BusinessRuleDecisionTableInputOutput[];
  /** The table's output columns */
  private _outputs: BusinessRuleDecisionTableInputOutput[];
  /**
   Creates a new instance of BusinessRuleDecisionTableContent
   */
  constructor(data: Partial<BusinessRuleDecisionTableContent> = {}) {
    this._hitPolicy = data.hitPolicy!;
    this._rows = data.rows!;
    this._inputs = data.inputs!;
    this._outputs = data.outputs!;
  }
  /**
   The table's hitPolicy.
  Possible values: first, collect.
  'first' means that the first matching row is used.
  'collect' means that all matching rows are used.
   */
  get hitPolicy(): BusinessRuleHitPolicyOption {
    return this._hitPolicy;
  }
  /**
   The table's hitPolicy.
  Possible values: first, collect.
  'first' means that the first matching row is used.
  'collect' means that all matching rows are used.
   */
  set hitPolicy(value: BusinessRuleHitPolicyOption) {
    this._hitPolicy = value;
  }
  /**
   The table's rows
   */
  get rows(): BusinessRuleDecisionTableRow[] {
    return this._rows;
  }
  /**
   The table's rows
   */
  set rows(value: BusinessRuleDecisionTableRow[]) {
    this._rows = value;
  }
  /**
   The table's input columns
   */
  get inputs(): BusinessRuleDecisionTableInputOutput[] {
    return this._inputs;
  }
  /**
   The table's input columns
   */
  set inputs(value: BusinessRuleDecisionTableInputOutput[]) {
    this._inputs = value;
  }
  /**
   The table's output columns
   */
  get outputs(): BusinessRuleDecisionTableInputOutput[] {
    return this._outputs;
  }
  /**
   The table's output columns
   */
  set outputs(value: BusinessRuleDecisionTableInputOutput[]) {
    this._outputs = value;
  }
}