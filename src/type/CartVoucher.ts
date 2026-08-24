import { YesNo } from '../enum/YesNo';
/**
 Object class for CartVoucher
 */
export interface CartVoucher {
  /** Voucher code */
  code: string;
  /** Name of the rule that generated this voucher */
  name: string;
  /** Description of the rule that generated this voucher */
  description: string;
  /** Id of the rule that generated this voucher */
  ruleId: number;
  /** Is this voucher already redeemed */
  redeemed: YesNo;
  /** Can this voucher be combined with other vouchers */
  combinable: YesNo;
  /** Can this voucher be partially redeemed when type is a payable amount */
  partialRedemption: YesNo;
  /** Available amount when the voucher represents a payable amount */
  available: number;
  /** Remaining amount when the voucher represent a payable amount and can be partially redeemed */
  remaining: number;
}