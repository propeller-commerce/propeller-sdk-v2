import { SparePart } from './SparePart';
import { SparePartsMachineMedia } from './SparePartsMachineMedia';
import { SparePartsResponse } from './SparePartsResponse';
import { LocalizedString } from './LocalizedString';
/**
 Object class for SparePartsMachine
 */
export interface SparePartsMachine {
  /** The unique identifier for this Machine */
  id: string | number;
  /** parts field */
  parts?: SparePart[];
  /** media field */
  media?: SparePartsMachineMedia;
  /** sparePartProducts field */
  sparePartProducts?: SparePartsResponse;
  /** List of localized names for this Machine */
  name: LocalizedString[];
  /** description field */
  description?: LocalizedString[];
  /** slug field */
  slug?: LocalizedString[];
  /** machines field */
  machines?: SparePartsMachine[];
}