import { GqlApiKeyRoleInput } from './GqlApiKeyRoleInput';
/**
 Input object for GqlApiKeyCreateInput
 */
export interface GqlApiKeyCreateInput {
  /** Name for the API key */
  name: string;
  /** Whether the API key is active */
  active: boolean;
  /** Roles assigned to this API key */
  roles?: GqlApiKeyRoleInput[];
  /** Channel ID associated with this API key, if not provided, the default channel will be used */
  channelId?: number;
}
