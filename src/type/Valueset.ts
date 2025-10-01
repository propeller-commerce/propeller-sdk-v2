import { ValuesetType } from '../enum/ValuesetType';
import { LocalizedString } from './LocalizedString';
import { ValuesetItemResponse } from './ValuesetItemResponse';
/**
 Object class for Valueset
 */
export class Valueset {
  /** Valueset primary identifier */
  private _id: number;
  /** Valueset name */
  private _name: string;
  /** Valueset type */
  private _type: ValuesetType;
  /** descriptions field */
  private _descriptions: LocalizedString[];
  /** The userId of the user that changed the valueset */
  private _lastModifiedBy?: number;
  /** Valueset last modified date */
  private _lastModifiedAt: string;
  /** The userId of the user that created the valueset */
  private _createdBy?: number;
  /** Valueset creation date */
  private _createdAt: string;
  /** valuesetItems field */
  private _valuesetItems: ValuesetItemResponse;
  /**
   Creates a new instance of Valueset
   */
  constructor(data: Partial<Valueset> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._type = data.type!;
    this._descriptions = data.descriptions!;
    this._lastModifiedBy = data.lastModifiedBy;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._createdBy = data.createdBy;
    this._createdAt = data.createdAt!;
    this._valuesetItems = data.valuesetItems!;
  }
  /**
   Valueset primary identifier
   */
  get id(): number {
    return this._id;
  }
  /**
   Valueset primary identifier
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   Valueset name
   */
  get name(): string {
    return this._name;
  }
  /**
   Valueset name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Valueset type
   */
  get type(): ValuesetType {
    return this._type;
  }
  /**
   Valueset type
   */
  set type(value: ValuesetType) {
    this._type = value;
  }
  /**
   descriptions field
   */
  get descriptions(): LocalizedString[] {
    return this._descriptions;
  }
  /**
   descriptions field
   */
  set descriptions(value: LocalizedString[]) {
    this._descriptions = value;
  }
  /**
   The userId of the user that changed the valueset
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   The userId of the user that changed the valueset
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
  /**
   Valueset last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Valueset last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   The userId of the user that created the valueset
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   The userId of the user that created the valueset
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   Valueset creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Valueset creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   valuesetItems field
   */
  get valuesetItems(): ValuesetItemResponse {
    return this._valuesetItems;
  }
  /**
   valuesetItems field
   */
  set valuesetItems(value: ValuesetItemResponse) {
    this._valuesetItems = value;
  }
}