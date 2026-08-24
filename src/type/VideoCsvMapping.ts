import { VideoFieldName } from '../enum/VideoFieldName';
/**
 Input object for VideoCsvMapping
 */
export interface VideoCsvMapping {
  /** The name of the column in the CSV file */
  csvHeader: string;
  /** The name of the field in Propeller eCommerce Platform */
  fieldName: VideoFieldName;
}