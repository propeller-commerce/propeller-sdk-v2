import { ImageFieldName } from '../enum/ImageFieldName';
/**
 Input object for ImageCsvMapping
 */
export interface ImageCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: ImageFieldName;
}