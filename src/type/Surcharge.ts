import { SurchargeType } from '../enum/SurchargeType';
import { Taxcode } from '../enum/Taxcode';
import { LocalizedString } from './LocalizedString';
/**
 Additional fee or charge applied to products or orders
 * Surcharges represent extra costs such as handling fees, special processing charges, or additional services that are applied to pricing calculations. They can be configured as flat fees or percentage-based charges with specific tax treatments and validity periods.
 */
export class Surcharge {
  /** Unique identifier for the surcharge */
  private _id: string;
  /** A descriptive name for the surcharge */
  private _name: LocalizedString[];
  /** Detailed descriptions of the surcharge in different languages.
   * Provides additional context about the surcharge purpose and application across multiple languages for internationalization support. */
  private _description?: LocalizedString[];
  /** Classification of surcharge calculation method.
   * Determines how the surcharge value is applied to pricing calculations (flat fee or percentage-based). */
  private _type: SurchargeType;
  /** Numeric value for surcharge calculation.
   * For flat fees: amount in currency units. For percentages: percentage value (e.g., 15.5 for 15.5%). */
  private _value: number;
  /** Tax classification code that determines applicable tax rates and regulations.
   * Specifies the tax treatment for the surcharge (H for high rate, L for low rate, N for no tax). */
  private _taxCode: Taxcode;
  /** Geographic tax zone identifier for regional tax calculations.
   * Two-character code representing the tax jurisdiction for compliance and rate determination. */
  private _taxZone: string;
  /** Activation status of the surcharge.
   * When true, the surcharge is active and will be applied to pricing calculations. When false, it is disabled. */
  private _enabled: boolean;
  /** Start date and time for surcharge validity period.
   * Surcharge will only be applied to orders after this timestamp. If not set, surcharge is immediately active. */
  private _validFrom?: string;
  /** End date and time for surcharge validity period.
   * Surcharge will not be applied to orders after this timestamp. If not set, surcharge remains active indefinitely. */
  private _validTo?: string;
  /** Identifier of the user who created the surcharge.
   * References the user account responsible for creating this surcharge record. */
  private _createdBy?: number;
  /** Identifier of the user who last modified the surcharge.
   * References the user account responsible for the most recent changes to this surcharge record. */
  private _changedBy?: number;
  /** Timestamp when the surcharge was created.
   * Automatically set when the surcharge record is first created in the system. */
  private _dateCreated: string;
  /** Timestamp when the surcharge was last modified.
   * Automatically updated whenever the surcharge record is changed in the system. */
  private _dateChanged: string;
  /** Shop identifier for surcharge application scope.
   * If not provided, the default shop will be inferred from the channel context. */
  private _shopId?: number;
  /**
   Creates a new instance of Surcharge
   */
  constructor(data: Partial<Surcharge> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._description = data.description;
    this._type = data.type!;
    this._value = data.value!;
    this._taxCode = data.taxCode!;
    this._taxZone = data.taxZone!;
    this._enabled = data.enabled!;
    this._validFrom = data.validFrom;
    this._validTo = data.validTo;
    this._createdBy = data.createdBy;
    this._changedBy = data.changedBy;
    this._dateCreated = data.dateCreated!;
    this._dateChanged = data.dateChanged!;
    this._shopId = data.shopId;
  }
  /**
   Unique identifier for the surcharge
   */
  get id(): string {
    return this._id;
  }
  /**
   Unique identifier for the surcharge
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   A descriptive name for the surcharge
   */
  get name(): LocalizedString[] {
    return this._name;
  }
  /**
   A descriptive name for the surcharge
   */
  set name(value: LocalizedString[]) {
    this._name = value;
  }
  /**
   A brief description of the surcharge
   */
  get description(): LocalizedString[] | undefined {
    return this._description;
  }
  /**
   A brief description of the surcharge
   */
  set description(value: LocalizedString[] | undefined) {
    this._description = value;
  }
  /**
   Type of surcharge
   */
  get type(): SurchargeType {
    return this._type;
  }
  /**
   Type of surcharge
   */
  set type(value: SurchargeType) {
    this._type = value;
  }
  /**
   The value to be applied as surcharge (e.g., percentage or amount)
   */
  get value(): number {
    return this._value;
  }
  /**
   The value to be applied as surcharge (e.g., percentage or amount)
   */
  set value(value: number) {
    this._value = value;
  }
  /**
   Tax code
   */
  get taxCode(): Taxcode {
    return this._taxCode;
  }
  /**
   Tax code
   */
  set taxCode(value: Taxcode) {
    this._taxCode = value;
  }
  /**
   Tax zone
   */
  get taxZone(): string {
    return this._taxZone;
  }
  /**
   Tax zone
   */
  set taxZone(value: string) {
    this._taxZone = value;
  }
  /**
   Indicates whether the surcharge is active or not
   */
  get enabled(): boolean {
    return this._enabled;
  }
  /**
   Indicates whether the surcharge is active or not
   */
  set enabled(value: boolean) {
    this._enabled = value;
  }
  /**
   The date and time the surcharge is valid from
   */
  get validFrom(): string | undefined {
    return this._validFrom;
  }
  /**
   The date and time the surcharge is valid from
   */
  set validFrom(value: string | undefined) {
    this._validFrom = value;
  }
  /**
   The date and time the surcharge is valid to
   */
  get validTo(): string | undefined {
    return this._validTo;
  }
  /**
   The date and time the surcharge is valid to
   */
  set validTo(value: string | undefined) {
    this._validTo = value;
  }
  /**
   The userId of the user that created the surcharge
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   The userId of the user that created the surcharge
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   The userId of the user that changed the surcharge
   */
  get changedBy(): number | undefined {
    return this._changedBy;
  }
  /**
   The userId of the user that changed the surcharge
   */
  set changedBy(value: number | undefined) {
    this._changedBy = value;
  }
  /**
   The date and time the surcharge is created
   */
  get dateCreated(): string {
    return this._dateCreated;
  }
  /**
   The date and time the surcharge is created
   */
  set dateCreated(value: string) {
    this._dateCreated = value;
  }
  /**
   The date and time the surcharge is changed
   */
  get dateChanged(): string {
    return this._dateChanged;
  }
  /**
   The date and time the surcharge is changed
   */
  set dateChanged(value: string) {
    this._dateChanged = value;
  }
  /**
   Shop identifier for the tax to apply to... If not provided the default will be inferred from the channel
   */
  get shopId(): number | undefined {
    return this._shopId;
  }
  /**
   Shop identifier for the tax to apply to... If not provided the default will be inferred from the channel
   */
  set shopId(value: number | undefined) {
    this._shopId = value;
  }
}