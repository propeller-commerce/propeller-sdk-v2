import { LocalizedString } from './LocalizedString';
import { LocalizedStringArray } from './LocalizedStringArray';
import { LocalizedDocument } from './LocalizedDocument';
/**
 Object class for MediaDocument
 */
export class MediaDocument {
  /** Media global unique identifier */
  id!: string | number;
  /** Unique product identifier that the media relates to */
  productId?: string | number;
  /** Unique cluster identifier that the media relates to */
  clusterId?: string | number;
  /** Unique category identifier that the media relates to */
  categoryId?: string | number;
  /** Unique sparePartsMachine identifier that the media relates to */
  sparePartsMachineId?: string | number;
  /** Media alt description that briefly explains the contents of the document. */
  alt!: LocalizedString[];
  /** Media short description. */
  description!: LocalizedString[];
  /** Media tags. */
  tags!: LocalizedStringArray[];
  /** Media type */
  type?: string;
  /** The date and time (ISO 8601 format) when the media was created. */
  createdAt?: string;
  /** The date and time (ISO 8601 format) when the media was last modified. */
  lastModifiedAt?: string;
  /** Media display priority [Lower value has higher priority] -  default: 1000 */
  priority?: number;
  /** List of document objects */
  documents?: LocalizedDocument[];
  constructor(data: Partial<MediaDocument> = {}) {
    Object.assign(this, data);
  }
}