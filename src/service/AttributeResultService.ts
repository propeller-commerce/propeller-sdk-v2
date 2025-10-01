import { BaseService } from './BaseService';
import { AttributeResult } from '../type/AttributeResult';
import { AttributeResultResponse } from '../type/AttributeResultResponse';
import { AttributeResultSearchInput } from '../type/AttributeResultSearchInput';
/**
 Service class for AttributeResult-related GraphQL operations
 */
export class AttributeResultService extends BaseService {
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
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}