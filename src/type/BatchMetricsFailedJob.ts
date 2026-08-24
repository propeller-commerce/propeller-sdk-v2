/**
 Object class for BatchMetricsFailedJob
 */
export interface BatchMetricsFailedJob {
  /** jobId field */
  jobId?: string;
  /** name field */
  name?: string;
  /** tenant field */
  tenant?: string;
  /** productIdsCount field */
  productIdsCount?: number;
  /** clusterIdsCount field */
  clusterIdsCount?: number;
  /** categoryIdsCount field */
  categoryIdsCount?: number;
  /** batchSize field */
  batchSize?: number;
  /** type field */
  type?: string;
  /** id field */
  id?: string;
  /** failedReason field */
  failedReason?: string;
  /** stacktrace field */
  stacktrace?: string[];
  /** attemptsMade field */
  attemptsMade?: number;
  /** timestamp field */
  timestamp?: string;
  /** processedOn field */
  processedOn?: string;
  /** finishedOn field */
  finishedOn?: string;
  /** redisKey field */
  redisKey?: string;
}
