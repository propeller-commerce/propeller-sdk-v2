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
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as pricesheetsDoc } from '../generated/operations/pricesheets';
import { document as pricesheetDoc } from '../generated/operations/pricesheet';
import { document as pricesheetCreateDoc } from '../generated/operations/pricesheetCreate';
import { document as pricesheetUpdateDoc } from '../generated/operations/pricesheetUpdate';
import { document as pricesheetAssignDoc } from '../generated/operations/pricesheetAssign';
import { document as pricesheetUnassignDoc } from '../generated/operations/pricesheetUnassign';
import { document as pricesheetCsvImportDoc } from '../generated/operations/pricesheetCsvImport';
/**
 Service class for Pricesheet-related GraphQL operations
 */
export function pricesheetService(client: GraphQLClient) {
  return {
    /**
       Fetches a list of pricesheets with search criteria
       * @param input Pricesheet search input parameters
       * @returns Promise<PricesheetResponse> The pricesheets response data
       */
    async getPricesheets(input?: PricesheetSearchInput): Promise<PricesheetResponse> {
      const result = await runOperation(client, pricesheetsDoc, 'pricesheets', { input });
      return result.data.pricesheets as PricesheetResponse;
    },
    /**
       Fetches a single pricesheet by ID
       * @param variables Variables for the pricesheet query
       * - id: string - Pricesheet ID to fetch
       * @returns Promise<Pricesheet> The pricesheet data
       */
    async getPricesheet(variables: PricesheetQueryVariables): Promise<Pricesheet> {
      const result = await runOperation(client, pricesheetDoc, 'pricesheet', variables);
      return result.data.pricesheet as Pricesheet;
    },
    /**
       Creates a new pricesheet
       * @param input Pricesheet creation input data
       * @returns Promise<Pricesheet> The created pricesheet data
       */
    async createPricesheet(input: PricesheetCreateInput): Promise<Pricesheet> {
      const result = await runOperation(client, pricesheetCreateDoc, 'pricesheetCreate', { input });
      return result.data.pricesheetCreate as Pricesheet;
    },
    /**
       Updates an existing pricesheet
       * @param id Pricesheet ID to update
       * @param input Pricesheet update input data
       * @returns Promise<Pricesheet> The updated pricesheet data
       */
    async updatePricesheet(id: string, input: PricesheetUpdateInput): Promise<Pricesheet> {
      const result = await runOperation(client, pricesheetUpdateDoc, 'pricesheetUpdate', { id, input });
      return result.data.pricesheetUpdate as Pricesheet;
    },
    /**
       Assigns a pricesheet to entities
       * @param id Pricesheet ID to assign
       * @param input Pricesheet assignment input data
       * @returns Promise<Pricesheet> The assigned pricesheet data
       */
    async assignPricesheet(id: string, input: PricesheetAssignInput): Promise<Pricesheet> {
      const result = await runOperation(client, pricesheetAssignDoc, 'pricesheetAssign', { id, input });
      return result.data.pricesheetAssign as Pricesheet;
    },
    /**
       Unassigns a pricesheet from entities
       * @param id Pricesheet ID to unassign
       * @param input Pricesheet unassignment input data
       * @returns Promise<Pricesheet> The unassigned pricesheet data
       */
    async unassignPricesheet(id: string, input: PricesheetUnassignInput): Promise<Pricesheet> {
      const result = await runOperation(client, pricesheetUnassignDoc, 'pricesheetUnassign', { id, input });
      return result.data.pricesheetUnassign as Pricesheet;
    },
    /**
       Imports pricesheet data from CSV file
       * @param input CSV import input data
       * @returns Promise<CsvImportResponse> The CSV import response
       */
    async importPricesheetFromCSV(input: PricesheetCsvInput): Promise<CsvImportResponse> {
      const result = await runOperation(client, pricesheetCsvImportDoc, 'pricesheetCsvImport', { input });
      return result.data.pricesheetCsvImport as CsvImportResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `pricesheetService(client)`.
 */
export class PricesheetService {
  private readonly _svc: ReturnType<typeof pricesheetService>;
  constructor(client: GraphQLClient) { this._svc = pricesheetService(client); }
  /**
   * Fetches a list of pricesheets with search criteria
   * @param input Pricesheet search input parameters
   */
  getPricesheets(input?: PricesheetSearchInput): Promise<PricesheetResponse> { return this._svc.getPricesheets(input); }
  /**
   * Fetches a single pricesheet by ID
   * @param variables Variables for the pricesheet query
   * @param id Pricesheet ID to fetch
   */
  getPricesheet(variables: PricesheetQueryVariables): Promise<Pricesheet> { return this._svc.getPricesheet(variables); }
  /**
   * Creates a new pricesheet
   * @param input Pricesheet creation input data
   */
  createPricesheet(input: PricesheetCreateInput): Promise<Pricesheet> { return this._svc.createPricesheet(input); }
  /**
   * Updates an existing pricesheet
   * @param id Pricesheet ID to update
   * @param input Pricesheet update input data
   */
  updatePricesheet(id: string, input: PricesheetUpdateInput): Promise<Pricesheet> { return this._svc.updatePricesheet(id, input); }
  /**
   * Assigns a pricesheet to entities
   * @param id Pricesheet ID to assign
   * @param input Pricesheet assignment input data
   */
  assignPricesheet(id: string, input: PricesheetAssignInput): Promise<Pricesheet> { return this._svc.assignPricesheet(id, input); }
  /**
   * Unassigns a pricesheet from entities
   * @param id Pricesheet ID to unassign
   * @param input Pricesheet unassignment input data
   */
  unassignPricesheet(id: string, input: PricesheetUnassignInput): Promise<Pricesheet> { return this._svc.unassignPricesheet(id, input); }
  /**
   * Imports pricesheet data from CSV file
   * @param input CSV import input data
   */
  importPricesheetFromCSV(input: PricesheetCsvInput): Promise<CsvImportResponse> { return this._svc.importPricesheetFromCSV(input); }
}
