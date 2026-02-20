import { Shop } from './Shop';
import { LocalizedString } from './LocalizedString';
import { Tenant } from './Tenant';
/**
 Object class for Channel
 */
export class Channel {
  /** channelId field */
  private _channelId: number;
  /** id field */
  private _id: number;
  /** name field */
  private _name: string;
  /** Channel descriptions per language */
  private _descriptions?: LocalizedString[];
  /** Catalog root id */
  private _catalogRootId?: number;
  /** Channel anonymous user id */
  private _anonymousUserId?: number;
  /** Channel default letter id */
  private _defaultLetterId?: number;
  /** Channel creation date */
  private _createdAt: string;
  /** Channel last modified date */
  private _lastModifiedAt: string;
  /** Tenant this channel belongs to */
  private _tenant: Tenant;
  /** shop field */
  private _shop?: Shop;
  /**
   Creates a new instance of Channel
   */
  constructor(data: Partial<Channel> = {}) {
    this._channelId = data.channelId!;
    this._id = data.id!;
    this._name = data.name!;
    this._descriptions = data.descriptions;
    this._catalogRootId = data.catalogRootId;
    this._anonymousUserId = data.anonymousUserId;
    this._defaultLetterId = data.defaultLetterId;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._tenant = data.tenant!;
    this._shop = data.shop;
  }
  /**
   channelId field
   */
  get channelId(): number {
    return this._channelId;
  }
  /**
   channelId field
   */
  set channelId(value: number) {
    this._channelId = value;
  }
  /**
   id field
   */
  get id(): number {
    return this._id;
  }
  /**
   id field
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   name field
   */
  get name(): string {
    return this._name;
  }
  /**
   name field
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Channel descriptions per language
   */
  get descriptions(): LocalizedString[] | undefined {
    return this._descriptions;
  }
  /**
   Channel descriptions per language
   */
  set descriptions(value: LocalizedString[] | undefined) {
    this._descriptions = value;
  }
  /**
   Catalog root id
   */
  get catalogRootId(): number | undefined {
    return this._catalogRootId;
  }
  /**
   Catalog root id
   */
  set catalogRootId(value: number | undefined) {
    this._catalogRootId = value;
  }
  /**
   Channel anonymous user id
   */
  get anonymousUserId(): number | undefined {
    return this._anonymousUserId;
  }
  /**
   Channel anonymous user id
   */
  set anonymousUserId(value: number | undefined) {
    this._anonymousUserId = value;
  }
  /**
   Channel default letter id
   */
  get defaultLetterId(): number | undefined {
    return this._defaultLetterId;
  }
  /**
   Channel default letter id
   */
  set defaultLetterId(value: number | undefined) {
    this._defaultLetterId = value;
  }
  /**
   Channel creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Channel creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Channel last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Channel last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Tenant this channel belongs to
   */
  get tenant(): Tenant {
    return this._tenant;
  }
  /**
   Tenant this channel belongs to
   */
  set tenant(value: Tenant) {
    this._tenant = value;
  }
  /**
   shop field
   */
  get shop(): Shop | undefined {
    return this._shop;
  }
  /**
   shop field
   */
  set shop(value: Shop | undefined) {
    this._shop = value;
  }
}
