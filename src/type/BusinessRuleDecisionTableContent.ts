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
  hitPolicy!: BusinessRuleHitPolicyOption;
  /** The table's rows */
  rows!: BusinessRuleDecisionTableRow[];
  /** The table's input columns */
  inputs!: BusinessRuleDecisionTableInputOutput[];
  /** The table's output columns */
  outputs!: BusinessRuleDecisionTableInputOutput[];
  constructor(data: Partial<BusinessRuleDecisionTableContent> = {}) {
    Object.assign(this, data);
  }

  /** Returns `hitPolicy`. */
  getHitPolicy(): BusinessRuleHitPolicyOption {
    return this.hitPolicy;
  }
  /** Returns `rows` as BusinessRuleDecisionTableRow instances (coerced on first access). */
  getRows(): BusinessRuleDecisionTableRow[] {
    if (!this.rows) return [];
    this.rows = this.rows.map((x: any) => x instanceof BusinessRuleDecisionTableRow ? x : new BusinessRuleDecisionTableRow(x));
    return this.rows;
  }
  /** Returns `inputs` as BusinessRuleDecisionTableInputOutput instances (coerced on first access). */
  getInputs(): BusinessRuleDecisionTableInputOutput[] {
    if (!this.inputs) return [];
    this.inputs = this.inputs.map((x: any) => x instanceof BusinessRuleDecisionTableInputOutput ? x : new BusinessRuleDecisionTableInputOutput(x));
    return this.inputs;
  }
  /** Returns `outputs` as BusinessRuleDecisionTableInputOutput instances (coerced on first access). */
  getOutputs(): BusinessRuleDecisionTableInputOutput[] {
    if (!this.outputs) return [];
    this.outputs = this.outputs.map((x: any) => x instanceof BusinessRuleDecisionTableInputOutput ? x : new BusinessRuleDecisionTableInputOutput(x));
    return this.outputs;
  }
}