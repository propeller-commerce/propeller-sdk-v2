import { BaseService } from './BaseService';
import { Pricesheet } from '../type/Pricesheet';
import { PricesheetResponse } from '../type/PricesheetResponse';
import { PricesheetSearchInput } from '../type/PricesheetSearchInput';
import { PricesheetCreateInput } from '../type/PricesheetCreateInput';
import { PricesheetUpdateInput } from '../type/PricesheetUpdateInput';
import { PricesheetAssignInput } from '../type/PricesheetAssignInput';
import { PricesheetUnassignInput } from '../type/PricesheetUnassignInput';
import { PricesheetCsvInput } from '../type/PricesheetCsvInput';
import { CsvImportResponse } from '../type/CsvImportResponse';
/**
 * Pricesheet query variables interface
 Variables for the pricesheet query
 */
export interface PricesheetQueryVariables {
  /** Pricesheet ID to fetch */
  id: string;
}
/**
 Service class for Pricesheet-related GraphQL operations
 */
export class PricesheetService extends BaseService {
  /**
   Fetches a list of pricesheets with search criteria
   * @param input Pricesheet search input parameters
   * @returns Promise<PricesheetResponse> The pricesheets response data
   */
  async getPricesheets(input?: PricesheetSearchInput): Promise<PricesheetResponse> {
    const variables = { input };
    const result = await this.executeQuery('pricesheets', variables);
    return result.data.pricesheets as PricesheetResponse;
  }
  /**
   Fetches a single pricesheet by ID
   * @param variables Variables for the pricesheet query
   * - id: string - Pricesheet ID to fetch
   * @returns Promise<Pricesheet> The pricesheet data
   */
  async getPricesheet(variables: PricesheetQueryVariables): Promise<Pricesheet> {
    const result = await this.executeQuery('pricesheet', variables);
    return result.data.pricesheet as Pricesheet;
  }
  /**
   Creates a new pricesheet
   * @param input Pricesheet creation input data
   * @returns Promise<Pricesheet> The created pricesheet data
   */
  async createPricesheet(input: PricesheetCreateInput): Promise<Pricesheet> {
    const variables = { input };
    const result = await this.executeMutation('pricesheetCreate', variables);
    return result.data.pricesheetCreate as Pricesheet;
  }
  /**
   Updates an existing pricesheet
   * @param id Pricesheet ID to update
   * @param input Pricesheet update input data
   * @returns Promise<Pricesheet> The updated pricesheet data
   */
  async updatePricesheet(id: string, input: PricesheetUpdateInput): Promise<Pricesheet> {
    const variables = { id, input };
    const result = await this.executeMutation('pricesheetUpdate', variables);
    return result.data.pricesheetUpdate as Pricesheet;
  }
  /**
   Assigns a pricesheet to entities
   * @param id Pricesheet ID to assign
   * @param input Pricesheet assignment input data
   * @returns Promise<Pricesheet> The assigned pricesheet data
   */
  async assignPricesheet(id: string, input: PricesheetAssignInput): Promise<Pricesheet> {
    const variables = { id, input };
    const result = await this.executeMutation('pricesheetAssign', variables);
    return result.data.pricesheetAssign as Pricesheet;
  }
  /**
   Unassigns a pricesheet from entities
   * @param id Pricesheet ID to unassign
   * @param input Pricesheet unassignment input data
   * @returns Promise<Pricesheet> The unassigned pricesheet data
   */
  async unassignPricesheet(id: string, input: PricesheetUnassignInput): Promise<Pricesheet> {
    const variables = { id, input };
    const result = await this.executeMutation('pricesheetUnassign', variables);
    return result.data.pricesheetUnassign as Pricesheet;
  }
  /**
   Imports pricesheet data from CSV file
   * @param input CSV import input data
   * @returns Promise<CsvImportResponse> The CSV import response
   */
  async importPricesheetFromCSV(input: PricesheetCsvInput): Promise<CsvImportResponse> {
    const variables = { input };
    const result = await this.executeMutation('pricesheetCsvImport', variables);
    return result.data.pricesheetCsvImport as CsvImportResponse;
  }
}