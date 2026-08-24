import { MediaLocalizedStringInput } from './MediaLocalizedStringInput';
import { MediaLocalizedStringArrayInput } from './MediaLocalizedStringArrayInput';
import { UploadFileInput } from './UploadFileInput';
/**
 Input object for MediaImageInput
 */
export interface MediaImageInput {
  /** Unique product identifier that the media item relates to */
  productId?: string | number;
  /** Unique cluster identifier that the media item relates to */
  clusterId?: string | number;
  /** Unique category identifier that the media item relates to */
  categoryId?: string | number;
  /** Unique machine identifier that the media item relates to */
  sparePartsMachineId?: string | number;
  /** Media item alt description that briefly explains its contents. */
  alt: MediaLocalizedStringInput[];
  /** Media item short description. */
  description: MediaLocalizedStringInput[];
  /** Media item tags. */
  tags: MediaLocalizedStringArrayInput[];
  /** Media item display priority [Lower value has higher priority] -  default: 1000 */
  priority?: number;
  /** Upload File input reference */
  uploadImages: UploadFileInput[];
}