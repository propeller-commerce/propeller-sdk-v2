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
}