import { ClusterCsvMapping } from './ClusterCsvMapping';
/**
 Input object for ClusterCsvInput
 */
export interface ClusterCsvInput {
  /** CSV file */
  file: File;
  /** A list of clusters CSV field mappings */
  mappings?: ClusterCsvMapping[];
}