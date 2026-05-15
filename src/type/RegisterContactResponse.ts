import { IBaseUser } from './IBaseUser';
import { RegisterUserSession } from './RegisterUserSession';
/**
 Object class for RegisterContactResponse
 */
export class RegisterContactResponse {
  /** contact field */
  contact!: IBaseUser;
  /** session field */
  session!: RegisterUserSession;
  constructor(data: Partial<RegisterContactResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `contact`. */
  getContact(): IBaseUser {
    return this.contact;
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