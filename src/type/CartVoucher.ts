import { YesNo } from '../enum/YesNo';
/**
 Object class for CartVoucher
 */
export class CartVoucher {
  /** Voucher code */
  code!: string;
  /** Name of the rule that generated this voucher */
  name!: string;
  /** Description of the rule that generated this voucher */
  description!: string;
  /** Id of the rule that generated this voucher */
  ruleId!: number;
  /** Is this voucher already redeemed */
  redeemed!: YesNo;
  /** Can this voucher be combined with other vouchers */
  combinable!: YesNo;
  /** Can this voucher be partially redeemed when type is a payable amount */
  partialRedemption!: YesNo;
  /** Available amount when the voucher represents a payable amount */
  available!: number;
  /** Remaining amount when the voucher represent a payable amount and can be partially redeemed */
  remaining!: number;
  constructor(data: Partial<CartVoucher> = {}) {
    Object.assign(this, data);
  }

  /** Returns `code`. */
  getCode(): string {
    return this.code;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `description`. */
  getDescription(): string {
    return this.description;
  }
  /** Returns `ruleId`. */
  getRuleId(): number {
    return this.ruleId;
  }
  /** Returns `redeemed`. */
  getRedeemed(): YesNo {
    return this.redeemed;
  }
  /** Returns `combinable`. */
  getCombinable(): YesNo {
    return this.combinable;
  }
  /** Returns `partialRedemption`. */
  getPartialRedemption(): YesNo {
    return this.partialRedemption;
  }
  /** Returns `available`. */
  getAvailable(): number {
    return this.available;
  }
  /** Returns `remaining`. */
  getRemaining(): number {
    return this.remaining;
  }
}