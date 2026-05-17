import { Attribute } from '../type/Attribute';
import { AttributeCreateInput } from '../type/AttributeCreateInput';
import { AttributeUpdateInput } from '../type/AttributeUpdateInput';
import { AttributeResponse } from '../type/AttributeResponse';
import { AttributeSearchInput } from '../type/AttributeSearchInput';
import { AttributeResultResponse } from '../type/AttributeResultResponse';
import { AttributeDescription } from '../type/AttributeDescription';
import { AttributeDescriptionResponse } from '../type/AttributeDescriptionResponse';
import { AttributeDescriptionSearchInput } from '../type/AttributeDescriptionSearchInput';
import { AttributeDescriptionCreateInput } from '../type/AttributeDescriptionCreateInput';
import { AttributeDescriptionUpdateInput } from '../type/AttributeDescriptionUpdateInput';
import { AttributeDescriptionCsvInput } from '../type/AttributeDescriptionCsvInput';
import { CsvImportResponse } from '../type/CsvImportResponse';
import { BulkDeleteResponse } from '../type/BulkDeleteResponse';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as attributeDoc } from '../generated/operations/attribute';
import { document as attributesDoc } from '../generated/operations/attributes';
import { document as attributeCreateDoc } from '../generated/operations/attributeCreate';
import { document as attributeUpdateDoc } from '../generated/operations/attributeUpdate';
import { document as attributeDeleteDoc } from '../generated/operations/attributeDelete';
import { document as attributeResultByCategoryIdDoc } from '../generated/operations/attributeResultByCategoryId';
import { document as attributeResultByClusterIdDoc } from '../generated/operations/attributeResultByClusterId';
import { document as attributeResultByCompanyIdDoc } from '../generated/operations/attributeResultByCompanyId';
import { document as attributeResultByContactIdDoc } from '../generated/operations/attributeResultByContactId';
import { document as attributeResultByCustomerIdDoc } from '../generated/operations/attributeResultByCustomerId';
import { document as attributeResultByProductIdDoc } from '../generated/operations/attributeResultByProductId';
import { document as attributeDescriptionDoc } from '../generated/operations/attributeDescription';
import { document as attributeDescriptionsDoc } from '../generated/operations/attributeDescriptions';
import { document as attributeDescriptionCreateDoc } from '../generated/operations/attributeDescriptionCreate';
import { document as attributeDescriptionUpdateDoc } from '../generated/operations/attributeDescriptionUpdate';
import { document as attributeDescriptionDeleteDoc } from '../generated/operations/attributeDescriptionDelete';
import { document as attributeDescriptionDeleteBulkDoc } from '../generated/operations/attributeDescriptionDeleteBulk';
import { document as attributeDescriptionCsvImportDoc } from '../generated/operations/attributeDescriptionCsvImport';
import type { AttributeResultByCategoryIdVariables, AttributeResultByClusterIdVariables, AttributeResultByCompanyIdVariables, AttributeResultByContactIdVariables, AttributeResultByCustomerIdVariables, AttributeResultByProductIdVariables } from '../generated/operationVariables';
/**
 Service class for Attribute and AttributeDescription-related GraphQL operations
 */
