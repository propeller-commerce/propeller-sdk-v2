/**
 Object class for RestApiKey
 */
export interface RestApiKey {
  /** Unique identifier for the API key */
  id: string;
  /** Name of the API key */
  name: string;
  /** The client ID */
  clientId: string;
  /** The client secret */
  clientSecret: string;
  /** Whether the API key is active */
  active: boolean;
  /** Timestamp when the API key was created */
  createdAt: string;
  /** Timestamp when the API key was last modified */
  lastModifiedAt: string;
}
