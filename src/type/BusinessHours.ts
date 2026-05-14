/**
 Object class for BusinessHours
 */
export interface BusinessHours {
  /** dayOfWeek field */
  dayOfWeek: number;
  /** openingTime field */
  openingTime?: string;
  /** closingTime field */
  closingTime?: string;
  /** lunchBeakStartTime field */
  lunchBeakStartTime?: string;
  /** lunchBeakEndTime field */
  lunchBeakEndTime?: string;
}