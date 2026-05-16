import { BusinessRule } from '../type/BusinessRule';
import { BusinessRuleFieldDefinitionGroup } from '../type/BusinessRuleFieldDefinitionGroup';
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
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as businessRuleDoc } from '../generated/operations/businessRule';
import { document as businessRulesDoc } from '../generated/operations/businessRules';
import { document as businessRuleDecisionTableDoc } from '../generated/operations/businessRuleDecisionTable';
import { document as businessRuleFieldDefinitionsDoc } from '../generated/operations/businessRuleFieldDefinitions';
import { document as businessRuleJDMDoc } from '../generated/operations/businessRuleJDM';
import { document as businessRuleCreateDoc } from '../generated/operations/businessRuleCreate';
import { document as businessRuleUpdateDoc } from '../generated/operations/businessRuleUpdate';
import { document as businessRuleDecisionTableUpdateDoc } from '../generated/operations/businessRuleDecisionTableUpdate';
import { document as businessRuleDecisionTableAddColumnDoc } from '../generated/operations/businessRuleDecisionTableAddColumn';
import { document as businessRuleDecisionTableDeleteColumnDoc } from '../generated/operations/businessRuleDecisionTableDeleteColumn';
import { document as businessRuleDecisionTableAddRowDoc } from '../generated/operations/businessRuleDecisionTableAddRow';
import { document as businessRuleDecisionTableDeleteRowDoc } from '../generated/operations/businessRuleDecisionTableDeleteRow';
import { document as businessRuleDecisionTableMoveRowDoc } from '../generated/operations/businessRuleDecisionTableMoveRow';
import { document as businessRuleDecisionTableSetCellDoc } from '../generated/operations/businessRuleDecisionTableSetCell';
/**
 Service class for BusinessRule-related GraphQL operations
 */
