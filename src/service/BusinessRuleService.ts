import { BaseService } from './BaseService';
import { BusinessRule } from '../type/BusinessRule';
import { BusinessRuleResponse } from '../type/BusinessRuleResponse';
import { BusinessRuleSearchInput } from '../type/BusinessRuleSearchInput';
import { BusinessRuleCreateInput } from '../type/BusinessRuleCreateInput';
import { BusinessRuleUpdateInput } from '../type/BusinessRuleUpdateInput';
import { BusinessRuleDecisionTable } from '../type/BusinessRuleDecisionTable';
import { BusinessRuleDecisionTableSearchInput } from '../type/BusinessRuleDecisionTableSearchInput';
import { BusinessRuleDecisionTableUpdateInput } from '../type/BusinessRuleDecisionTableUpdateInput';
import { BusinessRuleDecisionTableAddColumnInput } from '../type/BusinessRuleDecisionTableAddColumnInput';
import { BusinessRuleDecisionTableDeleteColumnInput } from '../type/BusinessRuleDecisionTableDeleteColumnInput';
import { BusinessRuleDecisionTableDeleteRowInput } from '../type/BusinessRuleDecisionTableDeleteRowInput';
import { BusinessRuleDecisionTableMoveRowInput } from '../type/BusinessRuleDecisionTableMoveRowInput';
import { BusinessRuleDecisionTableSetCellInput } from '../type/BusinessRuleDecisionTableSetCellInput';
/**
 Service class for BusinessRule-related GraphQL operations
 */
