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
}