export function attributeService(client: GraphQLClient) {
  return {
    /**
       Fetches a single attribute by ID
       * @param id Attribute ID to fetch
       * @returns Promise<Attribute> The attribute data
       */
    async getAttribute(id: string): Promise<Attribute> {
      const result = await runOperation<{ attribute: Attribute }>(client, attributeDoc, 'attribute', { id });
      return result.data.attribute;
    },
    /**
       Fetches a list of attributes with search criteria
       * @param input Attribute search input parameters
       * @returns Promise<AttributeResponse> The attributes response data
       */
    async getAttributes(input: AttributeSearchInput): Promise<AttributeResponse> {
      const result = await runOperation<{ attributes: AttributeResponse }>(client, attributesDoc, 'attributes', { input });
      return result.data.attributes;
    },
    /**
       Creates a new attribute
       * @param input Attribute creation input data
       * @returns Promise<Attribute> The created attribute
       */
    async createAttribute(input: AttributeCreateInput): Promise<Attribute> {
      const result = await runOperation<{ attributeCreate: Attribute }>(client, attributeCreateDoc, 'attributeCreate', { input });
      return result.data.attributeCreate;
    },
    /**
       Updates an existing attribute
       * @param id Attribute ID to update
       * @param input Attribute update input data
       * @returns Promise<Attribute> The updated attribute
       */
    async updateAttribute(id: string, input: AttributeUpdateInput): Promise<Attribute> {
      const result = await runOperation<{ attributeUpdate: Attribute }>(client, attributeUpdateDoc, 'attributeUpdate', { id, input });
      return result.data.attributeUpdate;
    },
    /**
       Deletes an attribute by ID
       * @param id Attribute ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteAttribute(id: string): Promise<boolean> {
      const result = await runOperation<{ attributeDelete: boolean }>(client, attributeDeleteDoc, 'attributeDelete', { id });
      return result.data.attributeDelete;
    },
    /**
       Fetches attribute results by category ID
       * @param categoryId Category ID to fetch attributes for
       * @returns Promise<AttributeResultResponse> The attribute result data
       */
    async getAttributeResultByCategoryId(variables: AttributeResultByCategoryIdVariables): Promise<AttributeResultResponse> {
      const result = await runOperation<{ attributeResultByCategoryId: AttributeResultResponse }>(client, attributeResultByCategoryIdDoc, 'attributeResultByCategoryId', variables);
      return result.data.attributeResultByCategoryId as AttributeResultResponse;
    },
    /**
       Fetches attribute results by cluster ID
       * @param clusterId Cluster ID to fetch attributes for
       * @returns Promise<AttributeResultResponse> The attribute result data
       */
    async getAttributeResultByClusterId(variables: AttributeResultByClusterIdVariables): Promise<AttributeResultResponse> {
      const result = await runOperation<{ attributeResultByClusterId: AttributeResultResponse }>(client, attributeResultByClusterIdDoc, 'attributeResultByClusterId', variables);
      return result.data.attributeResultByClusterId as AttributeResultResponse;
    },
    /**
       Fetches attribute results by company ID
       * @param companyId Company ID to fetch attributes for
       * @returns Promise<AttributeResultResponse> The attribute result data
       */
    async getAttributeResultByCompanyId(variables: AttributeResultByCompanyIdVariables): Promise<AttributeResultResponse> {
      const result = await runOperation<{ attributeResultByCompanyId: AttributeResultResponse }>(client, attributeResultByCompanyIdDoc, 'attributeResultByCompanyId', variables);
      return result.data.attributeResultByCompanyId as AttributeResultResponse;
    },
    /**
       Fetches attribute results by contact ID
       * @param contactId Contact ID to fetch attributes for
       * @returns Promise<AttributeResultResponse> The attribute result data
       */
    async getAttributeResultByContactId(variables: AttributeResultByContactIdVariables): Promise<AttributeResultResponse> {
      const result = await runOperation<{ attributeResultByContactId: AttributeResultResponse }>(client, attributeResultByContactIdDoc, 'attributeResultByContactId', variables);
      return result.data.attributeResultByContactId as AttributeResultResponse;
    },
    /**
       Fetches attribute results by customer ID
       * @param customerId Customer ID to fetch attributes for
       * @returns Promise<AttributeResultResponse> The attribute result data
       */
    async getAttributeResultByCustomerId(variables: AttributeResultByCustomerIdVariables): Promise<AttributeResultResponse> {
      const result = await runOperation<{ attributeResultByCustomerId: AttributeResultResponse }>(client, attributeResultByCustomerIdDoc, 'attributeResultByCustomerId', variables);
      return result.data.attributeResultByCustomerId as AttributeResultResponse;
    },
    /**
       Fetches attribute results by product ID
       * @param productId Product ID to fetch attributes for
       * @returns Promise<AttributeResultResponse> The attribute result data
       */
    async getAttributeResultByProductId(variables: AttributeResultByProductIdVariables): Promise<AttributeResultResponse> {
      const result = await runOperation<{ attributeResultByProductId: AttributeResultResponse }>(client, attributeResultByProductIdDoc, 'attributeResultByProductId', variables);
      return result.data.attributeResultByProductId as AttributeResultResponse;
    },
    /**
       Fetches a single attribute description by ID
       * @param id AttributeDescription ID to fetch
       * @returns Promise<AttributeDescription> The attribute description data
       */
    async getAttributeDescription(id: string): Promise<AttributeDescription> {
      const result = await runOperation<{ attributeDescription: AttributeDescription }>(client, attributeDescriptionDoc, 'attributeDescription', { id });
      return result.data.attributeDescription as AttributeDescription;
    },
    /**
       Fetches a list of attribute descriptions with search criteria
       * @param input AttributeDescription search input parameters
       * @returns Promise<AttributeDescriptionResponse> The attribute descriptions response data
       */
    async getAttributeDescriptions(input: AttributeDescriptionSearchInput): Promise<AttributeDescriptionResponse> {
      const result = await runOperation<{ attributeDescriptions: AttributeDescriptionResponse }>(client, attributeDescriptionsDoc, 'attributeDescriptions', { input });
      return result.data.attributeDescriptions as AttributeDescriptionResponse;
    },
    /**
       Creates a new attribute description
       * @param input AttributeDescription creation input data
       * @returns Promise<AttributeDescription> The created attribute description
       */
    async createAttributeDescription(input: AttributeDescriptionCreateInput): Promise<AttributeDescription> {
      const result = await runOperation<{ attributeDescriptionCreate: AttributeDescription }>(client, attributeDescriptionCreateDoc, 'attributeDescriptionCreate', { input });
      return result.data.attributeDescriptionCreate as AttributeDescription;
    },
    /**
       Updates an existing attribute description
       * @param id AttributeDescription ID to update
       * @param input AttributeDescription update input data
       * @returns Promise<AttributeDescription> The updated attribute description
       */
    async updateAttributeDescription(id: string, input: AttributeDescriptionUpdateInput): Promise<AttributeDescription> {
      const result = await runOperation<{ attributeDescriptionUpdate: AttributeDescription }>(client, attributeDescriptionUpdateDoc, 'attributeDescriptionUpdate', { id, input });
      return result.data.attributeDescriptionUpdate as AttributeDescription;
    },
    /**
       Deletes an attribute description by ID
       * @param id AttributeDescription ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteAttributeDescription(id: string): Promise<boolean> {
      const result = await runOperation<{ attributeDescriptionDelete: boolean }>(client, attributeDescriptionDeleteDoc, 'attributeDescriptionDelete', { id });
      return result.data.attributeDescriptionDelete;
    },
    /**
       Deletes multiple attribute descriptions by IDs
       * @param ids Array of AttributeDescription IDs to delete
       * @returns Promise<BulkDeleteResponse> Bulk delete result
       */
    async deleteAttributeDescriptionBulk(ids: string[]): Promise<BulkDeleteResponse> {
      const result = await runOperation<{ attributeDescriptionDeleteBulk: BulkDeleteResponse }>(client, attributeDescriptionDeleteBulkDoc, 'attributeDescriptionDeleteBulk', { ids });
      return result.data.attributeDescriptionDeleteBulk as BulkDeleteResponse;
    },
    /**
       Imports attribute descriptions via CSV
       * @param input CSV import input data
       * @returns Promise<CsvImportResponse> Import result
       */
    async importAttributeDescriptionCsv(input: AttributeDescriptionCsvInput): Promise<CsvImportResponse> {
      const result = await runOperation<{ attributeDescriptionCsvImport: CsvImportResponse }>(client, attributeDescriptionCsvImportDoc, 'attributeDescriptionCsvImport', { input });
      return result.data.attributeDescriptionCsvImport as CsvImportResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `attributeService(client)`.
 */
export class AttributeService {
  private readonly _svc: ReturnType<typeof attributeService>;
  constructor(client: GraphQLClient) { this._svc = attributeService(client); }
  /**
   * Fetches a single attribute by ID
   * @param id Attribute ID to fetch
   */
  getAttribute(id: string): Promise<Attribute> { return this._svc.getAttribute(id); }
  /**
   * Fetches a list of attributes with search criteria
   * @param input Attribute search input parameters
   */
  getAttributes(input: AttributeSearchInput): Promise<AttributeResponse> { return this._svc.getAttributes(input); }
  /**
   * Creates a new attribute
   * @param input Attribute creation input data
   */
  createAttribute(input: AttributeCreateInput): Promise<Attribute> { return this._svc.createAttribute(input); }
  /**
   * Updates an existing attribute
   * @param id Attribute ID to update
   * @param input Attribute update input data
   */
  updateAttribute(id: string, input: AttributeUpdateInput): Promise<Attribute> { return this._svc.updateAttribute(id, input); }
  /**
   * Deletes an attribute by ID
   * @param id Attribute ID to delete
   */
  deleteAttribute(id: string): Promise<boolean> { return this._svc.deleteAttribute(id); }
  /**
   * Fetches attribute results by category ID
   * @param categoryId Category ID to fetch attributes for
   */
  getAttributeResultByCategoryId(variables: AttributeResultByCategoryIdVariables): Promise<AttributeResultResponse> { return this._svc.getAttributeResultByCategoryId(variables); }
  /**
   * Fetches attribute results by cluster ID
   * @param clusterId Cluster ID to fetch attributes for
   */
  getAttributeResultByClusterId(variables: AttributeResultByClusterIdVariables): Promise<AttributeResultResponse> { return this._svc.getAttributeResultByClusterId(variables); }
  /**
   * Fetches attribute results by company ID
   * @param companyId Company ID to fetch attributes for
   */
  getAttributeResultByCompanyId(variables: AttributeResultByCompanyIdVariables): Promise<AttributeResultResponse> { return this._svc.getAttributeResultByCompanyId(variables); }
  /**
   * Fetches attribute results by contact ID
   * @param contactId Contact ID to fetch attributes for
   */
  getAttributeResultByContactId(variables: AttributeResultByContactIdVariables): Promise<AttributeResultResponse> { return this._svc.getAttributeResultByContactId(variables); }
  /**
   * Fetches attribute results by customer ID
   * @param customerId Customer ID to fetch attributes for
   */
  getAttributeResultByCustomerId(variables: AttributeResultByCustomerIdVariables): Promise<AttributeResultResponse> { return this._svc.getAttributeResultByCustomerId(variables); }
  /**
   * Fetches attribute results by product ID
   * @param productId Product ID to fetch attributes for
   */
  getAttributeResultByProductId(variables: AttributeResultByProductIdVariables): Promise<AttributeResultResponse> { return this._svc.getAttributeResultByProductId(variables); }
  /**
   * Fetches a single attribute description by ID
   * @param id AttributeDescription ID to fetch
   */
  getAttributeDescription(id: string): Promise<AttributeDescription> { return this._svc.getAttributeDescription(id); }
  /**
   * Fetches a list of attribute descriptions with search criteria
   * @param input AttributeDescription search input parameters
   */
  getAttributeDescriptions(input: AttributeDescriptionSearchInput): Promise<AttributeDescriptionResponse> { return this._svc.getAttributeDescriptions(input); }
  /**
   * Creates a new attribute description
   * @param input AttributeDescription creation input data
   */
  createAttributeDescription(input: AttributeDescriptionCreateInput): Promise<AttributeDescription> { return this._svc.createAttributeDescription(input); }
  /**
   * Updates an existing attribute description
   * @param id AttributeDescription ID to update
   * @param input AttributeDescription update input data
   */
  updateAttributeDescription(id: string, input: AttributeDescriptionUpdateInput): Promise<AttributeDescription> { return this._svc.updateAttributeDescription(id, input); }
  /**
   * Deletes an attribute description by ID
   * @param id AttributeDescription ID to delete
   */
  deleteAttributeDescription(id: string): Promise<boolean> { return this._svc.deleteAttributeDescription(id); }
  /**
   * Deletes multiple attribute descriptions by IDs
   * @param ids Array of AttributeDescription IDs to delete
   */
  deleteAttributeDescriptionBulk(ids: string[]): Promise<BulkDeleteResponse> { return this._svc.deleteAttributeDescriptionBulk(ids); }
  /**
   * Imports attribute descriptions via CSV
   * @param input CSV import input data
   */
  importAttributeDescriptionCsv(input: AttributeDescriptionCsvInput): Promise<CsvImportResponse> { return this._svc.importAttributeDescriptionCsv(input); }
}

