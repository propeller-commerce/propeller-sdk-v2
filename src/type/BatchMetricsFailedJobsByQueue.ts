import { BatchMetricsFailedJob } from './BatchMetricsFailedJob';
/**
 Object class for BatchMetricsFailedJobsByQueue
 */
export interface BatchMetricsFailedJobsByQueue {
  /** queue field */
  queue: string;
  /** jobs field */
  jobs: BatchMetricsFailedJob[];
}
