import { SparePart } from './SparePart';
import { SparePartsMachineMedia } from './SparePartsMachineMedia';
import { SparePartsResponse } from './SparePartsResponse';
import { LocalizedString } from './LocalizedString';
/**
 Object class for SparePartsMachine
 */
export class SparePartsMachine {
  /** The unique identifier for this Machine */
  id!: string | number;
  /** parts field */
  parts?: SparePart[];
  /** media field */
  media?: SparePartsMachineMedia;
  /** sparePartProducts field */
  sparePartProducts?: SparePartsResponse;
  /** List of localized names for this Machine */
  name!: LocalizedString[];
  /** description field */
  description?: LocalizedString[];
  /** slug field */
  slug?: LocalizedString[];
  /** machines field */
  machines?: SparePartsMachine[];
  constructor(data: Partial<SparePartsMachine> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `parts` as SparePart instances (coerced on first access). */
  getParts(): SparePart[] | undefined {
    if (!this.parts) return undefined;
    this.parts = this.parts.map((x: any) => x instanceof SparePart ? x : new SparePart(x));
    return this.parts;
  }
  /** Returns `media` as a SparePartsMachineMedia instance (coerced on first access). */
  getMedia(): SparePartsMachineMedia | undefined {
    if (this.media == null) return undefined;
    if (!(this.media instanceof SparePartsMachineMedia)) {
      this.media = new SparePartsMachineMedia(this.media as any);
    }
    return this.media;
  }
  /** Returns `sparePartProducts` as a SparePartsResponse instance (coerced on first access). */
  getSparePartProducts(): SparePartsResponse | undefined {
    if (this.sparePartProducts == null) return undefined;
    if (!(this.sparePartProducts instanceof SparePartsResponse)) {
      this.sparePartProducts = new SparePartsResponse(this.sparePartProducts as any);
    }
    return this.sparePartProducts;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.name;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.description;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the slug for the given language, falling back to NL. */
  getSlug(language: string = 'NL'): string | undefined {
    const arr = this.slug;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `machines` as SparePartsMachine instances (coerced on first access). */
  getMachines(): SparePartsMachine[] | undefined {
    if (!this.machines) return undefined;
    this.machines = this.machines.map((x: any) => x instanceof SparePartsMachine ? x : new SparePartsMachine(x));
    return this.machines;
  }
}