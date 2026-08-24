import { ReindexJobDetail } from './ReindexJobDetail';
import { ReindexProgress } from './ReindexProgress';
/**
 Object class for ReindexStatusResponse
 */
export interface ReindexStatusResponse {
  /** reindexId field */
  reindexId: string;
  /** progress field */
  progress?: ReindexProgress;
  /** jobs field */
  jobs?: ReindexJobDetail[];
}
