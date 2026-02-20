import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for ValuesetCreateItemInput
 */
export interface ValuesetCreateItemInput {
  /** The actual data value that this item will represent in the system */
  value: string;
  /** Human-readable labels for this value set item in multiple languages */
  descriptions?: LocalizedStringInput[];
  /** Additional metadata or supplementary information for this value set item */
  extra?: string;
}
