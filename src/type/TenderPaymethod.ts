/**
 Object class for TenderPaymethod
 */
export class TenderPaymethod {
  /** Payment method code */
  code!: string;
  /** Payment method external code */
  externalCode?: string;
  /** Payment method type */
  type?: string;
  /** Payment method description */
  description!: string;
  /** Payment method amount */
  amount!: number;
  /** Indicates whether payment method is allowed for the tender user */
  allowed!: boolean;
  constructor(data: Partial<TenderPaymethod> = {}) {
    Object.assign(this, data);
  }

  /** Returns `code`. */
  getCode(): string {
    return this.code;
  }
  /** Returns `externalCode`. */
  getExternalCode(): string | undefined {
    return this.externalCode;
  }
  /** Returns `type`. */
  getType(): string | undefined {
    return this.type;
  }
  /** Returns `description`. */
  getDescription(): string {
    return this.description;
  }
  /** Returns `amount`. */
  getAmount(): number {
    return this.amount;
  }
  /** Returns `allowed`. */
  getAllowed(): boolean {
    return this.allowed;
  }
}