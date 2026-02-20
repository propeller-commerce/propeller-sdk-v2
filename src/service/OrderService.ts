import { BaseService } from './BaseService';
import { Order } from '../type/Order';
import { OrderResponse } from '../type/OrderResponse';
import { OrderSearchArguments } from '../type/OrderSearchArguments';
import { OrderUpdateInput } from '../type/OrderUpdateInput';
import { OrderSetStatusInput } from '../type/OrderSetStatusInput';
import { OrderAddressUpdateInput } from '../type/OrderAddressUpdateInput';
import { OrderItem } from '../type/OrderItem';
import { OrderItemCreateInput } from '../type/OrderItemCreateInput';
import { OrderItemUpdateInput } from '../type/OrderItemUpdateInput';
import { Orderlist } from '../type/Orderlist';
import { OrderlistsResponse } from '../type/OrderlistsResponse';
import { OrderlistSearchInput } from '../type/OrderlistSearchInput';
import { OrderlistCreateInput } from '../type/OrderlistCreateInput';
import { OrderlistUpdateInput } from '../type/OrderlistUpdateInput';
import { OrderlistItemsInput } from '../type/OrderlistItemsInput';
import { OrderlistCompaniesInput } from '../type/OrderlistCompaniesInput';
import { OrderlistUsersInput } from '../type/OrderlistUsersInput';
import { OrderStatus } from '../type/OrderStatus';
import { OrderStatusesResponse } from '../type/OrderStatusesResponse';
import { OrderStatusesSearchInput } from '../type/OrderStatusesSearchInput';
import { CreateOrderStatusInput } from '../type/CreateOrderStatusInput';
import { UpdateOrderStatusInput } from '../type/UpdateOrderStatusInput';
import { OrderStatusSet } from '../type/OrderStatusSet';
import { OrderStatusSetsResponse } from '../type/OrderStatusSetsResponse';
import { OrderStatusSetsSearchInput } from '../type/OrderStatusSetsSearchInput';
import { CreateOrderStatusSetInput } from '../type/CreateOrderStatusSetInput';
import { UpdateOrderStatusSetInput } from '../type/UpdateOrderStatusSetInput';
import { AddOrderStatusesToOrderStatusSetInput } from '../type/AddOrderStatusesToOrderStatusSetInput';
import { RemoveOrderStatusesFromOrderStatusSetInput } from '../type/RemoveOrderStatusesFromOrderStatusSetInput';
import { Address } from '../type/Address';
import { MediaImageProductSearchInput } from '../type/MediaImageProductSearchInput';
import { TransformationsInput } from '../type/TransformationsInput';
/**
 * Order query variables interface
 Variables for the order query
 */
