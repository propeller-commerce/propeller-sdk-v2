/**
 Object class for ReindexProgress
 */
export interface ReindexProgress {
  /** phase field */
  phase?: string;
  /** totalBatches field */
  totalBatches: number;
  /** queuedBatches field */
  queuedBatches: number;
  /** completedBatches field */
  completedBatches: number;
  /** failedBatches field */
  failedBatches: number;
  /** activeBatches field */
  activeBatches: number;
  /** waitingBatches field */
  waitingBatches: number;
  /** totalDocs field */
  totalDocs: number;
  /** totalProducts field */
  totalProducts?: number;
  /** totalClusters field */
  totalClusters?: number;
  /** totalCategories field */
  totalCategories?: number;
  /** progressPercent field */
  progressPercent: number;
  /** startedAt field */
  startedAt?: number;
  /** Verified parent document count after indexing */
  indexedDocs?: number;
  /** Verified product count after indexing */
  indexedProducts?: number;
  /** Verified cluster count after indexing */
  indexedClusters?: number;
  /** Verified category count after indexing */
  indexedCategories?: number;
  /** Percentage of expected documents actually indexed */
  docSuccessRate?: number;
  /** error field */
  error?: string;
  /** failedJob field */
  failedJob?: string;
}
