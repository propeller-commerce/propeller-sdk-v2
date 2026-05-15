/**
 Object class for GCIPMetadata
 */
export class GCIPMetadata {
  /** lastSignInTime field */
  lastSignInTime?: string;
  /** creationTime field */
  creationTime?: string;
  /** lastRefreshTime field */
  lastRefreshTime?: string;
  constructor(data: Partial<GCIPMetadata> = {}) {
    Object.assign(this, data);
  }

  /** Returns `lastSignInTime`. */
  getLastSignInTime(): string | undefined {
    return this.lastSignInTime;
  }
  /** Returns `creationTime`. */
  getCreationTime(): string | undefined {
    return this.creationTime;
  }
  /** Returns `lastRefreshTime`. */
  getLastRefreshTime(): string | undefined {
    return this.lastRefreshTime;
  }
}