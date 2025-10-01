import { PriceCsvMapping } from './PriceCsvMapping';
/**
 Input object for PriceCsvInput
 */
export interface PriceCsvInput {
  /** CSV file */
  file: File;
  /** List of Price mappings */
  mappings?: PriceCsvMapping[];
}