/**
 Object class for Firebase
 */
export class Firebase {
  /** identities field */
  identities?: any;
  /** sign_in_provider field */
  sign_in_provider!: string;
  /** sign_in_second_factor field */
  sign_in_second_factor?: string;
  /** second_factor_identifier field */
  second_factor_identifier?: string;
  /** tenant field */
  tenant?: string;
  constructor(data: Partial<Firebase> = {}) {
    Object.assign(this, data);
  }

  /** Returns `identities`. */
  getIdentities(): any | undefined {
    return this.identities;
  }
  /** Returns `sign_in_provider`. */
  getSign_in_provider(): string {
    return this.sign_in_provider;
  }
  /** Returns `sign_in_second_factor`. */
  getSign_in_second_factor(): string | undefined {
    return this.sign_in_second_factor;
  }
  /** Returns `second_factor_identifier`. */
  getSecond_factor_identifier(): string | undefined {
    return this.second_factor_identifier;
  }
  /** Returns `tenant`. */
  getTenant(): string | undefined {
    return this.tenant;
  }
}