/**
 Object class for ReindexJobDetail
 */
export interface ReindexJobDetail {
  /** name field */
  name: string;
  /** state field */
  state: string;
  /** Job progress as JSON string */
  progress?: string;
  /** Job data as JSON string */
  data?: string;
}
