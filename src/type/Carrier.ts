import { CarrierType } from '../enum/CarrierType';
import { LocalizedString } from './LocalizedString';
import { TrackAndTrace } from './TrackAndTrace';
import { Warehouse } from './Warehouse';
/**
 Object class for Carrier
 */
export class Carrier {
  /** Carrier primary identifier */
  id!: number;
  /** Carrier name */
  name!: string;
  /** Carrier type */
  type!: CarrierType;
  /** Carrier description per language */
  descriptions?: LocalizedString[];
  /** Track and Trace redirect URL */
  trackAndTraceURL?: string;
  /** Logo url */
  logo?: string;
  /** Carrier creation date */
  createdAt!: string;
  /** Carrier last modified date */
  lastModifiedAt!: string;
  /** The userId of the user that created the carrier */
  createdBy?: number;
  /** The userId of the user that last modified the carrier */
  lastModifiedBy?: number;
  /** Get all track and traces for a carrier */
  trackAndTraces!: TrackAndTrace[];
  /** warehouses field */
  warehouses?: Warehouse[];
  constructor(data: Partial<Carrier> = {}) {
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
  /** Returns `type`. */
  getType(): CarrierType {
    return this.type;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `trackAndTraceURL`. */
  getTrackAndTraceURL(): string | undefined {
    return this.trackAndTraceURL;
  }
  /** Returns `logo`. */
  getLogo(): string | undefined {
    return this.logo;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
  /** Returns `trackAndTraces` as TrackAndTrace instances (coerced on first access). */
  getTrackAndTraces(): TrackAndTrace[] {
    if (!this.trackAndTraces) return [];
    this.trackAndTraces = this.trackAndTraces.map((x: any) => x instanceof TrackAndTrace ? x : new TrackAndTrace(x));
    return this.trackAndTraces;
  }
  /** Returns `warehouses` as Warehouse instances (coerced on first access). */
  getWarehouses(): Warehouse[] | undefined {
    if (!this.warehouses) return undefined;
    this.warehouses = this.warehouses.map((x: any) => x instanceof Warehouse ? x : new Warehouse(x));
    return this.warehouses;
  }
}