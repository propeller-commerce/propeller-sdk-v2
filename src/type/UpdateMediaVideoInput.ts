import { MediaLocalizedStringInput } from './MediaLocalizedStringInput';
import { MediaLocalizedStringArrayInput } from './MediaLocalizedStringArrayInput';
import { UploadVideoInput } from './UploadVideoInput';
/**
 Input object for UpdateMediaVideoInput
 */
export interface UpdateMediaVideoInput {
  /** Unique product identifier that the media item relates to */
  productId?: string | number;
  /** Unique cluster identifier that the media item relates to */
  clusterId?: string | number;
  /** Unique category identifier that the media item relates to */
  categoryId?: string | number;
  /** Unique machine identifier that the media item relates to */
  sparePartsMachineId?: string | number;
  /** Media item alt description that briefly explains its contents. */
  alt?: MediaLocalizedStringInput[];
  /** Media item short description. */
  description?: MediaLocalizedStringInput[];
  /** Media item tags. */
  tags?: MediaLocalizedStringArrayInput[];
  /** Media item display priority [Lower value has higher priority] -  default: 1000 */
  priority?: number;
  /** MediaVideo unique identified */
  mediaId: string;
  /** Upload Video input reference */
  video?: UploadVideoInput;
}