import { LocalizedString } from './LocalizedString';
import { LocalizedStringArray } from './LocalizedStringArray';
import { LocalizedAttachment } from './LocalizedAttachment';
/**
 Object class for MediaAttachment
 */
export class MediaAttachment {
  /** Media global unique identifier */
  id!: string | number;
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
  /** List of attachment objects */
  attachments?: LocalizedAttachment[];
  /** Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId] */
  orderId?: number;
  /** Unique company identifier that the attachment relates to. [Cannot use it together with customerId] */
  companyId?: number;
  /** Unique customer identifier that the attachment relates to. [Cannot use it together with companyId] */
  customerId?: number;
  constructor(data: Partial<MediaAttachment> = {}) {
    Object.assign(this, data);
  }
}