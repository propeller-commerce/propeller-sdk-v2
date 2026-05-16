import { Tender } from '../type/Tender';
import { TenderResponse } from '../type/TenderResponse';
import { TenderStartInput } from '../type/TenderStartInput';
import { TenderUpdateInput } from '../type/TenderUpdateInput';
import { TenderUpdateAddressInput } from '../type/TenderUpdateAddressInput';
import { TenderUpdateItemInput } from '../type/TenderUpdateItemInput';
import { TenderAddItemInput } from '../type/TenderAddItemInput';
import { TenderAddItemsInput } from '../type/TenderAddItemsInput';
import { TenderProcessResponse } from '../type/TenderProcessResponse';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as tenderDoc } from '../generated/operations/tender';
import { document as tenderStartDoc } from '../generated/operations/tenderStart';
import { document as tenderUpdateDoc } from '../generated/operations/tenderUpdate';
import { document as tenderUpdateAddressDoc } from '../generated/operations/tenderUpdateAddress';
import { document as tenderAddItemsDoc } from '../generated/operations/tenderAddItems';
import { document as tenderUpdateItemDoc } from '../generated/operations/tenderUpdateItem';
import { document as tenderDeleteItemDoc } from '../generated/operations/tenderDeleteItem';
import { document as tenderUpdateDiscountDoc } from '../generated/operations/tenderUpdateDiscount';
import { document as tenderUpdatePaymentDoc } from '../generated/operations/tenderUpdatePayment';
import { document as tenderUpdatePostageDoc } from '../generated/operations/tenderUpdatePostage';
import { document as tenderUpdateInvoiceUserDoc } from '../generated/operations/tenderUpdateInvoiceUser';
import { document as tenderApplyIncentivesDoc } from '../generated/operations/tenderApplyIncentives';
import { document as tenderProcessDoc } from '../generated/operations/tenderProcess';
/**
 Service class for Tender-related GraphQL operations
 */