export interface OrderQueryVariables {
  /** Order ID to fetch */
  orderId?: number;
  /** Order UUID unique identifier */
  orderUUID?: string;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 Service class for Order-related GraphQL operations
 */
export class OrderService extends BaseService {
  /**
   Fetches a list of orders with search criteria
   * @param input Order search input parameters
   * @returns Promise<OrderResponse> The orders response data
   */
  async getOrders(input?: OrderSearchArguments): Promise<OrderResponse> {
    const variables = { input };
    const result = await this.executeQuery('orders', variables);
    return new OrderResponse(result.data.orders);
  }
  /**
   Fetches a single order by ID or UUID
   * @param variables Variables for the order query
   * - orderId: number - Order ID to fetch
   * - orderUUID: String - Order UUID unique identifier
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Order> The order data
   */
  async getOrder(variables: OrderQueryVariables): Promise<Order> {
    const result = await this.executeQuery('order', variables);
    return new Order(result.data.order);
  }
  /**
   Creates a new order
   * @param input Order creation input data
   * @returns Promise<Order> The created order
   */
  async createOrder(input: any): Promise<Order> {
    const variables = { input };
    const result = await this.executeMutation('orderCreate', variables);
    return new Order(result.data.orderCreate);
  }
  /**
   Updates an existing order
   * @param input Order update input data
   * @returns Promise<Order> The updated order
   */
  async updateOrder(input: OrderUpdateInput): Promise<Order> {
    const variables = { input };
    const result = await this.executeMutation('orderUpdate', variables);
    return new Order(result.data.orderUpdate);
  }
  /**
   Sets the status of an order
   * @param input Order status input data
   * @returns Promise<Order> The updated order
   */
  async setOrderStatus(input: OrderSetStatusInput): Promise<Order> {
    const variables = { input };
    const result = await this.executeMutation('orderSetStatus', variables);
    return new Order(result.data.orderSetStatus);
  }
  /**
   Updates an order address
   * @param input Order address update input data
   * @returns Promise<Order> The updated order
   */
  async updateOrderAddress(input: OrderAddressUpdateInput): Promise<Order> {
    const variables = { input };
    const result = await this.executeMutation('orderAddressUpdate', variables);
    return new Order(result.data.orderAddressUpdate);
  }
  /**
   Sends order confirmation email
   * @param orderId Order ID
   * @returns Promise<boolean> Success status
   */
  async sendOrderConfirmationEmail(orderId: number): Promise<boolean> {
    const variables = { orderId };
    const result = await this.executeMutation('orderSendConfirmationEmail', variables);
    return result.data.orderSendConfirmationEmail;
  }
  /**
   Fetches order PDF
   * @param orderId Order ID
   * @returns Promise<any> The PDF data
   */
  async getOrderPDF(orderId: number): Promise<any> {
    const variables = { orderId };
    const result = await this.executeQuery('orderGetPDF', variables);
    return result.data.orderGetPDF;
  }
  /**
   Fetches order address
   * @param orderId Order ID
   * @param addressType Address type
   * @returns Promise<Address> The address data
   */
  async getOrderAddress(orderId: number, addressType?: string): Promise<Address> {
    const variables = { orderId, addressType };
    const result = await this.executeQuery('orderAddress', variables);
    return new Address(result.data.orderAddress);
  }
  /**
   Fetches all addresses for an order
   * @param orderId Order ID
   * @returns Promise<Address[]> The addresses array
   */
  async getOrderAddresses(orderId: number): Promise<Address[]> {
    const variables = { orderId };
    const result = await this.executeQuery('orderAddresses', variables);
    return result.data.orderAddresses.map((address: any) => new Address(address));
  }
  /**
   Fetches addresses by order ID
   * @param orderId Order ID
   * @returns Promise<Address[]> The addresses array
   */
  async getAddressesByOrderId(orderId: number): Promise<Address[]> {
    const variables = { orderId };
    const result = await this.executeQuery('addressesByOrderId', variables);
    return result.data.addressesByOrderId.map((address: any) => new Address(address));
  }
  /**
   Creates a new order item
   * @param input Order item creation input data
   * @returns Promise<OrderItem> The created order item
   */
  async createOrderItem(input: OrderItemCreateInput): Promise<OrderItem> {
    const variables = { input };
    const result = await this.executeMutation('orderItemCreate', variables);
    return new OrderItem(result.data.orderItemCreate);
  }
  /**
   Updates an existing order item
   * @param input Order item update input data
   * @returns Promise<OrderItem> The updated order item
   */
  async updateOrderItem(input: OrderItemUpdateInput): Promise<OrderItem> {
    const variables = { input };
    const result = await this.executeMutation('orderItemUpdate', variables);
    return new OrderItem(result.data.orderItemUpdate);
  }
  /**
   Fetches a single orderlist by ID
   * @param id Orderlist ID to fetch
   * @returns Promise<Orderlist> The orderlist data
   */
  async getOrderlist(id: number): Promise<Orderlist> {
    const variables = { id };
    const result = await this.executeQuery('orderlist', variables);
    return new Orderlist(result.data.orderlist);
  }
  /**
   Fetches a list of orderlists with search criteria
   * @param input Orderlist search input parameters
   * @returns Promise<OrderlistsResponse> The orderlists response data
   */
  async getOrderlists(input?: OrderlistSearchInput): Promise<OrderlistsResponse> {
    const variables = { input };
    const result = await this.executeQuery('orderlists', variables);
    return new OrderlistsResponse(result.data.orderlists);
  }
  /**
   Creates a new orderlist
   * @param input Orderlist creation input data
   * @returns Promise<Orderlist> The created orderlist
   */
  async createOrderlist(input: OrderlistCreateInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistCreate', variables);
    return new Orderlist(result.data.orderlistCreate);
  }
  /**
   Updates an existing orderlist
   * @param input Orderlist update input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async updateOrderlist(input: OrderlistUpdateInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistUpdate', variables);
    return new Orderlist(result.data.orderlistUpdate);
  }
  /**
   Adds items to an orderlist
   * @param input Orderlist add items input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async addItemsToOrderlist(input: OrderlistItemsInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistAddItems', variables);
    return new Orderlist(result.data.orderlistAddItems);
  }
  /**
   Removes items from an orderlist
   * @param input Orderlist remove items input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async removeItemsFromOrderlist(input: OrderlistItemsInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistRemoveItems', variables);
    return new Orderlist(result.data.orderlistRemoveItems);
  }
  /**
   Assigns companies to an orderlist
   * @param input Orderlist assign companies input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async assignCompaniesToOrderlist(input: OrderlistCompaniesInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistAssignCompanies', variables);
    return new Orderlist(result.data.orderlistAssignCompanies);
  }
  /**
   Unassigns companies from an orderlist
   * @param input Orderlist unassign companies input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async unassignCompaniesFromOrderlist(input: OrderlistCompaniesInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistUnassignCompanies', variables);
    return new Orderlist(result.data.orderlistUnassignCompanies);
  }
  /**
   Assigns users to an orderlist
   * @param input Orderlist assign users input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async assignUsersToOrderlist(input: OrderlistUsersInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistAssignUsers', variables);
    return new Orderlist(result.data.orderlistAssignUsers);
  }
  /**
   Unassigns users from an orderlist
   * @param input Orderlist unassign users input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async unassignUsersFromOrderlist(input: OrderlistUsersInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistUnassignUsers', variables);
    return new Orderlist(result.data.orderlistUnassignUsers);
  }
  /**
   Fetches a single order status by ID
   * @param id Order status ID to fetch
   * @returns Promise<OrderStatus> The order status data
   */
  async getOrderStatus(id: number): Promise<OrderStatus> {
    const variables = { id };
    const result = await this.executeQuery('orderStatus', variables);
    return new OrderStatus(result.data.orderStatus);
  }
  /**
   Fetches a list of order statuses with search criteria
   * @param input Order status search input parameters
   * @returns Promise<OrderStatusesResponse> The order statuses response data
   */
  async getOrderStatuses(input?: OrderStatusesSearchInput): Promise<OrderStatusesResponse> {
    const variables = { input };
    const result = await this.executeQuery('orderStatuses', variables);
    return new OrderStatusesResponse(result.data.orderStatuses);
  }
  /**
   Creates a new order status
   * @param input Order status creation input data
   * @returns Promise<OrderStatus> The created order status
   */
  async createOrderStatus(input: CreateOrderStatusInput): Promise<OrderStatus> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusCreate', variables);
    return new OrderStatus(result.data.orderStatusCreate);
  }
  /**
   Updates an existing order status
   * @param input Order status update input data
   * @returns Promise<OrderStatus> The updated order status
   */
  async updateOrderStatus(input: UpdateOrderStatusInput): Promise<OrderStatus> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusUpdate', variables);
    return new OrderStatus(result.data.orderStatusUpdate);
  }
  /**
   Fetches a single order status set by ID
   * @param id Order status set ID to fetch
   * @returns Promise<OrderStatusSet> The order status set data
   */
  async getOrderStatusSet(id: number): Promise<OrderStatusSet> {
    const variables = { id };
    const result = await this.executeQuery('orderStatusSet', variables);
    return new OrderStatusSet(result.data.orderStatusSet);
  }
  /**
   Fetches a list of order status sets with search criteria
   * @param input Order status set search input parameters
   * @returns Promise<OrderStatusSetsResponse> The order status sets response data
   */
  async getOrderStatusSets(input?: OrderStatusSetsSearchInput): Promise<OrderStatusSetsResponse> {
    const variables = { input };
    const result = await this.executeQuery('orderStatusSets', variables);
    return new OrderStatusSetsResponse(result.data.orderStatusSets);
  }
  /**
   Creates a new order status set
   * @param input Order status set creation input data
   * @returns Promise<OrderStatusSet> The created order status set
   */
  async createOrderStatusSet(input: CreateOrderStatusSetInput): Promise<OrderStatusSet> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusSetCreate', variables);
    return new OrderStatusSet(result.data.orderStatusSetCreate);
  }
  /**
   Updates an existing order status set
   * @param input Order status set update input data
   * @returns Promise<OrderStatusSet> The updated order status set
   */
  async updateOrderStatusSet(input: UpdateOrderStatusSetInput): Promise<OrderStatusSet> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusSetUpdate', variables);
    return new OrderStatusSet(result.data.orderStatusSetUpdate);
  }
  /**
   Adds order statuses to an order status set
   * @param input Add order statuses input data
   * @returns Promise<OrderStatusSet> The updated order status set
   */
  async addOrderStatusesToOrderStatusSet(input: AddOrderStatusesToOrderStatusSetInput): Promise<OrderStatusSet> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusSetAddOrderStatuses', variables);
    return new OrderStatusSet(result.data.orderStatusSetAddOrderStatuses);
  }
  /**
   Removes order statuses from an order status set
   * @param input Remove order statuses input data
   * @returns Promise<OrderStatusSet> The updated order status set
   */
  async removeOrderStatusesFromOrderStatusSet(input: RemoveOrderStatusesFromOrderStatusSetInput): Promise<OrderStatusSet> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusSetRemoveOrderStatuses', variables);
    return new OrderStatusSet(result.data.orderStatusSetRemoveOrderStatuses);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}