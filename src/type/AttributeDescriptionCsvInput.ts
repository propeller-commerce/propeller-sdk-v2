import { AttributeDescriptionCsvMapping } from './AttributeDescriptionCsvMapping';
/**
 Input object for AttributeDescriptionCsvInput
 */
export interface AttributeDescriptionCsvInput {
  /** CSV file */
  file: File;
  /** A list of attribute descriptions CSV field mappings */
  mappings?: AttributeDescriptionCsvMapping[];
}