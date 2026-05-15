import { IBaseUser } from './IBaseUser';
import { RegisterUserSession } from './RegisterUserSession';
/**
 Object class for RegisterCustomerResponse
 */
export class RegisterCustomerResponse {
  /** customer field */
  customer!: IBaseUser;
  /** session field */
  session!: RegisterUserSession;
  constructor(data: Partial<RegisterCustomerResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `customer`. */
  getCustomer(): IBaseUser {
    return this.customer;
  }
  /** Returns `session` as a RegisterUserSession instance (coerced on first access). */
  getSession(): RegisterUserSession | undefined {
    if (this.session == null) return undefined;
    if (!(this.session instanceof RegisterUserSession)) {
      this.session = new RegisterUserSession(this.session as any);
    }
    return this.session;
  }
}