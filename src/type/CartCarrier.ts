/**
 Object class for CartCarrier
 */
export class CartCarrier {
  /** Carrier unique identifier */
  private _id: number;
  /** Carrier name */
  private _name: string;
  /** Carrier's logo */
  private _logo?: string;
  /** Targeted costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules */
  private _price: number;
  /** Carrier's delivery deadline */
  private _deliveryDeadline?: string;
  /**
   Creates a new instance of CartCarrier
   */
  constructor(data: Partial<CartCarrier> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._logo = data.logo;
    this._price = data.price!;
    this._deliveryDeadline = data.deliveryDeadline;
  }
  /**
   Carrier unique identifier
   */
  get id(): number {
    return this._id;
  }
  /**
   Carrier unique identifier
   */
  set id(value: number) {
    this._id = value;
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
   Targeted costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
   */
  get price(): number {
    return this._price;
  }
  /**
   Targeted costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   Carrier's delivery deadline
   */
  get deliveryDeadline(): string | undefined {
    return this._deliveryDeadline;
  }
  /**
   Carrier's delivery deadline
   */
  set deliveryDeadline(value: string | undefined) {
    this._deliveryDeadline = value;
  }
}