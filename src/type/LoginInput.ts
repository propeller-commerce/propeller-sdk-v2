/**
 Input object for LoginInput
 */
export interface LoginInput {
  /** email input field */
  email: string;
  /** password input field */
  password: string;
  /** provider input field */
  provider?: string;
}