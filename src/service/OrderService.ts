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
import { OrderAddress, TriggerQuoteSendRequestEventInput } from '../type';
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
 * Order update mutation variables interface
 Variables for the order update mutation
 */
export interface OrderUpdateVariables {
  /** Order ID to update */
  orderId: number;
  /** Order update input data */
  order: OrderUpdateInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 * Order item creation mutation variables interface
 Variables for the order item creation mutation
 */
export interface OrderItemCreateVariables {
  /** Order ID to create order item for */
  orderId: number;
  /** Order item creation input data */
  orderItem: OrderItemCreateInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 * Order item update mutation variables interface
 Variables for the order item update mutation
 */
export interface OrderItemUpdateVariables {
  /** Order ID to update order item for */
  orderId: number;
  /** Order item update input data */
  orderItem: OrderItemUpdateInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 * Order address update mutation variables interface
 Variables for the order address update mutation
 */
export interface OrderAddressUpdateVariables {
  /** Id to identify address */
  id: number;
  /** Order ID to update order address for */
  orderId: number;
  /** Order address update input data */
  input: OrderAddressUpdateInput;
}
export interface OrderItemDeleteVariables {
  /** Order ID to delete order item for */
  orderId: number;
  /** Order item ID to delete */
  orderItemId: number;
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
    return result.data.orders as OrderResponse;
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
    return result.data.order as Order;
  }
  /**
   Creates a new order
   * @param input Order creation input data
   * @returns Promise<Order> The created order
   */
  async createOrder(input: any): Promise<Order> {
    const variables = { input };
    const result = await this.executeMutation('orderCreate', variables);
    return result.data.orderCreate as Order;
  }
  /**
   Updates an existing order
   * @param variables Variables for the order update mutation
   * - orderId: number - Order ID to update
   * - order: OrderUpdateInput - Order update input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<Order> The updated order
   */
  async updateOrder(variables: OrderUpdateVariables): Promise<Order> {
    const result = await this.executeMutation('orderUpdate', variables);
    return result.data.orderUpdate as Order;
  }
  /**
   Sets the status of an order
   * @param input Order status input data
   * @returns Promise<Order> The updated order
   */
  async setOrderStatus(input: OrderSetStatusInput): Promise<Order> {
    const variables = { input };
    const result = await this.executeMutation('orderSetStatus', variables);
    return result.data.orderSetStatus as Order;
  }
  /**
   Updates an order address
   * @param variables Variables for the order address update mutation
   * - id: number - Id to identify address
   * - orderId: number - Order ID to update order address for
   * - input: OrderAddressUpdateInput - Order address update input data
   * @returns Promise<OrderAddress> The updated order
   */
  async updateOrderAddress(variables: OrderAddressUpdateVariables): Promise<OrderAddress> {
    const result = await this.executeMutation('orderAddressUpdate', variables);
    return result.data.orderAddressUpdate as OrderAddress;
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
   Fetches quote PDF
   * @param quoteId Quote ID
   * @returns Promise<any> The PDF data
   */
  async getQuotePDF(quoteId: number): Promise<any> {
    const variables = { quoteId };
    const result = await this.executeQuery('quoteGetPDF', variables);
    return result.data.quoteGetPDF;
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
    return result.data.orderAddress as Address;
  }
  /**
   Fetches all addresses for an order
   * @param orderId Order ID
   * @returns Promise<Address[]> The addresses array
   */
  async getOrderAddresses(orderId: number): Promise<Address[]> {
    const variables = { orderId };
    const result = await this.executeQuery('orderAddresses', variables);
    return result.data.orderAddresses as Address[];
  }
  /**
   Fetches addresses by order ID
   * @param orderId Order ID
   * @returns Promise<Address[]> The addresses array
   */
  async getAddressesByOrderId(orderId: number): Promise<Address[]> {
    const variables = { orderId };
    const result = await this.executeQuery('addressesByOrderId', variables);
    return result.data.addressesByOrderId as Address[];
  }
  /**
   Creates a new order item
   * @param variables Variables for the order item creation mutation
   * - orderId: number - Order ID to create order item for
   * - orderItem: OrderItemCreateInput - Order item creation input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<OrderItem> The created order item
   */
  async createOrderItem(variables: OrderItemCreateVariables): Promise<OrderItem> {
    const result = await this.executeMutation('orderItemCreate', variables);
    return result.data.orderItemCreate as OrderItem;
  }
  /**
   Updates an existing order item
   * @param variables Variables for the order item update mutation
   * - orderId: number - Order ID to update order item for
   * - orderItem: OrderItemUpdateInput - Order item update input data
   * - language: string - Language for localized content
   * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
   * - imageVariantFilters: TransformationsInput - Image transformation filters
   * @returns Promise<OrderItem> The updated order item
   */
  async updateOrderItem(variables: OrderItemUpdateVariables): Promise<OrderItem> {
    const result = await this.executeMutation('orderItemUpdate', variables);
    return result.data.orderItemUpdate as OrderItem;
  }
  /**
   Deletes an order item
   * @param variables Variables for the order item deletion mutation
   * - orderId: number - Order ID to delete order item for
   * - orderItemId: number - Order item ID to delete
   * @returns Promise<boolean> True if order item was deleted successfully
   */
  async deleteOrderItem(variables: OrderItemDeleteVariables): Promise<boolean> {
    const result = await this.executeMutation('orderItemDelete', variables);
    return result.data.orderItemDelete;
  }
  /**
   Fetches a single orderlist by ID
   * @param id Orderlist ID to fetch
   * @returns Promise<Orderlist> The orderlist data
   */
  async getOrderlist(id: number): Promise<Orderlist> {
    const variables = { id };
    const result = await this.executeQuery('orderlist', variables);
    return result.data.orderlist as Orderlist;
  }
  /**
   Fetches a list of orderlists with search criteria
   * @param input Orderlist search input parameters
   * @returns Promise<OrderlistsResponse> The orderlists response data
   */
  async getOrderlists(input?: OrderlistSearchInput): Promise<OrderlistsResponse> {
    const variables = { input };
    const result = await this.executeQuery('orderlists', variables);
    return result.data.orderlists as OrderlistsResponse;
  }
  /**
   Creates a new orderlist
   * @param input Orderlist creation input data
   * @returns Promise<Orderlist> The created orderlist
   */
  async createOrderlist(input: OrderlistCreateInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistCreate', variables);
    return result.data.orderlistCreate as Orderlist;
  }
  /**
   Updates an existing orderlist
   * @param input Orderlist update input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async updateOrderlist(input: OrderlistUpdateInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistUpdate', variables);
    return result.data.orderlistUpdate as Orderlist;
  }
  /**
   Adds items to an orderlist
   * @param input Orderlist add items input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async addItemsToOrderlist(input: OrderlistItemsInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistAddItems', variables);
    return result.data.orderlistAddItems as Orderlist;
  }
  /**
   Removes items from an orderlist
   * @param input Orderlist remove items input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async removeItemsFromOrderlist(input: OrderlistItemsInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistRemoveItems', variables);
    return result.data.orderlistRemoveItems as Orderlist;
  }
  /**
   Assigns companies to an orderlist
   * @param input Orderlist assign companies input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async assignCompaniesToOrderlist(input: OrderlistCompaniesInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistAssignCompanies', variables);
    return result.data.orderlistAssignCompanies as Orderlist;
  }
  /**
   Unassigns companies from an orderlist
   * @param input Orderlist unassign companies input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async unassignCompaniesFromOrderlist(input: OrderlistCompaniesInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistUnassignCompanies', variables);
    return result.data.orderlistUnassignCompanies as Orderlist;
  }
  /**
   Assigns users to an orderlist
   * @param input Orderlist assign users input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async assignUsersToOrderlist(input: OrderlistUsersInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistAssignUsers', variables);
    return result.data.orderlistAssignUsers as Orderlist;
  }
  /**
   Unassigns users from an orderlist
   * @param input Orderlist unassign users input data
   * @returns Promise<Orderlist> The updated orderlist
   */
  async unassignUsersFromOrderlist(input: OrderlistUsersInput): Promise<Orderlist> {
    const variables = { input };
    const result = await this.executeMutation('orderlistUnassignUsers', variables);
    return result.data.orderlistUnassignUsers as Orderlist;
  }
  /**
   Fetches a single order status by ID
   * @param id Order status ID to fetch
   * @returns Promise<OrderStatus> The order status data
   */
  async getOrderStatus(id: number): Promise<OrderStatus> {
    const variables = { id };
    const result = await this.executeQuery('orderStatus', variables);
    return result.data.orderStatus as OrderStatus;
  }
  /**
   Fetches a list of order statuses with search criteria
   * @param input Order status search input parameters
   * @returns Promise<OrderStatusesResponse> The order statuses response data
   */
  async getOrderStatuses(input?: OrderStatusesSearchInput): Promise<OrderStatusesResponse> {
    const variables = { input };
    const result = await this.executeQuery('orderStatuses', variables);
    return result.data.orderStatuses as OrderStatusesResponse;
  }
  /**
   Creates a new order status
   * @param input Order status creation input data
   * @returns Promise<OrderStatus> The created order status
   */
  async createOrderStatus(input: CreateOrderStatusInput): Promise<OrderStatus> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusCreate', variables);
    return result.data.orderStatusCreate as OrderStatus;
  }
  /**
   Updates an existing order status
   * @param input Order status update input data
   * @returns Promise<OrderStatus> The updated order status
   */
  async updateOrderStatus(input: UpdateOrderStatusInput): Promise<OrderStatus> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusUpdate', variables);
    return result.data.orderStatusUpdate as OrderStatus;
  }
  /**
   Fetches a single order status set by ID
   * @param id Order status set ID to fetch
   * @returns Promise<OrderStatusSet> The order status set data
   */
  async getOrderStatusSet(id: number): Promise<OrderStatusSet> {
    const variables = { id };
    const result = await this.executeQuery('orderStatusSet', variables);
    return result.data.orderStatusSet as OrderStatusSet;
  }
  /**
   Fetches a list of order status sets with search criteria
   * @param input Order status set search input parameters
   * @returns Promise<OrderStatusSetsResponse> The order status sets response data
   */
  async getOrderStatusSets(input?: OrderStatusSetsSearchInput): Promise<OrderStatusSetsResponse> {
    const variables = { input };
    const result = await this.executeQuery('orderStatusSets', variables);
    return result.data.orderStatusSets as OrderStatusSetsResponse;
  }
  /**
   Creates a new order status set
   * @param input Order status set creation input data
   * @returns Promise<OrderStatusSet> The created order status set
   */
  async createOrderStatusSet(input: CreateOrderStatusSetInput): Promise<OrderStatusSet> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusSetCreate', variables);
    return result.data.orderStatusSetCreate as OrderStatusSet;
  }
  /**
   Updates an existing order status set
   * @param input Order status set update input data
   * @returns Promise<OrderStatusSet> The updated order status set
   */
  async updateOrderStatusSet(input: UpdateOrderStatusSetInput): Promise<OrderStatusSet> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusSetUpdate', variables);
    return result.data.orderStatusSetUpdate as OrderStatusSet;
  }
  /**
   Adds order statuses to an order status set
   * @param input Add order statuses input data
   * @returns Promise<OrderStatusSet> The updated order status set
   */
  async addOrderStatusesToOrderStatusSet(input: AddOrderStatusesToOrderStatusSetInput): Promise<OrderStatusSet> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusSetAddOrderStatuses', variables);
    return result.data.orderStatusSetAddOrderStatuses as OrderStatusSet;
  }
  /**
   Removes order statuses from an order status set
   * @param input Remove order statuses input data
   * @returns Promise<OrderStatusSet> The updated order status set
   */
  async removeOrderStatusesFromOrderStatusSet(input: RemoveOrderStatusesFromOrderStatusSetInput): Promise<OrderStatusSet> {
    const variables = { input };
    const result = await this.executeMutation('orderStatusSetRemoveOrderStatuses', variables);
    return result.data.orderStatusSetRemoveOrderStatuses as OrderStatusSet;
  }
  /**
   Triggers the send request event for a quote
   * @param input Quote send request event input data
   * @returns Promise<boolean> Success status
   */
  async triggerQuoteSendRequest(input: TriggerQuoteSendRequestEventInput): Promise<boolean> {
    const variables = { input };
    const result = await this.executeMutation('triggerQuoteSendRequest', variables);
    return result.data.triggerQuoteSendRequest;
  }
}