import { LocalizedString } from './LocalizedString';
import { LocalizedStringArray } from './LocalizedStringArray';
import { LocalizedAttachment } from './LocalizedAttachment';
/**
 Object class for MediaAttachment
 */
export class MediaAttachment {
  /** Media global unique identifier */
  private _id: string | number;
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
  /** List of attachment objects */
  private _attachments?: LocalizedAttachment[];
  /** Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId] */
  private _orderId?: number;
  /** Unique company identifier that the attachment relates to. [Cannot use it together with customerId] */
  private _companyId?: number;
  /** Unique customer identifier that the attachment relates to. [Cannot use it together with companyId] */
  private _customerId?: number;
  /**
   Creates a new instance of MediaAttachment
   */
  constructor(data: Partial<MediaAttachment> = {}) {
    this._id = data.id!;
    this._sparePartsMachineId = data.sparePartsMachineId;
    this._alt = data.alt!;
    this._description = data.description!;
    this._tags = data.tags!;
    this._type = data.type;
    this._createdAt = data.createdAt;
    this._lastModifiedAt = data.lastModifiedAt;
    this._priority = data.priority;
    this._attachments = data.attachments;
    this._orderId = data.orderId;
    this._companyId = data.companyId;
    this._customerId = data.customerId;
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
   List of attachment objects
   */
  get attachments(): LocalizedAttachment[] | undefined {
    return this._attachments;
  }
  /**
   List of attachment objects
   */
  set attachments(value: LocalizedAttachment[] | undefined) {
    this._attachments = value;
  }
  /**
   Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId]
   */
  get orderId(): number | undefined {
    return this._orderId;
  }
  /**
   Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId]
   */
  set orderId(value: number | undefined) {
    this._orderId = value;
  }
  /**
   Unique company identifier that the attachment relates to. [Cannot use it together with customerId]
   */
  get companyId(): number | undefined {
    return this._companyId;
  }
  /**
   Unique company identifier that the attachment relates to. [Cannot use it together with customerId]
   */
  set companyId(value: number | undefined) {
    this._companyId = value;
  }
  /**
   Unique customer identifier that the attachment relates to. [Cannot use it together with companyId]
   */
  get customerId(): number | undefined {
    return this._customerId;
  }
  /**
   Unique customer identifier that the attachment relates to. [Cannot use it together with companyId]
   */
  set customerId(value: number | undefined) {
    this._customerId = value;
  }
}