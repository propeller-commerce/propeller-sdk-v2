import { BatchMetricsHourlyBucket } from './BatchMetricsHourlyBucket';
/**
 Object class for BatchMetricsTenantHourlyResponse
 */
export interface BatchMetricsTenantHourlyResponse {
  /** tenantId field */
  tenantId: string;
  /** hours field */
  hours: BatchMetricsHourlyBucket[];
  /** totalHours field */
  totalHours: number;
}
