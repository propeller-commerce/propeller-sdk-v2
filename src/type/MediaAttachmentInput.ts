import { MediaLocalizedStringInput } from './MediaLocalizedStringInput';
import { MediaLocalizedStringArrayInput } from './MediaLocalizedStringArrayInput';
import { UploadFileInput } from './UploadFileInput';
/**
 Input object for MediaAttachmentInput
 */
export interface MediaAttachmentInput {
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
  uploadAttachments: UploadFileInput[];
  /** Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId] */
  orderId?: number;
  /** Unique company identifier that the attachment relates to. [Cannot use it together with customerId] */
  companyId?: number;
  /** Unique customer identifier that the attachment relates to. [Cannot use it together with companyId] */
  customerId?: number;
}