import { SurchargeType } from '../enum/SurchargeType';
import { Taxcode } from '../enum/Taxcode';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for CreateSurchargeInput
 */
export interface CreateSurchargeInput {
  /** A descriptive name for the surcharge */
  name: LocalizedStringInput[];
  /** A brief description of the surcharge */
  description?: LocalizedStringInput[];
  /** Type of the surcharge */
  type: SurchargeType;
  /** The value to be applied as surcharge (e.g., percentage or amount) */
  value: number;
  /** Tax code */
  taxCode: Taxcode;
  /** Tax zone */
  taxZone: string;
  /** Indicates whether the surcharge is active or not */
  enabled: boolean;
  /** The date and time the surcharge is valid from */
  validFrom?: string;
  /** The date and time the surcharge is valid to */
  validTo?: string;
  /** Shop identifier for the surcharge to apply to... If not provided the default will be inferred from the channel */
  shopId?: number;
}