import { ClusterBulkMoveErrorCode } from '../enum/ClusterBulkMoveErrorCode';
/**
 Object class for ClusterBulkMoveError
 Error information for a failed cluster move operation.
 */
export interface ClusterBulkMoveError {
  /** Error code indicating the type of error. Can be VALIDATION, DB_INSERT, or UNKNOWN. */
  code: ClusterBulkMoveErrorCode;
  /** List of error messages describing what went wrong during the cluster move operation */
  messages: string[];
  /** The cluster record that failed (JSON representation) */
  record?: string;
  /** Row number in the input array where the error occurred */
  rowNumber?: number;
}
