import { SparePart } from './SparePart';
import { SparePartsMachineMedia } from './SparePartsMachineMedia';
import { SparePartsResponse } from './SparePartsResponse';
import { LocalizedString } from './LocalizedString';
/**
 Object class for SparePartsMachine
 */
export class SparePartsMachine {
  /** The unique identifier for this Machine */
  private _id: string | number;
  /** parts field */
  private _parts?: SparePart[];
  /** media field */
  private _media?: SparePartsMachineMedia;
  /** sparePartProducts field */
  private _sparePartProducts?: SparePartsResponse;
  /** List of localized names for this Machine */
  private _name: LocalizedString[];
  /** description field */
  private _description?: LocalizedString[];
  /** slug field */
  private _slug?: LocalizedString[];
  /** machines field */
  private _machines?: SparePartsMachine[];
  /**
   Creates a new instance of SparePartsMachine
   */
  constructor(data: Partial<SparePartsMachine> = {}) {
    this._id = data.id!;
    this._parts = data.parts;
    this._media = data.media;
    this._sparePartProducts = data.sparePartProducts;
    this._name = data.name!;
    this._description = data.description;
    this._slug = data.slug;
    this._machines = data.machines;
  }
  /**
   The unique identifier for this Machine
   */
  get id(): string | number {
    return this._id;
  }
  /**
   The unique identifier for this Machine
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   parts field
   */
  get parts(): SparePart[] | undefined {
    return this._parts;
  }
  /**
   parts field
   */
  set parts(value: SparePart[] | undefined) {
    this._parts = value;
  }
  /**
   media field
   */
  get media(): SparePartsMachineMedia | undefined {
    return this._media;
  }
  /**
   media field
   */
  set media(value: SparePartsMachineMedia | undefined) {
    this._media = value;
  }
  /**
   sparePartProducts field
   */
  get sparePartProducts(): SparePartsResponse | undefined {
    return this._sparePartProducts;
  }
  /**
   sparePartProducts field
   */
  set sparePartProducts(value: SparePartsResponse | undefined) {
    this._sparePartProducts = value;
  }
  /**
   List of localized names for this Machine
   */
  get name(): LocalizedString[] {
    return this._name;
  }
  /**
   List of localized names for this Machine
   */
  set name(value: LocalizedString[]) {
    this._name = value;
  }
  /**
   description field
   */
  get description(): LocalizedString[] | undefined {
    return this._description;
  }
  /**
   description field
   */
  set description(value: LocalizedString[] | undefined) {
    this._description = value;
  }
  /**
   slug field
   */
  get slug(): LocalizedString[] | undefined {
    return this._slug;
  }
  /**
   slug field
   */
  set slug(value: LocalizedString[] | undefined) {
    this._slug = value;
  }
  /**
   machines field
   */
  get machines(): SparePartsMachine[] | undefined {
    return this._machines;
  }
  /**
   machines field
   */
  set machines(value: SparePartsMachine[] | undefined) {
    this._machines = value;
  }
}