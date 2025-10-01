import { YesNo } from '../enum/YesNo';
/**
 Object class for CartVoucher
 */
export class CartVoucher {
  /** Voucher code */
  private _code: string;
  /** Name of the rule that generated this voucher */
  private _name: string;
  /** Description of the rule that generated this voucher */
  private _description: string;
  /** Id of the rule that generated this voucher */
  private _ruleId: number;
  /** Is this voucher already redeemed */
  private _redeemed: YesNo;
  /** Can this voucher be combined with other vouchers */
  private _combinable: YesNo;
  /** Can this voucher be partially redeemed when type is a payable amount */
  private _partialRedemption: YesNo;
  /** Available amount when the voucher represents a payable amount */
  private _available: number;
  /** Remaining amount when the voucher represent a payable amount and can be partially redeemed */
  private _remaining: number;
  /**
   Creates a new instance of CartVoucher
   */
  constructor(data: Partial<CartVoucher> = {}) {
    this._code = data.code!;
    this._name = data.name!;
    this._description = data.description!;
    this._ruleId = data.ruleId!;
    this._redeemed = data.redeemed!;
    this._combinable = data.combinable!;
    this._partialRedemption = data.partialRedemption!;
    this._available = data.available!;
    this._remaining = data.remaining!;
  }
  /**
   Voucher code
   */
  get code(): string {
    return this._code;
  }
  /**
   Voucher code
   */
  set code(value: string) {
    this._code = value;
  }
  /**
   Name of the rule that generated this voucher
   */
  get name(): string {
    return this._name;
  }
  /**
   Name of the rule that generated this voucher
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Description of the rule that generated this voucher
   */
  get description(): string {
    return this._description;
  }
  /**
   Description of the rule that generated this voucher
   */
  set description(value: string) {
    this._description = value;
  }
  /**
   Id of the rule that generated this voucher
   */
  get ruleId(): number {
    return this._ruleId;
  }
  /**
   Id of the rule that generated this voucher
   */
  set ruleId(value: number) {
    this._ruleId = value;
  }
  /**
   Is this voucher already redeemed
   */
  get redeemed(): YesNo {
    return this._redeemed;
  }
  /**
   Is this voucher already redeemed
   */
  set redeemed(value: YesNo) {
    this._redeemed = value;
  }
  /**
   Can this voucher be combined with other vouchers
   */
  get combinable(): YesNo {
    return this._combinable;
  }
  /**
   Can this voucher be combined with other vouchers
   */
  set combinable(value: YesNo) {
    this._combinable = value;
  }
  /**
   Can this voucher be partially redeemed when type is a payable amount
   */
  get partialRedemption(): YesNo {
    return this._partialRedemption;
  }
  /**
   Can this voucher be partially redeemed when type is a payable amount
   */
  set partialRedemption(value: YesNo) {
    this._partialRedemption = value;
  }
  /**
   Available amount when the voucher represents a payable amount
   */
  get available(): number {
    return this._available;
  }
  /**
   Available amount when the voucher represents a payable amount
   */
  set available(value: number) {
    this._available = value;
  }
  /**
   Remaining amount when the voucher represent a payable amount and can be partially redeemed
   */
  get remaining(): number {
    return this._remaining;
  }
  /**
   Remaining amount when the voucher represent a payable amount and can be partially redeemed
   */
  set remaining(value: number) {
    this._remaining = value;
  }
}