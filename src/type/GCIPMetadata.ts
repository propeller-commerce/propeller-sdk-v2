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
}