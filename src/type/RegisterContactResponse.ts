import { IBaseUser } from './IBaseUser';
import { RegisterUserSession } from './RegisterUserSession';
/**
 Object class for RegisterContactResponse
 */
export interface RegisterContactResponse {
  /** contact field */
  contact: IBaseUser;
  /** session field */
  session: RegisterUserSession;
}