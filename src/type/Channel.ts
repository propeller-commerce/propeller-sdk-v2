import { LocalizedString } from './LocalizedString';
import { Tenant } from './Tenant';
/**
 Object class for Channel
 */
export class Channel {
  /** id field */
  id!: number;
  /** name field */
  name!: string;
  /** Channel descriptions per language */
  descriptions?: LocalizedString[];
  /** Catalog root id */
  catalogRootId?: number;
  /** Channel anonymous user id */
  anonymousUserId?: number;
  /** Channel creation date */
  createdAt!: string;
  /** Channel last modified date */
  lastModifiedAt!: string;
  /** Tenant this channel belongs to */
  tenant!: Tenant;
  constructor(data: Partial<Channel> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `catalogRootId`. */
  getCatalogRootId(): number | undefined {
    return this.catalogRootId;
  }
  /** Returns `anonymousUserId`. */
  getAnonymousUserId(): number | undefined {
    return this.anonymousUserId;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `tenant` as a Tenant instance (coerced on first access). */
  getTenant(): Tenant | undefined {
    if (this.tenant == null) return undefined;
    if (!(this.tenant instanceof Tenant)) {
      this.tenant = new Tenant(this.tenant as any);
    }
    return this.tenant;
  }
}