export function tenderService(client: GraphQLClient) {
  return {
    /**
       Fetches a single tender by ID
       * @param id Tender ID to fetch
       * @returns Promise<Tender> The tender data
       */
    async getTender(id: number): Promise<Tender> {
      const result = await runOperation(client, tenderDoc, 'tender', { id });
      return result.data.tender as Tender;
    },
    /**
       Starts a new tender
       * @param input Tender start input data
       * @returns Promise<Tender> The started tender
       */
    async startTender(input: TenderStartInput): Promise<Tender> {
      const result = await runOperation(client, tenderStartDoc, 'tenderStart', { input });
      return result.data.tenderStart as Tender;
    },
    /**
       Updates an existing tender
       * @param input Tender update input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTender(input: TenderUpdateInput): Promise<Tender> {
      const result = await runOperation(client, tenderUpdateDoc, 'tenderUpdate', { input });
      return result.data.tenderUpdate as Tender;
    },
    /**
       Updates a tender address
       * @param input Tender update address input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderAddress(input: TenderUpdateAddressInput): Promise<Tender> {
      const result = await runOperation(client, tenderUpdateAddressDoc, 'tenderUpdateAddress', { input });
      return result.data.tenderUpdateAddress as Tender;
    },
    /**
       Adds an item to a tender
       * @param id Tender ID
       * @param input Tender add item input data
       * @returns Promise<Tender> The updated tender
       */
    async addItemToTender(id: string, input: TenderAddItemInput): Promise<TenderResponse> {
      const result = await runOperation(client, tenderAddItemsDoc, 'tenderAddItems', { id, input });
      return result.data.tenderAddItems as TenderResponse;
    },
    /**
       Adds multiple items to a tender
       * @param id Tender ID
       * @param input Tender add items input data
       * @returns Promise<Tender> The updated tender
       */
    async addItemsToTender(id: string, input: TenderAddItemsInput): Promise<TenderResponse> {
      const result = await runOperation(client, tenderAddItemsDoc, 'tenderAddItems', { id, input });
      return result.data.tenderAddItems as TenderResponse;
    },
    /**
       Updates an item in a tender
       * @param input Tender update item input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderItem(input: TenderUpdateItemInput): Promise<Tender> {
      const result = await runOperation(client, tenderUpdateItemDoc, 'tenderUpdateItem', { input });
      return result.data.tenderUpdateItem as Tender;
    },
    /**
       Deletes an item from a tender
       * @param input Delete item input data
       * @returns Promise<Tender> The updated tender
       */
    async deleteTenderItem(input: any): Promise<Tender> {
      const result = await runOperation(client, tenderDeleteItemDoc, 'tenderDeleteItem', { input });
      return result.data.tenderDeleteItem as Tender;
    },
    /**
       Updates tender discount
       * @param input Tender discount input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderDiscount(input: any): Promise<Tender> {
      const result = await runOperation(client, tenderUpdateDiscountDoc, 'tenderUpdateDiscount', { input });
      return result.data.tenderUpdateDiscount as Tender;
    },
    /**
       Updates tender payment
       * @param input Tender payment input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderPayment(input: any): Promise<Tender> {
      const result = await runOperation(client, tenderUpdatePaymentDoc, 'tenderUpdatePayment', { input });
      return result.data.tenderUpdatePayment as Tender;
    },
    /**
       Updates tender postage
       * @param input Tender postage input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderPostage(input: any): Promise<Tender> {
      const result = await runOperation(client, tenderUpdatePostageDoc, 'tenderUpdatePostage', { input });
      return result.data.tenderUpdatePostage as Tender;
    },
    /**
       Updates tender invoice user
       * @param input Tender invoice user input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderInvoiceUser(input: any): Promise<Tender> {
      const result = await runOperation(client, tenderUpdateInvoiceUserDoc, 'tenderUpdateInvoiceUser', { input });
      return result.data.tenderUpdateInvoiceUser as Tender;
    },
    /**
       Applies incentives to a tender
       * @param input Apply incentives input data
       * @returns Promise<Tender> The updated tender
       */
    async applyIncentivesToTender(input: any): Promise<Tender> {
      const result = await runOperation(client, tenderApplyIncentivesDoc, 'tenderApplyIncentives', { input });
      return result.data.tenderApplyIncentives as Tender;
    },
    /**
       Processes a tender (checkout)
       * @param input Tender process input data
       * @returns Promise<TenderProcessResponse> The process response
       */
    async processTender(input: any): Promise<TenderProcessResponse> {
      const result = await runOperation(client, tenderProcessDoc, 'tenderProcess', { input });
      return result.data.tenderProcess as TenderProcessResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `tenderService(client)`.
 */
export class TenderService {
  private readonly _svc: ReturnType<typeof tenderService>;
  constructor(client: GraphQLClient) { this._svc = tenderService(client); }
  /**
   * Fetches a single tender by ID
   * @param id Tender ID to fetch
   */
  getTender(id: number): Promise<Tender> { return this._svc.getTender(id); }
  /**
   * Starts a new tender
   * @param input Tender start input data
   */
  startTender(input: TenderStartInput): Promise<Tender> { return this._svc.startTender(input); }
  /**
   * Updates an existing tender
   * @param input Tender update input data
   */
  updateTender(input: TenderUpdateInput): Promise<Tender> { return this._svc.updateTender(input); }
  /**
   * Updates a tender address
   * @param input Tender update address input data
   */
  updateTenderAddress(input: TenderUpdateAddressInput): Promise<Tender> { return this._svc.updateTenderAddress(input); }
  /**
   * Adds an item to a tender
   * @param id Tender ID
   * @param input Tender add item input data
   */
  addItemToTender(id: string, input: TenderAddItemInput): Promise<TenderResponse> { return this._svc.addItemToTender(id, input); }
  /**
   * Adds multiple items to a tender
   * @param id Tender ID
   * @param input Tender add items input data
   */
  addItemsToTender(id: string, input: TenderAddItemsInput): Promise<TenderResponse> { return this._svc.addItemsToTender(id, input); }
  /**
   * Updates an item in a tender
   * @param input Tender update item input data
   */
  updateTenderItem(input: TenderUpdateItemInput): Promise<Tender> { return this._svc.updateTenderItem(input); }
  /**
   * Deletes an item from a tender
   * @param input Delete item input data
   */
  deleteTenderItem(input: any): Promise<Tender> { return this._svc.deleteTenderItem(input); }
  /**
   * Updates tender discount
   * @param input Tender discount input data
   */
  updateTenderDiscount(input: any): Promise<Tender> { return this._svc.updateTenderDiscount(input); }
  /**
   * Updates tender payment
   * @param input Tender payment input data
   */
  updateTenderPayment(input: any): Promise<Tender> { return this._svc.updateTenderPayment(input); }
  /**
   * Updates tender postage
   * @param input Tender postage input data
   */
  updateTenderPostage(input: any): Promise<Tender> { return this._svc.updateTenderPostage(input); }
  /**
   * Updates tender invoice user
   * @param input Tender invoice user input data
   */
  updateTenderInvoiceUser(input: any): Promise<Tender> { return this._svc.updateTenderInvoiceUser(input); }
  /**
   * Applies incentives to a tender
   * @param input Apply incentives input data
   */
  applyIncentivesToTender(input: any): Promise<Tender> { return this._svc.applyIncentivesToTender(input); }
  /**
   * Processes a tender (checkout)
   * @param input Tender process input data
   */
  processTender(input: any): Promise<TenderProcessResponse> { return this._svc.processTender(input); }
}
