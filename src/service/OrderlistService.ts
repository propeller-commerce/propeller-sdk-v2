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
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as orderlistDoc } from '../generated/operations/orderlist';
import { document as orderlistsDoc } from '../generated/operations/orderlists';
import { document as computedOrderlistsDoc } from '../generated/operations/computedOrderlists';
import { document as orderlistCreateDoc } from '../generated/operations/orderlistCreate';
import { document as orderlistUpdateDoc } from '../generated/operations/orderlistUpdate';
import { document as orderlistDeleteDoc } from '../generated/operations/orderlistDelete';
import { document as orderlistAddItemsDoc } from '../generated/operations/orderlistAddItems';
import { document as orderlistRemoveItemsDoc } from '../generated/operations/orderlistRemoveItems';
import { document as orderlistAssignUsersDoc } from '../generated/operations/orderlistAssignUsers';
import { document as orderlistUnassignUsersDoc } from '../generated/operations/orderlistUnassignUsers';
import { document as orderlistAssignCompaniesDoc } from '../generated/operations/orderlistAssignCompanies';
import { document as orderlistUnassignCompaniesDoc } from '../generated/operations/orderlistUnassignCompanies';
/**
 Service for managing orderlists
 */
export function orderlistService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific orderlist by ID
       * @param id Orderlist ID
       * @returns Promise<Orderlist> Orderlist data
       */
    async getOrderlist(id: number): Promise<Orderlist> {
      const result = await runOperation(client, orderlistDoc, 'orderlist', { id });
      return result.data.orderlist as Orderlist;
    },
    /**
       Retrieves orderlists with search
       * @param input Search input parameters
       * @returns Promise<OrderlistsResponse> Orderlists response
       */
    async getOrderlists(input?: OrderlistSearchInput): Promise<OrderlistsResponse> {
      const result = await runOperation(client, orderlistsDoc, 'orderlists', { input });
      return result.data.orderlists as OrderlistsResponse;
    },
    /**
       Retrieves computed (merged) orderlists
       * @param input Computed orderlists input
       * @returns Promise<ComputedOrderlistsResponse> Computed orderlists response
       */
    async getComputedOrderlists(input: ComputedOrderlistsInput): Promise<ComputedOrderlistsResponse> {
      const result = await runOperation(client, computedOrderlistsDoc, 'computedOrderlists', { input });
      return result.data.computedOrderlists as ComputedOrderlistsResponse;
    },
    /**
       Creates a new orderlist
       * @param input Orderlist creation input
       * @returns Promise<Orderlist> The created orderlist
       */
    async createOrderlist(input: OrderlistCreateInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistCreateDoc, 'orderlistCreate', { input });
      return result.data.orderlistCreate as Orderlist;
    },
    /**
       Updates an existing orderlist
       * @param id Orderlist ID
       * @param input Orderlist update input
       * @returns Promise<Orderlist> The updated orderlist
       */
    async updateOrderlist(id: number, input: OrderlistUpdateInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistUpdateDoc, 'orderlistUpdate', { id, input });
      return result.data.orderlistUpdate as Orderlist;
    },
    /**
       Deletes an orderlist
       * @param id Orderlist ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteOrderlist(id: number): Promise<boolean> {
      const result = await runOperation(client, orderlistDeleteDoc, 'orderlistDelete', { id });
      return result.data.orderlistDelete;
    },
    /**
       Adds items to an orderlist
       * @param id Orderlist ID
       * @param input Items to add
       * @returns Promise<Orderlist> The updated orderlist
       */
    async addOrderlistItems(id: number, input: OrderlistItemsInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistAddItemsDoc, 'orderlistAddItems', { id, input });
      return result.data.orderlistAddItems as Orderlist;
    },
    /**
       Removes items from an orderlist
       * @param id Orderlist ID
       * @param input Items to remove
       * @returns Promise<Orderlist> The updated orderlist
       */
    async removeOrderlistItems(id: number, input: OrderlistItemsInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistRemoveItemsDoc, 'orderlistRemoveItems', { id, input });
      return result.data.orderlistRemoveItems as Orderlist;
    },
    /**
       Assigns users to an orderlist
       * @param id Orderlist ID
       * @param input Users to assign
       * @returns Promise<Orderlist> The updated orderlist
       */
    async assignOrderlistUsers(id: number, input: OrderlistUsersInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistAssignUsersDoc, 'orderlistAssignUsers', { id, input });
      return result.data.orderlistAssignUsers as Orderlist;
    },
    /**
       Unassigns users from an orderlist
       * @param id Orderlist ID
       * @param input Users to unassign
       * @returns Promise<Orderlist> The updated orderlist
       */
    async unassignOrderlistUsers(id: number, input: OrderlistUsersInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistUnassignUsersDoc, 'orderlistUnassignUsers', { id, input });
      return result.data.orderlistUnassignUsers as Orderlist;
    },
    /**
       Assigns companies to an orderlist
       * @param id Orderlist ID
       * @param input Companies to assign
       * @returns Promise<Orderlist> The updated orderlist
       */
    async assignOrderlistCompanies(id: number, input: OrderlistCompaniesInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistAssignCompaniesDoc, 'orderlistAssignCompanies', { id, input });
      return result.data.orderlistAssignCompanies as Orderlist;
    },
    /**
       Unassigns companies from an orderlist
       * @param id Orderlist ID
       * @param input Companies to unassign
       * @returns Promise<Orderlist> The updated orderlist
       */
    async unassignOrderlistCompanies(id: number, input: OrderlistCompaniesInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistUnassignCompaniesDoc, 'orderlistUnassignCompanies', { id, input });
      return result.data.orderlistUnassignCompanies as Orderlist;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `orderlistService(client)`.
 */
