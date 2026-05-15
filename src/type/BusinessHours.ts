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

  /** Returns `dayOfWeek`. */
  getDayOfWeek(): number {
    return this.dayOfWeek;
  }
  /** Returns `openingTime`. */
  getOpeningTime(): string | undefined {
    return this.openingTime;
  }
  /** Returns `closingTime`. */
  getClosingTime(): string | undefined {
    return this.closingTime;
  }
  /** Returns `lunchBeakStartTime`. */
  getLunchBeakStartTime(): string | undefined {
    return this.lunchBeakStartTime;
  }
  /** Returns `lunchBeakEndTime`. */
  getLunchBeakEndTime(): string | undefined {
    return this.lunchBeakEndTime;
  }
}