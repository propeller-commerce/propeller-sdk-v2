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
import type { TenderAddItemsVariables, TenderApplyIncentivesVariables, TenderDeleteItemVariables, TenderProcessVariables, TenderStartVariables, TenderUpdateAddressVariables, TenderUpdateDiscountVariables, TenderUpdateInvoiceUserVariables, TenderUpdateItemVariables, TenderUpdatePaymentVariables, TenderUpdatePostageVariables, TenderUpdateVariables, TenderVariables } from '../generated/operationVariables';
/**
 Service class for Tender-related GraphQL operations
 */
export function tenderService(client: GraphQLClient) {
  return {
    /**
       Fetches a single tender by ID
       * @param variables Tender ID to fetch
       * @returns Promise<Tender> The tender data
       */
    async getTender(variables: TenderVariables): Promise<Tender> {
      const result = await runOperation<{ tender: Tender }>(client, tenderDoc, 'tender', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tender as Tender;
    },
    /**
       Starts a new tender
       * @param variables Tender start input data
       * @returns Promise<Tender> The started tender
       */
    async startTender(variables: TenderStartVariables): Promise<Tender> {
      const result = await runOperation<{ tenderStart: Tender }>(client, tenderStartDoc, 'tenderStart', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderStart as Tender;
    },
    /**
       Updates an existing tender
       * @param variables Tender update input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTender(variables: TenderUpdateVariables): Promise<Tender> {
      const result = await runOperation<{ tenderUpdate: Tender }>(client, tenderUpdateDoc, 'tenderUpdate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderUpdate as Tender;
    },
    /**
       Updates a tender address
       * @param variables Tender update address input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderAddress(variables: TenderUpdateAddressVariables): Promise<Tender> {
      const result = await runOperation<{ tenderUpdateAddress: Tender }>(client, tenderUpdateAddressDoc, 'tenderUpdateAddress', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderUpdateAddress as Tender;
    },
    /**
       Adds an item to a tender
       * @param variables Tender ID
       * @returns Promise<Tender> The updated tender
       */
    async addItemToTender(variables: TenderAddItemsVariables): Promise<TenderResponse> {
      const result = await runOperation<{ tenderAddItems: TenderResponse }>(client, tenderAddItemsDoc, 'tenderAddItems', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderAddItems as TenderResponse;
    },
    /**
       Adds multiple items to a tender
       * @param variables Tender ID
       * @returns Promise<Tender> The updated tender
       */
    async addItemsToTender(variables: TenderAddItemsVariables): Promise<TenderResponse> {
      const result = await runOperation<{ tenderAddItems: TenderResponse }>(client, tenderAddItemsDoc, 'tenderAddItems', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderAddItems as TenderResponse;
    },
    /**
       Updates an item in a tender
       * @param variables Tender update item input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderItem(variables: TenderUpdateItemVariables): Promise<Tender> {
      const result = await runOperation<{ tenderUpdateItem: Tender }>(client, tenderUpdateItemDoc, 'tenderUpdateItem', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderUpdateItem as Tender;
    },
    /**
       Deletes an item from a tender
       * @param variables Delete item input data
       * @returns Promise<Tender> The updated tender
       */
    async deleteTenderItem(variables: TenderDeleteItemVariables): Promise<Tender> {
      const result = await runOperation<{ tenderDeleteItem: Tender }>(client, tenderDeleteItemDoc, 'tenderDeleteItem', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderDeleteItem as Tender;
    },
    /**
       Updates tender discount
       * @param variables Tender discount input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderDiscount(variables: TenderUpdateDiscountVariables): Promise<Tender> {
      const result = await runOperation<{ tenderUpdateDiscount: Tender }>(client, tenderUpdateDiscountDoc, 'tenderUpdateDiscount', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderUpdateDiscount as Tender;
    },
    /**
       Updates tender payment
       * @param variables Tender payment input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderPayment(variables: TenderUpdatePaymentVariables): Promise<Tender> {
      const result = await runOperation<{ tenderUpdatePayment: Tender }>(client, tenderUpdatePaymentDoc, 'tenderUpdatePayment', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderUpdatePayment as Tender;
    },
    /**
       Updates tender postage
       * @param variables Tender postage input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderPostage(variables: TenderUpdatePostageVariables): Promise<Tender> {
      const result = await runOperation<{ tenderUpdatePostage: Tender }>(client, tenderUpdatePostageDoc, 'tenderUpdatePostage', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderUpdatePostage as Tender;
    },
    /**
       Updates tender invoice user
       * @param variables Tender invoice user input data
       * @returns Promise<Tender> The updated tender
       */
    async updateTenderInvoiceUser(variables: TenderUpdateInvoiceUserVariables): Promise<Tender> {
      const result = await runOperation<{ tenderUpdateInvoiceUser: Tender }>(client, tenderUpdateInvoiceUserDoc, 'tenderUpdateInvoiceUser', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderUpdateInvoiceUser as Tender;
    },
    /**
       Applies incentives to a tender
       * @param variables Apply incentives input data
       * @returns Promise<Tender> The updated tender
       */
    async applyIncentivesToTender(variables: TenderApplyIncentivesVariables): Promise<Tender> {
      const result = await runOperation<{ tenderApplyIncentives: Tender }>(client, tenderApplyIncentivesDoc, 'tenderApplyIncentives', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.tenderApplyIncentives as Tender;
    },
    /**
       Processes a tender (checkout)
       * @param variables Tender process input data
       * @returns Promise<TenderProcessResponse> The process response
       */
    async processTender(variables: TenderProcessVariables): Promise<TenderProcessResponse> {
      const result = await runOperation<{ tenderProcess: TenderProcessResponse }>(client, tenderProcessDoc, 'tenderProcess', variables);
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
   * @param variables Tender ID to fetch
   */
  getTender(variables: TenderVariables): Promise<Tender> { return this._svc.getTender(variables); }
  /**
   * Starts a new tender
   * @param variables Tender start input data
   */
  startTender(variables: TenderStartVariables): Promise<Tender> { return this._svc.startTender(variables); }
  /**
   * Updates an existing tender
   * @param variables Tender update input data
   */
  updateTender(variables: TenderUpdateVariables): Promise<Tender> { return this._svc.updateTender(variables); }
  /**
   * Updates a tender address
   * @param variables Tender update address input data
   */
  updateTenderAddress(variables: TenderUpdateAddressVariables): Promise<Tender> { return this._svc.updateTenderAddress(variables); }
  /**
   * Adds an item to a tender
   * @param variables Tender ID
   */
  addItemToTender(variables: TenderAddItemsVariables): Promise<TenderResponse> { return this._svc.addItemToTender(variables); }
  /**
   * Adds multiple items to a tender
   * @param variables Tender ID
   */
  addItemsToTender(variables: TenderAddItemsVariables): Promise<TenderResponse> { return this._svc.addItemsToTender(variables); }
  /**
   * Updates an item in a tender
   * @param variables Tender update item input data
   */
  updateTenderItem(variables: TenderUpdateItemVariables): Promise<Tender> { return this._svc.updateTenderItem(variables); }
  /**
   * Deletes an item from a tender
   * @param variables Delete item input data
   */
  deleteTenderItem(variables: TenderDeleteItemVariables): Promise<Tender> { return this._svc.deleteTenderItem(variables); }
  /**
   * Updates tender discount
   * @param variables Tender discount input data
   */
  updateTenderDiscount(variables: TenderUpdateDiscountVariables): Promise<Tender> { return this._svc.updateTenderDiscount(variables); }
  /**
   * Updates tender payment
   * @param variables Tender payment input data
   */
  updateTenderPayment(variables: TenderUpdatePaymentVariables): Promise<Tender> { return this._svc.updateTenderPayment(variables); }
  /**
   * Updates tender postage
   * @param variables Tender postage input data
   */
  updateTenderPostage(variables: TenderUpdatePostageVariables): Promise<Tender> { return this._svc.updateTenderPostage(variables); }
  /**
   * Updates tender invoice user
   * @param variables Tender invoice user input data
   */
  updateTenderInvoiceUser(variables: TenderUpdateInvoiceUserVariables): Promise<Tender> { return this._svc.updateTenderInvoiceUser(variables); }
  /**
   * Applies incentives to a tender
   * @param variables Apply incentives input data
   */
  applyIncentivesToTender(variables: TenderApplyIncentivesVariables): Promise<Tender> { return this._svc.applyIncentivesToTender(variables); }
  /**
   * Processes a tender (checkout)
   * @param variables Tender process input data
   */
  processTender(variables: TenderProcessVariables): Promise<TenderProcessResponse> { return this._svc.processTender(variables); }
}
