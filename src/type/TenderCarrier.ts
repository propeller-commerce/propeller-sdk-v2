/**
 Carrier information for tender shipping options
 */
export class TenderCarrier {
  /** Unique identifier for the carrier */
  private _id: number;
  /** Price for this carrier service */
  private _price: number;
  /** Carrier name */
  private _name: string;
  /** Carrier description */
  private _description?: string;
  /** Carrier's logo */
  private _logo?: string;
  /** Costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules */
  private _amount: number;
  /** Expected delivery deadline for this carrier */
  private _deliveryDeadline?: string;
  /**
   Creates a new instance of TenderCarrier
   */
  constructor(data: Partial<TenderCarrier> = {}) {
    this._id = data.id!;
    this._price = data.price!;
    this._name = data.name!;
    this._description = data.description;
    this._logo = data.logo;
    this._amount = data.amount!;
    this._deliveryDeadline = data.deliveryDeadline;
  }
  /**
   Unique identifier for the carrier
   */
  get id(): number {
    return this._id;
  }
  /**
   Unique identifier for the carrier
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   Price for this carrier service
   */
  get price(): number {
    return this._price;
  }
  /**
   Price for this carrier service
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   Carrier name
   */
  get name(): string {
    return this._name;
  }
  /**
   Carrier name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Carrier description
   */
  get description(): string | undefined {
    return this._description;
  }
  /**
   Carrier description
   */
  set description(value: string | undefined) {
    this._description = value;
  }
  /**
   Carrier's logo
   */
  get logo(): string | undefined {
    return this._logo;
  }
  /**
   Carrier's logo
   */
  set logo(value: string | undefined) {
    this._logo = value;
  }
  /**
   Costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
   */
  get amount(): number {
    return this._amount;
  }
  /**
   Costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
   */
  set amount(value: number) {
    this._amount = value;
  }
  /**
   Expected delivery deadline for this carrier
   */
  get deliveryDeadline(): string | undefined {
    return this._deliveryDeadline;
  }
  /**
   Expected delivery deadline for this carrier
   */
  set deliveryDeadline(value: string | undefined) {
    this._deliveryDeadline = value;
  }
}
