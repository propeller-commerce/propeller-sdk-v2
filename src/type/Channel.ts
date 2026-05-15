import { Shop } from './Shop';
import { LocalizedString } from './LocalizedString';
import { Tenant } from './Tenant';
/**
 Object class for Channel
 */
export class Channel {
  /** channelId field */
  /** @deprecated Use id instead */
  channelId!: number;
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
  /** Channel default letter id */
  /** @deprecated To be removed */
  defaultLetterId?: number;
  /** Channel creation date */
  createdAt!: string;
  /** Channel last modified date */
  lastModifiedAt!: string;
  /** Tenant this channel belongs to */
  tenant!: Tenant;
  /** shop field */
  /** @deprecated This field will be removed in a future version */
  shop?: Shop;
  constructor(data: Partial<Channel> = {}) {
    Object.assign(this, data);
  }
}
