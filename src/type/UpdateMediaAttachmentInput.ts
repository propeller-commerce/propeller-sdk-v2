import { MediaLocalizedStringInput } from './MediaLocalizedStringInput';
import { MediaLocalizedStringArrayInput } from './MediaLocalizedStringArrayInput';
/**
 Input object for UpdateMediaAttachmentInput
 */
export interface UpdateMediaAttachmentInput {
  /** Media item alt description that briefly explains its contents. */
  alt?: MediaLocalizedStringInput[];
  /** Media item short description. */
  description?: MediaLocalizedStringInput[];
  /** Media item tags. */
  tags?: MediaLocalizedStringArrayInput[];
  /** Media item display priority [Lower value has higher priority] -  default: 1000 */
  priority?: number;
}