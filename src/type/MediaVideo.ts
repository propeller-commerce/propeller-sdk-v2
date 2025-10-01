import { LocalizedString } from './LocalizedString';
import { LocalizedStringArray } from './LocalizedStringArray';
import { LocalizedVideo } from './LocalizedVideo';
/**
 Object class for MediaVideo
 */
export class MediaVideo {
  /** Media global unique identifier */
  private _id: string | number;
  /** Unique product identifier that the media relates to */
  private _productId?: string | number;
  /** Unique cluster identifier that the media relates to */
  private _clusterId?: string | number;
  /** Unique category identifier that the media relates to */
  private _categoryId?: string | number;
  /** Unique sparePartsMachine identifier that the media relates to */
  private _sparePartsMachineId?: string | number;
  /** Media alt description that briefly explains the contents of the document. */
  private _alt: LocalizedString[];
  /** Media short description. */
  private _description: LocalizedString[];
  /** Media tags. */
  private _tags: LocalizedStringArray[];
  /** Media type */
  private _type?: string;
  /** The date and time (ISO 8601 format) when the media was created. */
  private _createdAt?: string;
  /** The date and time (ISO 8601 format) when the media was last modified. */
  private _lastModifiedAt?: string;
  /** Media display priority [Lower value has higher priority] -  default: 1000 */
  private _priority?: number;
  /** List of video objects */
  private _videos?: LocalizedVideo[];
  /**
   Creates a new instance of MediaVideo
   */
  constructor(data: Partial<MediaVideo> = {}) {
    this._id = data.id!;
    this._productId = data.productId;
    this._clusterId = data.clusterId;
    this._categoryId = data.categoryId;
    this._sparePartsMachineId = data.sparePartsMachineId;
    this._alt = data.alt!;
    this._description = data.description!;
    this._tags = data.tags!;
    this._type = data.type;
    this._createdAt = data.createdAt;
    this._lastModifiedAt = data.lastModifiedAt;
    this._priority = data.priority;
    this._videos = data.videos;
  }
  /**
   Media global unique identifier
   */
  get id(): string | number {
    return this._id;
  }
  /**
   Media global unique identifier
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   Unique product identifier that the media relates to
   */
  get productId(): string | number | undefined {
    return this._productId;
  }
  /**
   Unique product identifier that the media relates to
   */
  set productId(value: string | number | undefined) {
    this._productId = value;
  }
  /**
   Unique cluster identifier that the media relates to
   */
  get clusterId(): string | number | undefined {
    return this._clusterId;
  }
  /**
   Unique cluster identifier that the media relates to
   */
  set clusterId(value: string | number | undefined) {
    this._clusterId = value;
  }
  /**
   Unique category identifier that the media relates to
   */
  get categoryId(): string | number | undefined {
    return this._categoryId;
  }
  /**
   Unique category identifier that the media relates to
   */
  set categoryId(value: string | number | undefined) {
    this._categoryId = value;
  }
  /**
   Unique sparePartsMachine identifier that the media relates to
   */
  get sparePartsMachineId(): string | number | undefined {
    return this._sparePartsMachineId;
  }
  /**
   Unique sparePartsMachine identifier that the media relates to
   */
  set sparePartsMachineId(value: string | number | undefined) {
    this._sparePartsMachineId = value;
  }
  /**
   Media alt description that briefly explains the contents of the document.
   */
  get alt(): LocalizedString[] {
    return this._alt;
  }
  /**
   Media alt description that briefly explains the contents of the document.
   */
  set alt(value: LocalizedString[]) {
    this._alt = value;
  }
  /**
   Media short description.
   */
  get description(): LocalizedString[] {
    return this._description;
  }
  /**
   Media short description.
   */
  set description(value: LocalizedString[]) {
    this._description = value;
  }
  /**
   Media tags.
   */
  get tags(): LocalizedStringArray[] {
    return this._tags;
  }
  /**
   Media tags.
   */
  set tags(value: LocalizedStringArray[]) {
    this._tags = value;
  }
  /**
   Media type
   */
  get type(): string | undefined {
    return this._type;
  }
  /**
   Media type
   */
  set type(value: string | undefined) {
    this._type = value;
  }
  /**
   The date and time (ISO 8601 format) when the media was created.
   */
  get createdAt(): string | undefined {
    return this._createdAt;
  }
  /**
   The date and time (ISO 8601 format) when the media was created.
   */
  set createdAt(value: string | undefined) {
    this._createdAt = value;
  }
  /**
   The date and time (ISO 8601 format) when the media was last modified.
   */
  get lastModifiedAt(): string | undefined {
    return this._lastModifiedAt;
  }
  /**
   The date and time (ISO 8601 format) when the media was last modified.
   */
  set lastModifiedAt(value: string | undefined) {
    this._lastModifiedAt = value;
  }
  /**
   Media display priority [Lower value has higher priority] -  default: 1000
   */
  get priority(): number | undefined {
    return this._priority;
  }
  /**
   Media display priority [Lower value has higher priority] -  default: 1000
   */
  set priority(value: number | undefined) {
    this._priority = value;
  }
  /**
   List of video objects
   */
  get videos(): LocalizedVideo[] | undefined {
    return this._videos;
  }
  /**
   List of video objects
   */
  set videos(value: LocalizedVideo[] | undefined) {
    this._videos = value;
  }
}