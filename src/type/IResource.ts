import { ProductClass } from '../enum/ProductClass';
import { YesNo } from '../enum/YesNo';
/**
 Base interface for resource entities
 */
export interface IResource {
  /** Unique identifier */
  id: string;
  /** Resource name */
  name: string;
  /** Creation timestamp */
  dateCreated: string;
  /** Last modification timestamp */
  dateChanged: string;
}