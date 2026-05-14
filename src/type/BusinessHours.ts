/**
 Object class for BusinessHours
 */
export class BusinessHours {
  /** dayOfWeek field */
  dayOfWeek!: number;
  /** openingTime field */
  openingTime?: string;
  /** closingTime field */
  closingTime?: string;
  /** lunchBeakStartTime field */
  lunchBeakStartTime?: string;
  /** lunchBeakEndTime field */
  lunchBeakEndTime?: string;
  constructor(data: Partial<BusinessHours> = {}) {
    Object.assign(this, data);
  }
}