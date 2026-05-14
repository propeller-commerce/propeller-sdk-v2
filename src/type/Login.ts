import { GCIPUser } from './GCIPUser';
/**
 Object class for Login
 */
export class Login {
  /** providerId field */
  providerId?: string;
  /** operationType field */
  operationType?: string;
  /** session field */
  session?: GCIPUser;
  constructor(data: Partial<Login> = {}) {
    Object.assign(this, data);
  }
}