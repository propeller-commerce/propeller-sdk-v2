import { IBaseUser } from './IBaseUser';
import { RegisterUserSession } from './RegisterUserSession';
/**
 Object class for RegisterContactResponse
 */
export class RegisterContactResponse {
  /** contact field */
  private _contact: IBaseUser;
  /** session field */
  private _session: RegisterUserSession;
  /**
   Creates a new instance of RegisterContactResponse
   */
  constructor(data: Partial<RegisterContactResponse> = {}) {
    this._contact = data.contact!;
    this._session = data.session!;
  }
  /**
   contact field
   */
  get contact(): IBaseUser {
    return this._contact;
  }
  /**
   contact field
   */
  set contact(value: IBaseUser) {
    this._contact = value;
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