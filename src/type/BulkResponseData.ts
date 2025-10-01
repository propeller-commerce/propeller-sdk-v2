/**
 Object class for BulkResponseData
 */
export class BulkResponseData {
  /** Number of created items */
  private _created: number;
  /** Number of updated items */
  private _updated: number;
  /** Total number of created and updated items */
  private _total: number;
  /**
   Creates a new instance of BulkResponseData
   */
  constructor(data: Partial<BulkResponseData> = {}) {
    this._created = data.created!;
    this._updated = data.updated!;
    this._total = data.total!;
  }
  /**
   Number of created items
   */
  get created(): number {
    return this._created;
  }
  /**
   Number of created items
   */
  set created(value: number) {
    this._created = value;
  }
  /**
   Number of updated items
   */
  get updated(): number {
    return this._updated;
  }
  /**
   Number of updated items
   */
  set updated(value: number) {
    this._updated = value;
  }
  /**
   Total number of created and updated items
   */
  get total(): number {
    return this._total;
  }
  /**
   Total number of created and updated items
   */
  set total(value: number) {
    this._total = value;
  }
}