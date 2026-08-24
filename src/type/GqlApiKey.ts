import { GqlApiKeyRole } from './GqlApiKeyRole';
/**
 Object class for GqlApiKey
 */
export interface GqlApiKey {
  /** Unique identifier for the API key */
  id: string;
  /** Name of the API key */
  name: string;
  /** The API key value */
  key: string;
  /** Whether the API key is active */
  active: boolean;
  /** Roles assigned to this API key */
  roles?: GqlApiKeyRole[];
  /** Channel ID associated with this API key */
  channelId?: number;
  /** Timestamp when the API key was created */
  createdAt: string;
  /** Timestamp when the API key was last modified */
  lastModifiedAt: string;
}
