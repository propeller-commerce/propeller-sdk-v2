/**
 Input object for CartSetContactInput
 */
export interface CartSetContactInput {
  /** Contact unique identifier */
  contactId: number;
  /** Company that the contact belongs to [If not provided the original parent company will be used] */
  companyId?: number;
}