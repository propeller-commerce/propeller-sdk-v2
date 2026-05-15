import { SurchargeType } from '../enum/SurchargeType';
import { Taxcode } from '../enum/Taxcode';
import { LocalizedString } from './LocalizedString';
/**
 Additional fee or charge applied to products or orders
 * Surcharges represent extra costs such as handling fees, special processing charges, or additional services that are applied to pricing calculations. They can be configured as flat fees or percentage-based charges with specific tax treatments and validity periods.
 */
export class Surcharge {
  /** Unique identifier for the surcharge */
  id!: string;
  /** A descriptive name for the surcharge */
  name!: LocalizedString[];
  /** Detailed descriptions of the surcharge in different languages.
   * Provides additional context about the surcharge purpose and application across multiple languages for internationalization support. */
  description?: LocalizedString[];
  /** Classification of surcharge calculation method.
   * Determines how the surcharge value is applied to pricing calculations (flat fee or percentage-based). */
  type!: SurchargeType;
  /** Numeric value for surcharge calculation.
   * For flat fees: amount in currency units. For percentages: percentage value (e.g., 15.5 for 15.5%). */
  value!: number;
  /** Tax classification code that determines applicable tax rates and regulations.
   * Specifies the tax treatment for the surcharge (H for high rate, L for low rate, N for no tax). */
  taxCode!: Taxcode;
  /** Geographic tax zone identifier for regional tax calculations.
   * Two-character code representing the tax jurisdiction for compliance and rate determination. */
  taxZone!: string;
  /** Activation status of the surcharge.
   * When true, the surcharge is active and will be applied to pricing calculations. When false, it is disabled. */
  enabled!: boolean;
  /** Start date and time for surcharge validity period.
   * Surcharge will only be applied to orders after this timestamp. If not set, surcharge is immediately active. */
  validFrom?: string;
  /** End date and time for surcharge validity period.
   * Surcharge will not be applied to orders after this timestamp. If not set, surcharge remains active indefinitely. */
  validTo?: string;
  /** Identifier of the user who created the surcharge.
   * References the user account responsible for creating this surcharge record. */
  createdBy?: number;
  /** Identifier of the user who last modified the surcharge.
   * References the user account responsible for the most recent changes to this surcharge record. */
  changedBy?: number;
  /** Timestamp when the surcharge was created.
   * Automatically set when the surcharge record is first created in the system. */
  dateCreated!: string;
  /** Timestamp when the surcharge was last modified.
   * Automatically updated whenever the surcharge record is changed in the system. */
  dateChanged!: string;
  /** Shop identifier for surcharge application scope.
   * If not provided, the default shop will be inferred from the channel context. */
  /** @deprecated Shop is deprecated and will be removed in the future. */
  shopId?: number;
  constructor(data: Partial<Surcharge> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.name;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.description;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `type`. */
  getType(): SurchargeType {
    return this.type;
  }
  /** Returns `value`. */
  getValue(): number {
    return this.value;
  }
  /** Returns `taxCode`. */
  getTaxCode(): Taxcode {
    return this.taxCode;
  }
  /** Returns `taxZone`. */
  getTaxZone(): string {
    return this.taxZone;
  }
  /** Returns `enabled`. */
  getEnabled(): boolean {
    return this.enabled;
  }
  /** Returns `validFrom`. */
  getValidFrom(): string | undefined {
    return this.validFrom;
  }
  /** Returns `validTo`. */
  getValidTo(): string | undefined {
    return this.validTo;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `changedBy`. */
  getChangedBy(): number | undefined {
    return this.changedBy;
  }
  /** Returns `dateCreated`. */
  getDateCreated(): string {
    return this.dateCreated;
  }
  /** Returns `dateChanged`. */
  getDateChanged(): string {
    return this.dateChanged;
  }
  /** Returns `shopId`. */
  getShopId(): number | undefined {
    return this.shopId;
  }
}