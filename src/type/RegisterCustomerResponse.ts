import { IBaseUser } from './IBaseUser';
import { RegisterUserSession } from './RegisterUserSession';
/**
 Object class for RegisterCustomerResponse
 */
export class RegisterCustomerResponse {
  /** customer field */
  private _customer: IBaseUser;
  /** session field */
  private _session: RegisterUserSession;
  /**
   Creates a new instance of RegisterCustomerResponse
   */
  constructor(data: Partial<RegisterCustomerResponse> = {}) {
    this._customer = data.customer!;
    this._session = data.session!;
  }
  /**
   customer field
   */
  get customer(): IBaseUser {
    return this._customer;
  }
  /**
   customer field
   */
  set customer(value: IBaseUser) {
    this._customer = value;
  }
  /**
   session field
   */
  get session(): RegisterUserSession {
    return this._session;
  }
  /**
   session field
   */
  set session(value: RegisterUserSession) {
    this._session = value;
  }
}