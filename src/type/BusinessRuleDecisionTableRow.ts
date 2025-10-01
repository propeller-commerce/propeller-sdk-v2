import { BusinessRuleDecisionTableCell } from './BusinessRuleDecisionTableCell';
/**
 Represents a single row in a business rule decision table.
 */
export class BusinessRuleDecisionTableRow {
  /** The generated ID for the row */
  private _id: string | number;
  /** The row's input columns */
  private _inputs: BusinessRuleDecisionTableCell[];
  /** The row's output columns */
  private _outputs: BusinessRuleDecisionTableCell[];
  /**
   Creates a new instance of BusinessRuleDecisionTableRow
   */
  constructor(data: Partial<BusinessRuleDecisionTableRow> = {}) {
    this._id = data.id!;
    this._inputs = data.inputs!;
    this._outputs = data.outputs!;
  }
  /**
   The generated ID for the row
   */
  get id(): string | number {
    return this._id;
  }
  /**
   The generated ID for the row
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   The row's input columns
   */
  get inputs(): BusinessRuleDecisionTableCell[] {
    return this._inputs;
  }
  /**
   The row's input columns
   */
  set inputs(value: BusinessRuleDecisionTableCell[]) {
    this._inputs = value;
  }
  /**
   The row's output columns
   */
  get outputs(): BusinessRuleDecisionTableCell[] {
    return this._outputs;
  }
  /**
   The row's output columns
   */
  set outputs(value: BusinessRuleDecisionTableCell[]) {
    this._outputs = value;
  }
}