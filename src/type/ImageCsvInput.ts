import { ImageCsvMapping } from './ImageCsvMapping';
/**
 Input object for ImageCsvInput
 */
export interface ImageCsvInput {
  /** CSV file */
  file: File;
  /** A list of MediaImages CSV field mappings */
  mappings?: ImageCsvMapping[];
}