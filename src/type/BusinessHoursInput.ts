/**
 Input object for BusinessHoursInput
 */
export interface BusinessHoursInput {
  /** dayOfWeek input field */
  dayOfWeek: number;
  /** openingTime input field */
  openingTime?: string;
  /** closingTime input field */
  closingTime?: string;
  /** lunchBeakStartTime input field */
  lunchBeakStartTime?: string;
  /** lunchBeakEndTime input field */
  lunchBeakEndTime?: string;
}