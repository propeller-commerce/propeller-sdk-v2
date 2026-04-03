import { BaseService } from './BaseService';
import { Orderlist } from '../type/Orderlist';
import { OrderlistsResponse } from '../type/OrderlistsResponse';
import { OrderlistSearchInput } from '../type/OrderlistSearchInput';
import { OrderlistCreateInput } from '../type/OrderlistCreateInput';
import { OrderlistUpdateInput } from '../type/OrderlistUpdateInput';
import { OrderlistItemsInput } from '../type/OrderlistItemsInput';
import { OrderlistUsersInput } from '../type/OrderlistUsersInput';
import { OrderlistCompaniesInput } from '../type/OrderlistCompaniesInput';
import { ComputedOrderlistsInput } from '../type/ComputedOrderlistsInput';
import { ComputedOrderlistsResponse } from '../type/ComputedOrderlistsResponse';
/**
 Service for managing orderlists
 * @extends BaseService
 */
export class OrderlistService extends BaseService {
  /**
   Retrieves a specific orderlist by ID
   * @param id Orderlist ID
   * @returns Promise<Orderlist> Orderlist data
   */
  async getOrderlist(id: number): Promise<Orderlist> {
    const variables = { id };
    const result = await this.executeQuery('orderlist', variables);
    return new Orderlist(result.data.orderlist);
  }
  /**
   Retrieves orderlists with search
   * @param input Search input parameters
   * @returns Promise<OrderlistsResponse> Orderlists response
   */
  async getOrderlists(input?: OrderlistSearchInput): Promise<OrderlistsResponse> {
    const variables = { input };
    const result = await this.executeQuery('orderlists', variables);
    return new OrderlistsResponse(result.data.orderlists);
  }
  /**
   Retrieves computed (merged) orderlists
   * @param input Computed orderlists input
   * @returns Promise<ComputedOrderlistsResponse> Computed orderlists response
   */
  async getComputedOrderlists(input: ComputedOrderlistsInput): Promise<ComputedOrderlistsResponse> {
    const variables = { input };
    const result = await this.executeQuery('computedOrderlists', variables);
    return new ComputedOrderlistsResponse(result.data.computedOrderlists);
  }
  /**
   Creates a new orderlist
   * @param input Orderlist creation input
   * @returns Promise<Orderlist> The created orderlist
   */
  async createOrderlist(input: OrderlistCreateInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistCreate', variables);
    return new Orderlist(result.data.orderlistCreate);
  }
  /**
   Updates an existing orderlist
   * @param id Orderlist ID
   * @param input Orderlist update input
   * @returns Promise<Orderlist> The updated orderlist
   */
  async updateOrderlist(id: number, input: OrderlistUpdateInput): Promise<Orderlist> {
    const variables = { id, input };
    const result = await this.executeMutation('orderlistUpdate', variables);
    return new Orderlist(result.data.orderlistUpdate);
  }
  /**
   Deletes an orderlist
   * @param id Orderlist ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteOrderlist(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('orderlistDelete', variables);
    return result.data.orderlistDelete;
  }
  /**
   Adds items to an orderlist
   * @param id Orderlist ID
   * @param input Items to add
   * @returns Promise<Orderlist> The updated orderlist
   */
  async addOrderlistItems(id: number, input: OrderlistItemsInput): Promise<Orderlist> {
    const variables = { id, input };
    const result = await this.executeMutation('orderlistAddItems', variables);
    return new Orderlist(result.data.orderlistAddItems);
  }
  /**
   Removes items from an orderlist
   * @param id Orderlist ID
   * @param input Items to remove
   * @returns Promise<Orderlist> The updated orderlist
   */
  async removeOrderlistItems(id: number, input: OrderlistItemsInput): Promise<Orderlist> {
    const variables = { id, input };
    const result = await this.executeMutation('orderlistRemoveItems', variables);
    return new Orderlist(result.data.orderlistRemoveItems);
  }
  /**
   Assigns users to an orderlist
   * @param id Orderlist ID
   * @param input Users to assign
   * @returns Promise<Orderlist> The updated orderlist
   */
  async assignOrderlistUsers(id: number, input: OrderlistUsersInput): Promise<Orderlist> {
    const variables = { id, input };
    const result = await this.executeMutation('orderlistAssignUsers', variables);
    return new Orderlist(result.data.orderlistAssignUsers);
  }
  /**
   Unassigns users from an orderlist
   * @param id Orderlist ID
   * @param input Users to unassign
   * @returns Promise<Orderlist> The updated orderlist
   */
  async unassignOrderlistUsers(id: number, input: OrderlistUsersInput): Promise<Orderlist> {
    const variables = { id, input };
    const result = await this.executeMutation('orderlistUnassignUsers', variables);
    return new Orderlist(result.data.orderlistUnassignUsers);
  }
  /**
   Assigns companies to an orderlist
   * @param id Orderlist ID
   * @param input Companies to assign
   * @returns Promise<Orderlist> The updated orderlist
   */
  async assignOrderlistCompanies(id: number, input: OrderlistCompaniesInput): Promise<Orderlist> {
    const variables = { id, input };
    const result = await this.executeMutation('orderlistAssignCompanies', variables);
    return new Orderlist(result.data.orderlistAssignCompanies);
  }
  /**
   Unassigns companies from an orderlist
   * @param id Orderlist ID
   * @param input Companies to unassign
   * @returns Promise<Orderlist> The updated orderlist
   */
  async unassignOrderlistCompanies(id: number, input: OrderlistCompaniesInput): Promise<Orderlist> {
    const variables = { id, input };
    const result = await this.executeMutation('orderlistUnassignCompanies', variables);
    return new Orderlist(result.data.orderlistUnassignCompanies);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}
