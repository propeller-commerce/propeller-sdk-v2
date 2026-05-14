import { ValuesetType } from '../enum/ValuesetType';
import { LocalizedString } from './LocalizedString';
import { ValuesetItemResponse } from './ValuesetItemResponse';
/**
 Object class for Valueset
 */
export interface Valueset {
  /** Valueset primary identifier */
  id: number;
  /** Valueset name */
  name: string;
  /** Valueset type */
  type: ValuesetType;
  /** descriptions field */
  descriptions: LocalizedString[];
  /** The userId of the user that changed the valueset */
  lastModifiedBy?: number;
  /** Valueset last modified date */
  lastModifiedAt: string;
  /** The userId of the user that created the valueset */
  createdBy?: number;
  /** Valueset creation date */
  createdAt: string;
  /** valuesetItems field */
  valuesetItems: ValuesetItemResponse;
}