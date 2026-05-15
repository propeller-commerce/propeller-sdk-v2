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

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `sparePartsMachineId`. */
  getSparePartsMachineId(): string | number | undefined {
    return this.sparePartsMachineId;
  }
  /** Returns the alt for the given language, falling back to NL. */
  getAlt(language: string = 'NL'): string | undefined {
    const arr = this.alt;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.description;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the tag for the given language, falling back to NL. */
  getTag(language: string = 'NL'): string[] | undefined {
    const arr = this.tags;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.values;
  }
  /** Returns `type`. */
  getType(): string | undefined {
    return this.type;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string | undefined {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string | undefined {
    return this.lastModifiedAt;
  }
  /** Returns `priority`. */
  getPriority(): number | undefined {
    return this.priority;
  }
  /** Returns the attachment for the given language, falling back to NL. */
  getAttachment(language: string = 'NL'): string | undefined {
    const arr = this.attachments;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.originalUrl;
  }
  /** Returns `orderId`. */
  getOrderId(): number | undefined {
    return this.orderId;
  }
  /** Returns `companyId`. */
  getCompanyId(): number | undefined {
    return this.companyId;
  }
  /** Returns `customerId`. */
  getCustomerId(): number | undefined {
    return this.customerId;
  }
}