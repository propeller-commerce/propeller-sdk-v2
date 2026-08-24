import { BatchMetricsQueueSummary } from './BatchMetricsQueueSummary';
/**
 Object class for BatchMetricsQueueStatusResponse
 */
export interface BatchMetricsQueueStatusResponse {
  /** intake field */
  intake: BatchMetricsQueueSummary;
  /** processor field */
  processor: BatchMetricsQueueSummary;
  /** retry field */
  retry: BatchMetricsQueueSummary;
  /** categoryFanout field */
  categoryFanout: BatchMetricsQueueSummary;
}
