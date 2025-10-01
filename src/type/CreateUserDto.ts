import { Gender } from '../enum/Gender';
/**
 Input object for CreateUserDto
 */
export interface CreateUserDto {
  /** firstName input field */
  firstName?: string;
  /** middleName input field */
  middleName?: string;
  /** lastName input field */
  lastName?: string;
  /** gender input field */
  gender?: Gender;
  /** language input field */
  language?: string;
  /** phone input field */
  phone?: string;
  /** job input field */
  job?: string;
  /** email input field */
  email: string;
}