/**
 Object class for Firebase
 */
export class Firebase {
  /** identities field */
  private _identities?: any;
  /** sign_in_provider field */
  private _sign_in_provider: string;
  /** sign_in_second_factor field */
  private _sign_in_second_factor?: string;
  /** second_factor_identifier field */
  private _second_factor_identifier?: string;
  /** tenant field */
  private _tenant?: string;
  /**
   Creates a new instance of Firebase
   */
  constructor(data: Partial<Firebase> = {}) {
    this._identities = data.identities;
    this._sign_in_provider = data.sign_in_provider!;
    this._sign_in_second_factor = data.sign_in_second_factor;
    this._second_factor_identifier = data.second_factor_identifier;
    this._tenant = data.tenant;
  }
  /**
   identities field
   */
  get identities(): any | undefined {
    return this._identities;
  }
  /**
   identities field
   */
  set identities(value: any | undefined) {
    this._identities = value;
  }
  /**
   sign_in_provider field
   */
  get sign_in_provider(): string {
    return this._sign_in_provider;
  }
  /**
   sign_in_provider field
   */
  set sign_in_provider(value: string) {
    this._sign_in_provider = value;
  }
  /**
   sign_in_second_factor field
   */
  get sign_in_second_factor(): string | undefined {
    return this._sign_in_second_factor;
  }
  /**
   sign_in_second_factor field
   */
  set sign_in_second_factor(value: string | undefined) {
    this._sign_in_second_factor = value;
  }
  /**
   second_factor_identifier field
   */
  get second_factor_identifier(): string | undefined {
    return this._second_factor_identifier;
  }
  /**
   second_factor_identifier field
   */
  set second_factor_identifier(value: string | undefined) {
    this._second_factor_identifier = value;
  }
  /**
   tenant field
   */
  get tenant(): string | undefined {
    return this._tenant;
  }
  /**
   tenant field
   */
  set tenant(value: string | undefined) {
    this._tenant = value;
  }
}