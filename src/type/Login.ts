import { GCIPUser } from './GCIPUser';
/**
 Object class for Login
 */
export interface Login {
  /** providerId field */
  providerId?: string;
  /** operationType field */
  operationType?: string;
  /** session field */
  session?: GCIPUser;
}