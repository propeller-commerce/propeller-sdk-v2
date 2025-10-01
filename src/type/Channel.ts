import { Shop } from './Shop';
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
  /** Catalog root id */
  private _catalogRootId?: number;
  /** Channel default letter id */
  private _defaultLetterId?: number;
  /** Channel anonymous user id */
  private _anonymousUserId?: number;
  /** shop field */
  private _shop?: Shop;
  /**
   Creates a new instance of Channel
   */
  constructor(data: Partial<Channel> = {}) {
    this._channelId = data.channelId!;
    this._id = data.id!;
    this._name = data.name!;
    this._catalogRootId = data.catalogRootId;
    this._defaultLetterId = data.defaultLetterId;
    this._anonymousUserId = data.anonymousUserId;
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