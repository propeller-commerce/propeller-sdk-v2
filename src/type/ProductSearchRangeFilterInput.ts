import { AttributeType } from '../enum/AttributeType';
/**
 Input object for ProductSearchRangeFilterInput
 */
export interface ProductSearchRangeFilterInput {
  /** Price from filter */
  from: number;
  /** Price to filter */
  to: number;
  /** ID (UUID) of the attribute */
  id: string;
  /** Range filter exclude */
  exclude: boolean;
  /** Range filter type (INT for integer attributes, DECIMAL for decimal attributes) */
  type?: AttributeType;
}
