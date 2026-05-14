import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Base interface for user entities
 */
export interface IBaseUser {
/** User's email address */
  email?: string;
  /** User's first name */
  firstName?: string;
  /** User's last name */
  lastName?: string;
}