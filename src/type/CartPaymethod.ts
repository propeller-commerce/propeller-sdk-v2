import { Taxcode } from '../enum/Taxcode';
/**
 Object class for CartPaymethod
 */
export class CartPaymethod {
  /** Paymethod code */
  private _code: string;
  /** Paymethod name */
  private _name: string;
  /** External code */
  private _externalCode?: string;
  /** Paymethod type */
  private _type?: string;
  /** Tax code */
  private _taxCode?: Taxcode;
  /** Paymethod price */
  private _price: number;
  /**
   Creates a new instance of CartPaymethod
   */
  constructor(data: Partial<CartPaymethod> = {}) {
    this._code = data.code!;
    this._name = data.name!;
    this._externalCode = data.externalCode;
    this._type = data.type;
    this._taxCode = data.taxCode;
    this._price = data.price!;
  }
  /**
   Paymethod code
   */
  get code(): string {
    return this._code;
  }
  /**
   Paymethod code
   */
  set code(value: string) {
    this._code = value;
  }
  /**
   Paymethod name
   */
  get name(): string {
    return this._name;
  }
  /**
   Paymethod name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   External code
   */
  get externalCode(): string | undefined {
    return this._externalCode;
  }
  /**
   External code
   */
  set externalCode(value: string | undefined) {
    this._externalCode = value;
  }
  /**
   Paymethod type
   */
  get type(): string | undefined {
    return this._type;
  }
  /**
   Paymethod type
   */
  set type(value: string | undefined) {
    this._type = value;
  }
  /**
   Tax code
   */
  get taxCode(): Taxcode | undefined {
    return this._taxCode;
  }
  /**
   Tax code
   */
  set taxCode(value: Taxcode | undefined) {
    this._taxCode = value;
  }
  /**
   Paymethod price
   */
  get price(): number {
    return this._price;
  }
  /**
   Paymethod price
   */
  set price(value: number) {
    this._price = value;
  }
}