/**
 Input object for PricesheetAssignInput
 */
export interface PricesheetAssignInput {
  /** Company ids */
  companyIds?: number[];
  /** Contact ids */
  contactIds?: number[];
  /** Customer ids */
  customerIds?: number[];
  /** Usergroups */
  usergroups?: string[];
}