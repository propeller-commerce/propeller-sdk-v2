/**
 Object class for ContactActionsData
 */
export interface ContactActionsData {
  /** Output message response [INFO/WARNING/ERROR] */
  message: string;
  /** Success status */
  success: boolean;
  /** Company ID the action was performed to */
  companyId: number;
}