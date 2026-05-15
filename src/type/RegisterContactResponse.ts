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
}