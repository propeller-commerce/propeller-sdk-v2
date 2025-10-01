/**
 Object class for GCIPMetadata
 */
export class GCIPMetadata {
  /** lastSignInTime field */
  private _lastSignInTime?: string;
  /** creationTime field */
  private _creationTime?: string;
  /** lastRefreshTime field */
  private _lastRefreshTime?: string;
  /**
   Creates a new instance of GCIPMetadata
   */
  constructor(data: Partial<GCIPMetadata> = {}) {
    this._lastSignInTime = data.lastSignInTime;
    this._creationTime = data.creationTime;
    this._lastRefreshTime = data.lastRefreshTime;
  }
  /**
   lastSignInTime field
   */
  get lastSignInTime(): string | undefined {
    return this._lastSignInTime;
  }
  /**
   lastSignInTime field
   */
  set lastSignInTime(value: string | undefined) {
    this._lastSignInTime = value;
  }
  /**
   creationTime field
   */
  get creationTime(): string | undefined {
    return this._creationTime;
  }
  /**
   creationTime field
   */
  set creationTime(value: string | undefined) {
    this._creationTime = value;
  }
  /**
   lastRefreshTime field
   */
  get lastRefreshTime(): string | undefined {
    return this._lastRefreshTime;
  }
  /**
   lastRefreshTime field
   */
  set lastRefreshTime(value: string | undefined) {
    this._lastRefreshTime = value;
  }
}