import { VideoCsvMapping } from './VideoCsvMapping';
/**
 Input object for VideoCsvInput
 */
export interface VideoCsvInput {
  /** CSV file */
  file: File;
  /** A list of MediaVideos CSV field mappings */
  mappings?: VideoCsvMapping[];
}