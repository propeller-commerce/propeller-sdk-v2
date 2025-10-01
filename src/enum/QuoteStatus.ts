/**
 * @enum QuoteStatus
 Status enumeration for quotes in the system
 */
export enum QuoteStatus {
  /** Quote is in draft state and not yet sent */
  DRAFT = "DRAFT",
  /** Quote has been sent to customer */
  SENT = "SENT",
  /** Quote has been accepted by customer */
  ACCEPTED = "ACCEPTED",
  /** Quote has been rejected by customer */
  REJECTED = "REJECTED"
}