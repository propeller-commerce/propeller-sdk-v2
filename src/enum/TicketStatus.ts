/**
 * @enum TicketStatus
 * Status of the ticket. Used for tracking the lifecycle of the ticket.
 */
export enum TicketStatus {
  /** The ticket is open and waiting for action. */
  OPEN = "OPEN",
  /** The ticket is being worked on. */
  IN_PROGRESS = "IN_PROGRESS",
  /** The ticket has been resolved and completed. */
  COMPLETED = "COMPLETED",
  /** The ticket has been archived and is no longer active. */
  ARCHIVED = "ARCHIVED",
}
