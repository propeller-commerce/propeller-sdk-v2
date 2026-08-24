/**
 Input object for PricesheetUnassignInput
 */
export interface PricesheetUnassignInput {
  /** Company ids */
  companyIds?: number[];
  /** Contact ids */
  contactIds?: number[];
  /** Customer ids */
  customerIds?: number[];
  /** Usergroups */
  usergroups?: string[];
}