export class OrderlistService {
  private readonly _svc: ReturnType<typeof orderlistService>;
  constructor(client: GraphQLClient) { this._svc = orderlistService(client); }
  /**
   * Retrieves a specific orderlist by ID
   * @param id Orderlist ID
   */
  getOrderlist(id: number): Promise<Orderlist> { return this._svc.getOrderlist(id); }
  /**
   * Retrieves orderlists with search
   * @param input Search input parameters
   */
  getOrderlists(input?: OrderlistSearchInput): Promise<OrderlistsResponse> { return this._svc.getOrderlists(input); }
  /**
   * Retrieves computed (merged) orderlists
   * @param input Computed orderlists input
   */
  getComputedOrderlists(input: ComputedOrderlistsInput): Promise<ComputedOrderlistsResponse> { return this._svc.getComputedOrderlists(input); }
  /**
   * Creates a new orderlist
   * @param input Orderlist creation input
   */
  createOrderlist(input: OrderlistCreateInput): Promise<Orderlist> { return this._svc.createOrderlist(input); }
  /**
   * Updates an existing orderlist
   * @param id Orderlist ID
   * @param input Orderlist update input
   */
  updateOrderlist(id: number, input: OrderlistUpdateInput): Promise<Orderlist> { return this._svc.updateOrderlist(id, input); }
  /**
   * Deletes an orderlist
   * @param id Orderlist ID to delete
   */
  deleteOrderlist(id: number): Promise<boolean> { return this._svc.deleteOrderlist(id); }
  /**
   * Adds items to an orderlist
   * @param id Orderlist ID
   * @param input Items to add
   */
  addOrderlistItems(id: number, input: OrderlistItemsInput): Promise<Orderlist> { return this._svc.addOrderlistItems(id, input); }
  /**
   * Removes items from an orderlist
   * @param id Orderlist ID
   * @param input Items to remove
   */
  removeOrderlistItems(id: number, input: OrderlistItemsInput): Promise<Orderlist> { return this._svc.removeOrderlistItems(id, input); }
  /**
   * Assigns users to an orderlist
   * @param id Orderlist ID
   * @param input Users to assign
   */
  assignOrderlistUsers(id: number, input: OrderlistUsersInput): Promise<Orderlist> { return this._svc.assignOrderlistUsers(id, input); }
  /**
   * Unassigns users from an orderlist
   * @param id Orderlist ID
   * @param input Users to unassign
   */
  unassignOrderlistUsers(id: number, input: OrderlistUsersInput): Promise<Orderlist> { return this._svc.unassignOrderlistUsers(id, input); }
  /**
   * Assigns companies to an orderlist
   * @param id Orderlist ID
   * @param input Companies to assign
   */
  assignOrderlistCompanies(id: number, input: OrderlistCompaniesInput): Promise<Orderlist> { return this._svc.assignOrderlistCompanies(id, input); }
  /**
   * Unassigns companies from an orderlist
   * @param id Orderlist ID
   * @param input Companies to unassign
   */
  unassignOrderlistCompanies(id: number, input: OrderlistCompaniesInput): Promise<Orderlist> { return this._svc.unassignOrderlistCompanies(id, input); }
}

