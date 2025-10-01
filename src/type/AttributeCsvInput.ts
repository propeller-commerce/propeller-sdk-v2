import { AttributeCsvMapping } from './AttributeCsvMapping';
/**
 Input object for AttributeCsvInput
 */
export interface AttributeCsvInput {
  /** CSV file */
  file: File;
  /** A list of attributes CSV field mappings */
  mappings?: AttributeCsvMapping[];
}