import { GqlApiKey } from '../type/GqlApiKey';
import { GqlApiKeyResponse } from '../type/GqlApiKeyResponse';
import { RestApiKey } from '../type/RestApiKey';
import { RestApiKeyResponse } from '../type/RestApiKeyResponse';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as gqlApiKeyDoc } from '../generated/operations/gqlApiKey';
import { document as gqlApiKeyCreateDoc } from '../generated/operations/gqlApiKeyCreate';
import { document as gqlApiKeyDeleteDoc } from '../generated/operations/gqlApiKeyDelete';
import { document as gqlApiKeyUpdateDoc } from '../generated/operations/gqlApiKeyUpdate';
import { document as gqlApiKeysDoc } from '../generated/operations/gqlApiKeys';
import { document as restApiKeyDoc } from '../generated/operations/restApiKey';
import { document as restApiKeyCreateDoc } from '../generated/operations/restApiKeyCreate';
import { document as restApiKeyDeleteDoc } from '../generated/operations/restApiKeyDelete';
import { document as restApiKeyUpdateDoc } from '../generated/operations/restApiKeyUpdate';
import { document as restApiKeysDoc } from '../generated/operations/restApiKeys';
import type { GqlApiKeyCreateVariables, GqlApiKeyDeleteVariables, GqlApiKeyUpdateVariables, GqlApiKeyVariables, GqlApiKeysVariables, RestApiKeyCreateVariables, RestApiKeyDeleteVariables, RestApiKeyUpdateVariables, RestApiKeyVariables, RestApiKeysVariables } from '../generated/operationVariables';
/**
 Service for ApiKey-related GraphQL operations
 */
export function apiKeyService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific GraphQL API key by its unique identifier.
       */
    async getGqlApiKey(variables: GqlApiKeyVariables): Promise<GqlApiKey> {
      const result = await runOperation<{ gqlApiKey: GqlApiKey }>(client, gqlApiKeyDoc, 'gqlApiKey', { ...variables });
      return result.data.gqlApiKey as GqlApiKey;
    },
    /**
       Creates a new GraphQL API key.
       */
    async gqlApiKeyCreate(variables: GqlApiKeyCreateVariables): Promise<GqlApiKey> {
      const result = await runOperation<{ gqlApiKeyCreate: GqlApiKey }>(client, gqlApiKeyCreateDoc, 'gqlApiKeyCreate', { ...variables });
      return result.data.gqlApiKeyCreate as GqlApiKey;
    },
    /**
       Permanently deletes a GraphQL API key from the system.
       */
    async gqlApiKeyDelete(variables: GqlApiKeyDeleteVariables): Promise<boolean> {
      const result = await runOperation<{ gqlApiKeyDelete: boolean }>(client, gqlApiKeyDeleteDoc, 'gqlApiKeyDelete', { ...variables });
      return result.data.gqlApiKeyDelete as boolean;
    },
    /**
       Updates an existing GraphQL API key.
       */
    async gqlApiKeyUpdate(variables: GqlApiKeyUpdateVariables): Promise<GqlApiKey> {
      const result = await runOperation<{ gqlApiKeyUpdate: GqlApiKey }>(client, gqlApiKeyUpdateDoc, 'gqlApiKeyUpdate', { ...variables });
      return result.data.gqlApiKeyUpdate as GqlApiKey;
    },
    /**
       Searches and retrieves GraphQL API keys based on filter criteria.
       */
    async getGqlApiKeys(variables: GqlApiKeysVariables): Promise<GqlApiKeyResponse> {
      const result = await runOperation<{ gqlApiKeys: GqlApiKeyResponse }>(client, gqlApiKeysDoc, 'gqlApiKeys', { ...variables });
      return result.data.gqlApiKeys as GqlApiKeyResponse;
    },
    /**
       Retrieves a specific REST API key by its unique identifier.
       */
    async getRestApiKey(variables: RestApiKeyVariables): Promise<RestApiKey> {
      const result = await runOperation<{ restApiKey: RestApiKey }>(client, restApiKeyDoc, 'restApiKey', { ...variables });
      return result.data.restApiKey as RestApiKey;
    },
    /**
       Creates a new REST API key.
       */
    async restApiKeyCreate(variables: RestApiKeyCreateVariables): Promise<RestApiKey> {
      const result = await runOperation<{ restApiKeyCreate: RestApiKey }>(client, restApiKeyCreateDoc, 'restApiKeyCreate', { ...variables });
      return result.data.restApiKeyCreate as RestApiKey;
    },
    /**
       Permanently deletes a REST API key from the system.
       */
    async restApiKeyDelete(variables: RestApiKeyDeleteVariables): Promise<boolean> {
      const result = await runOperation<{ restApiKeyDelete: boolean }>(client, restApiKeyDeleteDoc, 'restApiKeyDelete', { ...variables });
      return result.data.restApiKeyDelete as boolean;
    },
    /**
       Updates an existing REST API key.
       */
    async restApiKeyUpdate(variables: RestApiKeyUpdateVariables): Promise<RestApiKey> {
      const result = await runOperation<{ restApiKeyUpdate: RestApiKey }>(client, restApiKeyUpdateDoc, 'restApiKeyUpdate', { ...variables });
      return result.data.restApiKeyUpdate as RestApiKey;
    },
    /**
       Searches and retrieves REST API keys based on filter criteria.
       */
    async getRestApiKeys(variables: RestApiKeysVariables): Promise<RestApiKeyResponse> {
      const result = await runOperation<{ restApiKeys: RestApiKeyResponse }>(client, restApiKeysDoc, 'restApiKeys', { ...variables });
      return result.data.restApiKeys as RestApiKeyResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `apiKeyService(client)`.
 */
export class ApiKeyService {
  private readonly _svc: ReturnType<typeof apiKeyService>;
  constructor(client: GraphQLClient) { this._svc = apiKeyService(client); }
  getGqlApiKey(variables: GqlApiKeyVariables): Promise<GqlApiKey> { return this._svc.getGqlApiKey(variables); }
  gqlApiKeyCreate(variables: GqlApiKeyCreateVariables): Promise<GqlApiKey> { return this._svc.gqlApiKeyCreate(variables); }
  gqlApiKeyDelete(variables: GqlApiKeyDeleteVariables): Promise<boolean> { return this._svc.gqlApiKeyDelete(variables); }
  gqlApiKeyUpdate(variables: GqlApiKeyUpdateVariables): Promise<GqlApiKey> { return this._svc.gqlApiKeyUpdate(variables); }
  getGqlApiKeys(variables: GqlApiKeysVariables): Promise<GqlApiKeyResponse> { return this._svc.getGqlApiKeys(variables); }
  getRestApiKey(variables: RestApiKeyVariables): Promise<RestApiKey> { return this._svc.getRestApiKey(variables); }
  restApiKeyCreate(variables: RestApiKeyCreateVariables): Promise<RestApiKey> { return this._svc.restApiKeyCreate(variables); }
  restApiKeyDelete(variables: RestApiKeyDeleteVariables): Promise<boolean> { return this._svc.restApiKeyDelete(variables); }
  restApiKeyUpdate(variables: RestApiKeyUpdateVariables): Promise<RestApiKey> { return this._svc.restApiKeyUpdate(variables); }
  getRestApiKeys(variables: RestApiKeysVariables): Promise<RestApiKeyResponse> { return this._svc.getRestApiKeys(variables); }
}