export function businessRuleService(client: GraphQLClient) {
  return {
    /**
       Fetches a single business rule by ID
       * @param id BusinessRule ID to fetch
       * @returns Promise<BusinessRule> The business rule data
       */
    async getBusinessRule(id: number): Promise<BusinessRule> {
      const result = await runOperation(client, businessRuleDoc, 'businessRule', { id });
      return result.data.businessRule as BusinessRule;
    },
    /**
       Fetches a list of business rules with search criteria
       * @param input BusinessRule search input parameters
       * @returns Promise<BusinessRuleResponse> The business rules response data
       */
    async getBusinessRules(input?: BusinessRuleSearchInput): Promise<BusinessRuleResponse> {
      const result = await runOperation(client, businessRulesDoc, 'businessRules', { input });
      return result.data.businessRules as BusinessRuleResponse;
    },
    /**
       Fetches business rule decision table
       * @param input BusinessRuleDecisionTable search input parameters
       * @returns Promise<BusinessRuleDecisionTable> The decision table data
       */
    async getBusinessRuleDecisionTable(input?: BusinessRuleDecisionTableSearchInput): Promise<BusinessRuleDecisionTable> {
      const result = await runOperation(client, businessRuleDecisionTableDoc, 'businessRuleDecisionTable', { input });
      return result.data.businessRuleDecisionTable as BusinessRuleDecisionTable;
    },
    /**
       Fetches business rule field definitions
       * @returns Promise<BusinessRuleFieldDefinitionGroup> The field definitions data
       */
    async getBusinessRuleFieldDefinitions(): Promise<BusinessRuleFieldDefinitionGroup> {
      const result = await runOperation(client, businessRuleFieldDefinitionsDoc, 'businessRuleFieldDefinitions', {  });
      return result.data.businessRuleFieldDefinitions as BusinessRuleFieldDefinitionGroup;
    },
    /**
       Fetches business rule JDM
       * @param input Business rule JDM input parameters
       * @returns Promise<any> The JDM data
       */
    async getBusinessRuleJDM(input?: any): Promise<any> {
      const result = await runOperation(client, businessRuleJDMDoc, 'businessRuleJDM', { input });
      return result.data.businessRuleJDM;
    },
    /**
       Creates a new business rule
       * @param input BusinessRule creation input data
       * @returns Promise<BusinessRule> The created business rule
       */
    async createBusinessRule(input: BusinessRuleCreateInput): Promise<BusinessRule> {
      const result = await runOperation(client, businessRuleCreateDoc, 'businessRuleCreate', { input });
      return result.data.businessRuleCreate as BusinessRule;
    },
    /**
       Updates an existing business rule
       * @param input BusinessRule update input data
       * @returns Promise<BusinessRule> The updated business rule
       */
    async updateBusinessRule(input: BusinessRuleUpdateInput): Promise<BusinessRule> {
      const result = await runOperation(client, businessRuleUpdateDoc, 'businessRuleUpdate', { input });
      return result.data.businessRuleUpdate as BusinessRule;
    },
    /**
       Updates a business rule decision table
       * @param input BusinessRuleDecisionTable update input data
       * @returns Promise<BusinessRuleDecisionTable> The updated decision table
       */
    async updateBusinessRuleDecisionTable(input: BusinessRuleDecisionTableUpdateInput): Promise<BusinessRuleDecisionTable> {
      const result = await runOperation(client, businessRuleDecisionTableUpdateDoc, 'businessRuleDecisionTableUpdate', { input });
      return result.data.businessRuleDecisionTableUpdate as BusinessRuleDecisionTable;
    },
    /**
       Adds a column to business rule decision table
       * @param input Add column input data
       * @returns Promise<BusinessRuleDecisionTable> The updated decision table
       */
    async addColumnToDecisionTable(input: BusinessRuleDecisionTableAddColumnInput): Promise<BusinessRuleDecisionTable> {
      const result = await runOperation(client, businessRuleDecisionTableAddColumnDoc, 'businessRuleDecisionTableAddColumn', { input });
      return result.data.businessRuleDecisionTableAddColumn as BusinessRuleDecisionTable;
    },
    /**
       Deletes a column from business rule decision table
       * @param input Delete column input data
       * @returns Promise<BusinessRuleDecisionTable> The updated decision table
       */
    async deleteColumnFromDecisionTable(input: BusinessRuleDecisionTableDeleteColumnInput): Promise<BusinessRuleDecisionTable> {
      const result = await runOperation(client, businessRuleDecisionTableDeleteColumnDoc, 'businessRuleDecisionTableDeleteColumn', { input });
      return result.data.businessRuleDecisionTableDeleteColumn as BusinessRuleDecisionTable;
    },
    /**
       Adds a row to business rule decision table
       * @returns Promise<BusinessRuleDecisionTable> The updated decision table
       */
    async addRowToDecisionTable(): Promise<BusinessRuleDecisionTable> {
      const result = await runOperation(client, businessRuleDecisionTableAddRowDoc, 'businessRuleDecisionTableAddRow', {  });
      return result.data.businessRuleDecisionTableAddRow as BusinessRuleDecisionTable;
    },
    /**
       Deletes a row from business rule decision table
       * @param input Delete row input data
       * @returns Promise<BusinessRuleDecisionTable> The updated decision table
       */
    async deleteRowFromDecisionTable(input: BusinessRuleDecisionTableDeleteRowInput): Promise<BusinessRuleDecisionTable> {
      const result = await runOperation(client, businessRuleDecisionTableDeleteRowDoc, 'businessRuleDecisionTableDeleteRow', { input });
      return result.data.businessRuleDecisionTableDeleteRow as BusinessRuleDecisionTable;
    },
    /**
       Moves a row in business rule decision table
       * @param input Move row input data
       * @returns Promise<BusinessRuleDecisionTable> The updated decision table
       */
    async moveRowInDecisionTable(input: BusinessRuleDecisionTableMoveRowInput): Promise<BusinessRuleDecisionTable> {
      const result = await runOperation(client, businessRuleDecisionTableMoveRowDoc, 'businessRuleDecisionTableMoveRow', { input });
      return result.data.businessRuleDecisionTableMoveRow as BusinessRuleDecisionTable;
    },
    /**
       Sets a cell value in business rule decision table
       * @param input Set cell input data
       * @returns Promise<BusinessRuleDecisionTable> The updated decision table
       */
    async setCellInDecisionTable(input: BusinessRuleDecisionTableSetCellInput): Promise<BusinessRuleDecisionTable> {
      const result = await runOperation(client, businessRuleDecisionTableSetCellDoc, 'businessRuleDecisionTableSetCell', { input });
      return result.data.businessRuleDecisionTableSetCell as BusinessRuleDecisionTable;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `businessRuleService(client)`.
 */
export class BusinessRuleService {
  private readonly _svc: ReturnType<typeof businessRuleService>;
  constructor(client: GraphQLClient) { this._svc = businessRuleService(client); }
  /**
   * Fetches a single business rule by ID
   * @param id BusinessRule ID to fetch
   */
  getBusinessRule(id: number): Promise<BusinessRule> { return this._svc.getBusinessRule(id); }
  /**
   * Fetches a list of business rules with search criteria
   * @param input BusinessRule search input parameters
   */
  getBusinessRules(input?: BusinessRuleSearchInput): Promise<BusinessRuleResponse> { return this._svc.getBusinessRules(input); }
  /**
   * Fetches business rule decision table
   * @param input BusinessRuleDecisionTable search input parameters
   */
  getBusinessRuleDecisionTable(input?: BusinessRuleDecisionTableSearchInput): Promise<BusinessRuleDecisionTable> { return this._svc.getBusinessRuleDecisionTable(input); }
  /**
   * Fetches business rule field definitions
   */
  getBusinessRuleFieldDefinitions(): Promise<BusinessRuleFieldDefinitionGroup> { return this._svc.getBusinessRuleFieldDefinitions(); }
  /**
   * Fetches business rule JDM
   * @param input Business rule JDM input parameters
   */
  getBusinessRuleJDM(input?: any): Promise<any> { return this._svc.getBusinessRuleJDM(input); }
  /**
   * Creates a new business rule
   * @param input BusinessRule creation input data
   */
  createBusinessRule(input: BusinessRuleCreateInput): Promise<BusinessRule> { return this._svc.createBusinessRule(input); }
  /**
   * Updates an existing business rule
   * @param input BusinessRule update input data
   */
  updateBusinessRule(input: BusinessRuleUpdateInput): Promise<BusinessRule> { return this._svc.updateBusinessRule(input); }
  /**
   * Updates a business rule decision table
   * @param input BusinessRuleDecisionTable update input data
   */
  updateBusinessRuleDecisionTable(input: BusinessRuleDecisionTableUpdateInput): Promise<BusinessRuleDecisionTable> { return this._svc.updateBusinessRuleDecisionTable(input); }
  /**
   * Adds a column to business rule decision table
   * @param input Add column input data
   */
  addColumnToDecisionTable(input: BusinessRuleDecisionTableAddColumnInput): Promise<BusinessRuleDecisionTable> { return this._svc.addColumnToDecisionTable(input); }
  /**
   * Deletes a column from business rule decision table
   * @param input Delete column input data
   */
  deleteColumnFromDecisionTable(input: BusinessRuleDecisionTableDeleteColumnInput): Promise<BusinessRuleDecisionTable> { return this._svc.deleteColumnFromDecisionTable(input); }
  /**
   * Adds a row to business rule decision table
   */
  addRowToDecisionTable(): Promise<BusinessRuleDecisionTable> { return this._svc.addRowToDecisionTable(); }
  /**
   * Deletes a row from business rule decision table
   * @param input Delete row input data
   */
  deleteRowFromDecisionTable(input: BusinessRuleDecisionTableDeleteRowInput): Promise<BusinessRuleDecisionTable> { return this._svc.deleteRowFromDecisionTable(input); }
  /**
   * Moves a row in business rule decision table
   * @param input Move row input data
   */
  moveRowInDecisionTable(input: BusinessRuleDecisionTableMoveRowInput): Promise<BusinessRuleDecisionTable> { return this._svc.moveRowInDecisionTable(input); }
  /**
   * Sets a cell value in business rule decision table
   * @param input Set cell input data
   */
  setCellInDecisionTable(input: BusinessRuleDecisionTableSetCellInput): Promise<BusinessRuleDecisionTable> { return this._svc.setCellInDecisionTable(input); }
}
