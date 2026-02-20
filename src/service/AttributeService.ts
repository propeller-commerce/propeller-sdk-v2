import { BaseService } from './BaseService';
import { Attribute } from '../type/Attribute';
import { AttributeCreateInput } from '../type/AttributeCreateInput';
import { AttributeUpdateInput } from '../type/AttributeUpdateInput';
import { AttributeResponse } from '../type/AttributeResponse';
import { AttributeSearchInput } from '../type/AttributeSearchInput';
import { AttributeResult } from '../type/AttributeResult';
import { AttributeResultResponse } from '../type/AttributeResultResponse';
import { AttributeResultSearchInput } from '../type/AttributeResultSearchInput';
import { AttributeDescription } from '../type/AttributeDescription';
import { AttributeDescriptionResponse } from '../type/AttributeDescriptionResponse';
import { AttributeDescriptionSearchInput } from '../type/AttributeDescriptionSearchInput';
import { AttributeDescriptionCreateInput } from '../type/AttributeDescriptionCreateInput';
import { AttributeDescriptionUpdateInput } from '../type/AttributeDescriptionUpdateInput';
import { AttributeDescriptionCsvInput } from '../type/AttributeDescriptionCsvInput';
import { CsvImportResponse } from '../type/CsvImportResponse';
import { BulkDeleteResponse } from '../type/BulkDeleteResponse';
/**
 Service class for Attribute and AttributeDescription-related GraphQL operations
 */
