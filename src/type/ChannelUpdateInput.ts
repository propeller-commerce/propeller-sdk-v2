import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for ChannelUpdateInput
 Input for updating an existing channel. All fields are optional.
 */
export interface ChannelUpdateInput {
  /** Unique name for the channel within the tenant */
  name?: string;
  /** Localized descriptions for the channel in different languages */
  descriptions?: LocalizedStringInput[];
  /** Reference to the root catalog item for this channel */
  catalogRootId?: number;
  /** Reference to the anonymous user account for this channel */
  anonymousUserId?: number;
}
