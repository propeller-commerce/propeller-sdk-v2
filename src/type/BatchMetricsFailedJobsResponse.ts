import { BatchMetricsFailedJobsByQueue } from './BatchMetricsFailedJobsByQueue';
/**
 Object class for BatchMetricsFailedJobsResponse
 */
export interface BatchMetricsFailedJobsResponse {
  /** tenant field */
  tenant?: string;
  /** queues field */
  queues: BatchMetricsFailedJobsByQueue[];
}