export class AttributeService extends BaseService {
  // Attribute
  /**
   Fetches a single attribute by ID
   * @param id Attribute ID to fetch
   * @returns Promise<Attribute> The attribute data
   */
  async getAttribute(id: string): Promise<Attribute> {
    const variables = { id };
    const result = await this.executeQuery('attribute', variables);
    return result.data.attribute;
  }
  /**
   Fetches a list of attributes with search criteria
   * @param input Attribute search input parameters
   * @returns Promise<AttributeResponse> The attributes response data
   */
  async getAttributes(input: AttributeSearchInput): Promise<AttributeResponse> {
    const variables = { input };
    const result = await this.executeQuery('attributes', variables);
    return result.data.attributes;
  }
  /**
   Creates a new attribute
   * @param input Attribute creation input data
   * @returns Promise<Attribute> The created attribute
   */
  async createAttribute(input: AttributeCreateInput): Promise<Attribute> {
    const variables = { input };
    const result = await this.executeMutation('attributeCreate', variables);
    return result.data.attributeCreate;
  }
  /**
   Updates an existing attribute
   * @param id Attribute ID to update
   * @param input Attribute update input data
   * @returns Promise<Attribute> The updated attribute
   */
  async updateAttribute(id: string, input: AttributeUpdateInput): Promise<Attribute> {
    const variables = { id, input };
    const result = await this.executeMutation('attributeUpdate', variables);
    return result.data.attributeUpdate;
  }
  /**
   Deletes an attribute by ID
   * @param id Attribute ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteAttribute(id: string): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('attributeDelete', variables);
    return result.data.attributeDelete;
  }
  // AttributeResult
  /**
   Fetches attribute results by category ID
   * @param categoryId Category ID to fetch attributes for
   * @returns Promise<AttributeResult> The attribute result data
   */
  async getAttributeResultByCategoryId(categoryId: number): Promise<AttributeResult> {
    const variables = { categoryId };
    const result = await this.executeQuery('attributeResultByCategoryId', variables);
    return new AttributeResult(result.data.attributeResultByCategoryId);
  }
  /**
   Fetches attribute results by cluster ID
   * @param clusterId Cluster ID to fetch attributes for
   * @returns Promise<AttributeResult> The attribute result data
   */
  async getAttributeResultByClusterId(clusterId: number): Promise<AttributeResult> {
    const variables = { clusterId };
    const result = await this.executeQuery('attributeResultByClusterId', variables);
    return new AttributeResult(result.data.attributeResultByClusterId);
  }
  /**
   Fetches attribute results by company ID
   * @param companyId Company ID to fetch attributes for
   * @returns Promise<AttributeResult> The attribute result data
   */
  async getAttributeResultByCompanyId(companyId: number): Promise<AttributeResult> {
    const variables = { companyId };
    const result = await this.executeQuery('attributeResultByCompanyId', variables);
    return new AttributeResult(result.data.attributeResultByCompanyId);
  }
  /**
   Fetches attribute results by contact ID
   * @param contactId Contact ID to fetch attributes for
   * @returns Promise<AttributeResult> The attribute result data
   */
  async getAttributeResultByContactId(contactId: number): Promise<AttributeResult> {
    const variables = { contactId };
    const result = await this.executeQuery('attributeResultByContactId', variables);
    return new AttributeResult(result.data.attributeResultByContactId);
  }
  /**
   Fetches attribute results by customer ID
   * @param customerId Customer ID to fetch attributes for
   * @returns Promise<AttributeResult> The attribute result data
   */
  async getAttributeResultByCustomerId(customerId: number): Promise<AttributeResult> {
    const variables = { customerId };
    const result = await this.executeQuery('attributeResultByCustomerId', variables);
    return new AttributeResult(result.data.attributeResultByCustomerId);
  }
  /**
   Fetches attribute results by product ID
   * @param productId Product ID to fetch attributes for
   * @returns Promise<AttributeResult> The attribute result data
   */
  async getAttributeResultByProductId(productId: number): Promise<AttributeResult> {
    const variables = { productId };
    const result = await this.executeQuery('attributeResultByProductId', variables);
    return new AttributeResult(result.data.attributeResultByProductId);
  }
  // AttributeDescription
  /**
   Fetches a single attribute description by ID
   * @param id AttributeDescription ID to fetch
   * @returns Promise<AttributeDescription> The attribute description data
   */
  async getAttributeDescription(id: string): Promise<AttributeDescription> {
    const variables = { id };
    const result = await this.executeQuery('attributeDescription', variables);
    return new AttributeDescription(result.data.attributeDescription);
  }
  /**
   Fetches a list of attribute descriptions with search criteria
   * @param input AttributeDescription search input parameters
   * @returns Promise<AttributeDescriptionResponse> The attribute descriptions response data
   */
  async getAttributeDescriptions(input: AttributeDescriptionSearchInput): Promise<AttributeDescriptionResponse> {
    const variables = { input };
    const result = await this.executeQuery('attributeDescriptions', variables);
    return new AttributeDescriptionResponse(result.data.attributeDescriptions);
  }
  /**
   Creates a new attribute description
   * @param input AttributeDescription creation input data
   * @returns Promise<AttributeDescription> The created attribute description
   */
  async createAttributeDescription(input: AttributeDescriptionCreateInput): Promise<AttributeDescription> {
    const variables = { input };
    const result = await this.executeMutation('attributeDescriptionCreate', variables);
    return new AttributeDescription(result.data.attributeDescriptionCreate);
  }
  /**
   Updates an existing attribute description
   * @param id AttributeDescription ID to update
   * @param input AttributeDescription update input data
   * @returns Promise<AttributeDescription> The updated attribute description
   */
  async updateAttributeDescription(id: string, input: AttributeDescriptionUpdateInput): Promise<AttributeDescription> {
    const variables = { id, input };
    const result = await this.executeMutation('attributeDescriptionUpdate', variables);
    return new AttributeDescription(result.data.attributeDescriptionUpdate);
  }
  /**
   Deletes an attribute description by ID
   * @param id AttributeDescription ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteAttributeDescription(id: string): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('attributeDescriptionDelete', variables);
    return result.data.attributeDescriptionDelete;
  }
  /**
   Deletes multiple attribute descriptions by IDs
   * @param ids Array of AttributeDescription IDs to delete
   * @returns Promise<BulkDeleteResponse> Bulk delete result
   */
  async deleteAttributeDescriptionBulk(ids: string[]): Promise<BulkDeleteResponse> {
    const variables = { ids };
    const result = await this.executeMutation('attributeDescriptionDeleteBulk', variables);
    return new BulkDeleteResponse(result.data.attributeDescriptionDeleteBulk);
  }
  /**
   Imports attribute descriptions via CSV
   * @param input CSV import input data
   * @returns Promise<CsvImportResponse> Import result
   */
  async importAttributeDescriptionCsv(input: AttributeDescriptionCsvInput): Promise<CsvImportResponse> {
    const variables = { input };
    const result = await this.executeMutation('attributeDescriptionCsvImport', variables);
    return new CsvImportResponse(result.data.attributeDescriptionCsvImport);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}
