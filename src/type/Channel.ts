import { Shop } from './Shop';
import { LocalizedString } from './LocalizedString';
import { Tenant } from './Tenant';
/**
 Object class for Channel
 */
export class Channel {
  /** channelId field */
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
  defaultLetterId?: number;
  /** Channel creation date */
  createdAt!: string;
  /** Channel last modified date */
  lastModifiedAt!: string;
  /** Tenant this channel belongs to */
  tenant!: Tenant;
  /** shop field */
  shop?: Shop;
  constructor(data: Partial<Channel> = {}) {
    Object.assign(this, data);
  }
}
