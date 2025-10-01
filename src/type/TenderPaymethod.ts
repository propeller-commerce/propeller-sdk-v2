/**
 Object class for TenderPaymethod
 */
export class TenderPaymethod {
  /** Payment method code */
  private _code: string;
  /** Payment method external code */
  private _externalCode?: string;
  /** Payment method type */
  private _type?: string;
  /** Payment method description */
  private _description: string;
  /** Payment method amount */
  private _amount: number;
  /** Indicates whether payment method is allowed for the tender user */
  private _allowed: boolean;
  /**
   Creates a new instance of TenderPaymethod
   */
  constructor(data: Partial<TenderPaymethod> = {}) {
    this._code = data.code!;
    this._externalCode = data.externalCode;
    this._type = data.type;
    this._description = data.description!;
    this._amount = data.amount!;
    this._allowed = data.allowed!;
  }
  /**
   Payment method code
   */
  get code(): string {
    return this._code;
  }
  /**
   Payment method code
   */
  set code(value: string) {
    this._code = value;
  }
  /**
   Payment method external code
   */
  get externalCode(): string | undefined {
    return this._externalCode;
  }
  /**
   Payment method external code
   */
  set externalCode(value: string | undefined) {
    this._externalCode = value;
  }
  /**
   Payment method type
   */
  get type(): string | undefined {
    return this._type;
  }
  /**
   Payment method type
   */
  set type(value: string | undefined) {
    this._type = value;
  }
  /**
   Payment method description
   */
  get description(): string {
    return this._description;
  }
  /**
   Payment method description
   */
  set description(value: string) {
    this._description = value;
  }
  /**
   Payment method amount
   */
  get amount(): number {
    return this._amount;
  }
  /**
   Payment method amount
   */
  set amount(value: number) {
    this._amount = value;
  }
  /**
   Indicates whether payment method is allowed for the tender user
   */
  get allowed(): boolean {
    return this._allowed;
  }
  /**
   Indicates whether payment method is allowed for the tender user
   */
  set allowed(value: boolean) {
    this._allowed = value;
  }
}