export class BusinessRuleService extends BaseService {
  /**
   Fetches a single business rule by ID
   * @param id BusinessRule ID to fetch
   * @returns Promise<BusinessRule> The business rule data
   */
  async getBusinessRule(id: number): Promise<BusinessRule> {
    const variables = { id };
    const result = await this.executeQuery('businessRule', variables);
    return new BusinessRule(result.data.businessRule);
  }
  /**
   Fetches a list of business rules with search criteria
   * @param input BusinessRule search input parameters
   * @returns Promise<BusinessRuleResponse> The business rules response data
   */
  async getBusinessRules(input?: BusinessRuleSearchInput): Promise<BusinessRuleResponse> {
    const variables = { input };
    const result = await this.executeQuery('businessRules', variables);
    return new BusinessRuleResponse(result.data.businessRules);
  }
  /**
   Fetches business rule decision table
   * @param input BusinessRuleDecisionTable search input parameters
   * @returns Promise<BusinessRuleDecisionTable> The decision table data
   */
  async getBusinessRuleDecisionTable(input?: BusinessRuleDecisionTableSearchInput): Promise<BusinessRuleDecisionTable> {
    const variables = { input };
    const result = await this.executeQuery('businessRuleDecisionTable', variables);
    return new BusinessRuleDecisionTable(result.data.businessRuleDecisionTable);
  }
  /**
   Fetches business rule field definitions
   * @returns Promise<any> The field definitions data
   */
  async getBusinessRuleFieldDefinitions(): Promise<any> {
    const variables = {};
    const result = await this.executeQuery('businessRuleFieldDefinitions', variables);
    return result.data.businessRuleFieldDefinitions;
  }
  /**
   Fetches business rule JDM
   * @param input Business rule JDM input parameters
   * @returns Promise<any> The JDM data
   */
  async getBusinessRuleJDM(input?: any): Promise<any> {
    const variables = { input };
    const result = await this.executeQuery('businessRuleJDM', variables);
    return result.data.businessRuleJDM;
  }
  /**
   Creates a new business rule
   * @param input BusinessRule creation input data
   * @returns Promise<BusinessRule> The created business rule
   */
  async createBusinessRule(input: BusinessRuleCreateInput): Promise<BusinessRule> {
    const variables = { input };
    const result = await this.executeMutation('businessRuleCreate', variables);
    return new BusinessRule(result.data.businessRuleCreate);
  }
  /**
   Updates an existing business rule
   * @param input BusinessRule update input data
   * @returns Promise<BusinessRule> The updated business rule
   */
  async updateBusinessRule(input: BusinessRuleUpdateInput): Promise<BusinessRule> {
    const variables = { input };
    const result = await this.executeMutation('businessRuleUpdate', variables);
    return new BusinessRule(result.data.businessRuleUpdate);
  }
  /**
   Updates a business rule decision table
   * @param input BusinessRuleDecisionTable update input data
   * @returns Promise<BusinessRuleDecisionTable> The updated decision table
   */
  async updateBusinessRuleDecisionTable(input: BusinessRuleDecisionTableUpdateInput): Promise<BusinessRuleDecisionTable> {
    const variables = { input };
    const result = await this.executeMutation('businessRuleDecisionTableUpdate', variables);
    return new BusinessRuleDecisionTable(result.data.businessRuleDecisionTableUpdate);
  }
  /**
   Adds a column to business rule decision table
   * @param input Add column input data
   * @returns Promise<BusinessRuleDecisionTable> The updated decision table
   */
  async addColumnToDecisionTable(input: BusinessRuleDecisionTableAddColumnInput): Promise<BusinessRuleDecisionTable> {
    const variables = { input };
    const result = await this.executeMutation('businessRuleDecisionTableAddColumn', variables);
    return new BusinessRuleDecisionTable(result.data.businessRuleDecisionTableAddColumn);
  }
  /**
   Deletes a column from business rule decision table
   * @param input Delete column input data
   * @returns Promise<BusinessRuleDecisionTable> The updated decision table
   */
  async deleteColumnFromDecisionTable(input: BusinessRuleDecisionTableDeleteColumnInput): Promise<BusinessRuleDecisionTable> {
    const variables = { input };
    const result = await this.executeMutation('businessRuleDecisionTableDeleteColumn', variables);
    return new BusinessRuleDecisionTable(result.data.businessRuleDecisionTableDeleteColumn);
  }
  /**
   Adds a row to business rule decision table
   * @returns Promise<BusinessRuleDecisionTable> The updated decision table
   */
  async addRowToDecisionTable(): Promise<BusinessRuleDecisionTable> {
    const variables = {};
    const result = await this.executeMutation('businessRuleDecisionTableAddRow', variables);
    return new BusinessRuleDecisionTable(result.data.businessRuleDecisionTableAddRow);
  }
  /**
   Deletes a row from business rule decision table
   * @param input Delete row input data
   * @returns Promise<BusinessRuleDecisionTable> The updated decision table
   */
  async deleteRowFromDecisionTable(input: BusinessRuleDecisionTableDeleteRowInput): Promise<BusinessRuleDecisionTable> {
    const variables = { input };
    const result = await this.executeMutation('businessRuleDecisionTableDeleteRow', variables);
    return new BusinessRuleDecisionTable(result.data.businessRuleDecisionTableDeleteRow);
  }
  /**
   Moves a row in business rule decision table
   * @param input Move row input data
   * @returns Promise<BusinessRuleDecisionTable> The updated decision table
   */
  async moveRowInDecisionTable(input: BusinessRuleDecisionTableMoveRowInput): Promise<BusinessRuleDecisionTable> {
    const variables = { input };
    const result = await this.executeMutation('businessRuleDecisionTableMoveRow', variables);
    return new BusinessRuleDecisionTable(result.data.businessRuleDecisionTableMoveRow);
  }
  /**
   Sets a cell value in business rule decision table
   * @param input Set cell input data
   * @returns Promise<BusinessRuleDecisionTable> The updated decision table
   */
  async setCellInDecisionTable(input: BusinessRuleDecisionTableSetCellInput): Promise<BusinessRuleDecisionTable> {
    const variables = { input };
    const result = await this.executeMutation('businessRuleDecisionTableSetCell', variables);
    return new BusinessRuleDecisionTable(result.data.businessRuleDecisionTableSetCell);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}