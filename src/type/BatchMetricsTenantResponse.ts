import { BatchMetricsQueueSummary } from './BatchMetricsQueueSummary';
/**
 Object class for BatchMetricsTenantResponse
 */
export interface BatchMetricsTenantResponse {
  /** tenantId field */
  tenantId: string;
  /** batchCount field */
  batchCount: number;
  /** totalDocuments field */
  totalDocuments: number;
  /** lastBatchTime field */
  lastBatchTime?: string;
  /** lastBatchSize field */
  lastBatchSize: number;
  /** averageBatchSize field */
  averageBatchSize: number;
  /** pendingIds field */
  pendingIds: number;
  /** pendingBatches field */
  pendingBatches: BatchMetricsQueueSummary;
  /** categoryFanout field */
  categoryFanout: BatchMetricsQueueSummary;
}
