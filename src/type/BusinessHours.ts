/**
 Object class for BusinessHours
 */
export class BusinessHours {
  /** dayOfWeek field */
  private _dayOfWeek: number;
  /** openingTime field */
  private _openingTime?: string;
  /** closingTime field */
  private _closingTime?: string;
  /** lunchBeakStartTime field */
  private _lunchBeakStartTime?: string;
  /** lunchBeakEndTime field */
  private _lunchBeakEndTime?: string;
  /**
   Creates a new instance of BusinessHours
   */
  constructor(data: Partial<BusinessHours> = {}) {
    this._dayOfWeek = data.dayOfWeek!;
    this._openingTime = data.openingTime;
    this._closingTime = data.closingTime;
    this._lunchBeakStartTime = data.lunchBeakStartTime;
    this._lunchBeakEndTime = data.lunchBeakEndTime;
  }
  /**
   dayOfWeek field
   */
  get dayOfWeek(): number {
    return this._dayOfWeek;
  }
  /**
   dayOfWeek field
   */
  set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  /**
   openingTime field
   */
  get openingTime(): string | undefined {
    return this._openingTime;
  }
  /**
   openingTime field
   */
  set openingTime(value: string | undefined) {
    this._openingTime = value;
  }
  /**
   closingTime field
   */
  get closingTime(): string | undefined {
    return this._closingTime;
  }
  /**
   closingTime field
   */
  set closingTime(value: string | undefined) {
    this._closingTime = value;
  }
  /**
   lunchBeakStartTime field
   */
  get lunchBeakStartTime(): string | undefined {
    return this._lunchBeakStartTime;
  }
  /**
   lunchBeakStartTime field
   */
  set lunchBeakStartTime(value: string | undefined) {
    this._lunchBeakStartTime = value;
  }
  /**
   lunchBeakEndTime field
   */
  get lunchBeakEndTime(): string | undefined {
    return this._lunchBeakEndTime;
  }
  /**
   lunchBeakEndTime field
   */
  set lunchBeakEndTime(value: string | undefined) {
    this._lunchBeakEndTime = value;
  }
}