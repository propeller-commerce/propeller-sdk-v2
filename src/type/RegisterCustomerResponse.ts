import { IBaseUser } from './IBaseUser';
import { RegisterUserSession } from './RegisterUserSession';
/**
 Object class for RegisterCustomerResponse
 */
export interface RegisterCustomerResponse {
  /** customer field */
  customer: IBaseUser;
  /** session field */
  session: RegisterUserSession;
}