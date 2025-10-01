/**
 * @enum NotificationType
 Types of notifications that can be sent to users
 */
export enum NotificationType {
  /** Email notification */
  EMAIL = "EMAIL",
  /** SMS text message notification */
  SMS = "SMS",
  /** Push notification to mobile device */
  PUSH = "PUSH",
}