import { BusinessRuleDecisionTableCell } from './BusinessRuleDecisionTableCell';
/**
 Represents a single row in a business rule decision table.
 */
export class BusinessRuleDecisionTableRow {
  /** The generated ID for the row */
  id!: string | number;
  /** The row's input columns */
  inputs!: BusinessRuleDecisionTableCell[];
  /** The row's output columns */
  outputs!: BusinessRuleDecisionTableCell[];
  constructor(data: Partial<BusinessRuleDecisionTableRow> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `inputs` as BusinessRuleDecisionTableCell instances (coerced on first access). */
  getInputs(): BusinessRuleDecisionTableCell[] {
    if (!this.inputs) return [];
    this.inputs = this.inputs.map((x: any) => x instanceof BusinessRuleDecisionTableCell ? x : new BusinessRuleDecisionTableCell(x));
    return this.inputs;
  }
  /** Returns `outputs` as BusinessRuleDecisionTableCell instances (coerced on first access). */
  getOutputs(): BusinessRuleDecisionTableCell[] {
    if (!this.outputs) return [];
    this.outputs = this.outputs.map((x: any) => x instanceof BusinessRuleDecisionTableCell ? x : new BusinessRuleDecisionTableCell(x));
    return this.outputs;
  }
}