/**
 Object class for BulkResponseData
 */
export class BulkResponseData {
  /** Number of created items */
  created!: number;
  /** Number of updated items */
  updated!: number;
  /** Total number of created and updated items */
  total!: number;
  constructor(data: Partial<BulkResponseData> = {}) {
    Object.assign(this, data);
  }
}