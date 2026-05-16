import { Firebase } from './Firebase';
/**
 Object class for VerifyToken
 */
export interface VerifyToken {
  /** uid field */
  uid: string;
  /** name field */
  name: string;
  /** claims field */
  claims?: any;
  /** iss field */
  iss: string;
  /** aud field */
  aud: string;
  /** auth_time field */
  auth_time: number;
  /** user_id field */
  user_id: string;
  /** sub field */
  sub: string;
  /** iat field */
  iat: number;
  /** exp field */
  exp: number;
  /** email field */
  email: string;
  /** email_verified field */
  email_verified: boolean;
  /** firebase field */
  firebase?: Firebase;
}