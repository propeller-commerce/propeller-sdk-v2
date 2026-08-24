/**
 Input object for PasswordRecoveryLinkInput
 */
export interface PasswordRecoveryLinkInput {
  /** The email address of the user to generate the recovery link for */
  email: string;
  /** The page the user will be redirected to after the user changed his/her password. */
  redirectUrl?: string;
  /** language input field */
  language?: string;
}