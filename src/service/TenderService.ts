import { BaseService } from './BaseService';
import { Tender } from '../type/Tender';
import { TenderResponse } from '../type/TenderResponse';
import { TenderStartInput } from '../type/TenderStartInput';
import { TenderUpdateInput } from '../type/TenderUpdateInput';
import { TenderUpdateAddressInput } from '../type/TenderUpdateAddressInput';
import { TenderUpdateItemInput } from '../type/TenderUpdateItemInput';
import { TenderAddItemInput } from '../type/TenderAddItemInput';
import { TenderAddItemsInput } from '../type/TenderAddItemsInput';
import { TenderProcessResponse } from '../type/TenderProcessResponse';
/**
 Service class for Tender-related GraphQL operations
 */
export class TenderService extends BaseService {
  /**
   Fetches a single tender by ID
   * @param id Tender ID to fetch
   * @returns Promise<Tender> The tender data
   */
  async getTender(id: number): Promise<Tender> {
    const variables = { id };
    const result = await this.executeQuery('tender', variables);
    return new Tender(result.data.tender);
  }
  /**
   Starts a new tender
   * @param input Tender start input data
   * @returns Promise<Tender> The started tender
   */
  async startTender(input: TenderStartInput): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderStart', variables);
    return new Tender(result.data.tenderStart);
  }
  /**
   Updates an existing tender
   * @param input Tender update input data
   * @returns Promise<Tender> The updated tender
   */
  async updateTender(input: TenderUpdateInput): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderUpdate', variables);
    return new Tender(result.data.tenderUpdate);
  }
  /**
   Updates a tender address
   * @param input Tender update address input data
   * @returns Promise<Tender> The updated tender
   */
  async updateTenderAddress(input: TenderUpdateAddressInput): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderUpdateAddress', variables);
    return new Tender(result.data.tenderUpdateAddress);
  }
  /**
   Adds an item to a tender
   * @param input Tender add item input data
   * @returns Promise<Tender> The updated tender
   */
  async addItemToTender(input: TenderAddItemInput): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderAddItem', variables);
    return new Tender(result.data.tenderAddItem);
  }
  /**
   Adds multiple items to a tender
   * @param input Tender add items input data
   * @returns Promise<Tender> The updated tender
   */
  async addItemsToTender(input: TenderAddItemsInput): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderAddItems', variables);
    return new Tender(result.data.tenderAddItems);
  }
  /**
   Updates an item in a tender
   * @param input Tender update item input data
   * @returns Promise<Tender> The updated tender
   */
  async updateTenderItem(input: TenderUpdateItemInput): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderUpdateItem', variables);
    return new Tender(result.data.tenderUpdateItem);
  }
  /**
   Deletes an item from a tender
   * @param input Delete item input data
   * @returns Promise<Tender> The updated tender
   */
  async deleteTenderItem(input: any): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderDeleteItem', variables);
    return new Tender(result.data.tenderDeleteItem);
  }
  /**
   Updates tender discount
   * @param input Tender discount input data
   * @returns Promise<Tender> The updated tender
   */
  async updateTenderDiscount(input: any): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderUpdateDiscount', variables);
    return new Tender(result.data.tenderUpdateDiscount);
  }
  /**
   Updates tender payment
   * @param input Tender payment input data
   * @returns Promise<Tender> The updated tender
   */
  async updateTenderPayment(input: any): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderUpdatePayment', variables);
    return new Tender(result.data.tenderUpdatePayment);
  }
  /**
   Updates tender postage
   * @param input Tender postage input data
   * @returns Promise<Tender> The updated tender
   */
  async updateTenderPostage(input: any): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderUpdatePostage', variables);
    return new Tender(result.data.tenderUpdatePostage);
  }
  /**
   Updates tender invoice user
   * @param input Tender invoice user input data
   * @returns Promise<Tender> The updated tender
   */
  async updateTenderInvoiceUser(input: any): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderUpdateInvoiceUser', variables);
    return new Tender(result.data.tenderUpdateInvoiceUser);
  }
  /**
   Applies incentives to a tender
   * @param input Apply incentives input data
   * @returns Promise<Tender> The updated tender
   */
  async applyIncentivesToTender(input: any): Promise<Tender> {
    const variables = { input };
    const result = await this.executeMutation('tenderApplyIncentives', variables);
    return new Tender(result.data.tenderApplyIncentives);
  }
  /**
   Processes a tender (checkout)
   * @param input Tender process input data
   * @returns Promise<TenderProcessResponse> The process response
   */
  async processTender(input: any): Promise<TenderProcessResponse> {
    const variables = { input };
    const result = await this.executeMutation('tenderProcess', variables);
    return new TenderProcessResponse(result.data.tenderProcess);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}