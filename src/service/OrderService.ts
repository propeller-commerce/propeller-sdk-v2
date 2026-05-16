import { Base64File } from '../type/Base64File';
import { Order } from '../type/Order';
import { OrderResponse } from '../type/OrderResponse';
import { SendOrderConfirmResponseType } from '../type/SendOrderConfirmResponseType';
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
/**
 * Variables for `order item delete` — deletes an order item
 */
export interface OrderItemDeleteVariables {
  /** Order ID to delete order item for */
  orderId: number;
  /** Order item ID to delete */
  orderItemId: number;
}
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as ordersDoc } from '../generated/operations/orders';
import { document as orderDoc } from '../generated/operations/order';
import { document as orderCreateDoc } from '../generated/operations/orderCreate';
import { document as orderUpdateDoc } from '../generated/operations/orderUpdate';
import { document as orderSetStatusDoc } from '../generated/operations/orderSetStatus';
import { document as orderAddressUpdateDoc } from '../generated/operations/orderAddressUpdate';
import { document as orderSendConfirmationEmailDoc } from '../generated/operations/orderSendConfirmationEmail';
import { document as orderGetPDFDoc } from '../generated/operations/orderGetPDF';
import { document as quoteGetPDFDoc } from '../generated/operations/quoteGetPDF';
import { document as orderAddressDoc } from '../generated/operations/orderAddress';
import { document as orderAddressesDoc } from '../generated/operations/orderAddresses';
import { document as addressesByOrderIdDoc } from '../generated/operations/addressesByOrderId';
import { document as orderItemCreateDoc } from '../generated/operations/orderItemCreate';
import { document as orderItemUpdateDoc } from '../generated/operations/orderItemUpdate';
import { document as orderItemDeleteDoc } from '../generated/operations/orderItemDelete';
import { document as orderlistDoc } from '../generated/operations/orderlist';
import { document as orderlistsDoc } from '../generated/operations/orderlists';
import { document as orderlistCreateDoc } from '../generated/operations/orderlistCreate';
import { document as orderlistUpdateDoc } from '../generated/operations/orderlistUpdate';
import { document as orderlistAddItemsDoc } from '../generated/operations/orderlistAddItems';
import { document as orderlistRemoveItemsDoc } from '../generated/operations/orderlistRemoveItems';
import { document as orderlistAssignCompaniesDoc } from '../generated/operations/orderlistAssignCompanies';
import { document as orderlistUnassignCompaniesDoc } from '../generated/operations/orderlistUnassignCompanies';
import { document as orderlistAssignUsersDoc } from '../generated/operations/orderlistAssignUsers';
import { document as orderlistUnassignUsersDoc } from '../generated/operations/orderlistUnassignUsers';
import { document as orderStatusDoc } from '../generated/operations/orderStatus';
import { document as orderStatusesDoc } from '../generated/operations/orderStatuses';
import { document as orderStatusCreateDoc } from '../generated/operations/orderStatusCreate';
import { document as orderStatusUpdateDoc } from '../generated/operations/orderStatusUpdate';
import { document as orderStatusSetDoc } from '../generated/operations/orderStatusSet';
import { document as orderStatusSetsDoc } from '../generated/operations/orderStatusSets';
import { document as orderStatusSetCreateDoc } from '../generated/operations/orderStatusSetCreate';
import { document as orderStatusSetUpdateDoc } from '../generated/operations/orderStatusSetUpdate';
import { document as orderStatusSetAddOrderStatusesDoc } from '../generated/operations/orderStatusSetAddOrderStatuses';
import { document as orderStatusSetRemoveOrderStatusesDoc } from '../generated/operations/orderStatusSetRemoveOrderStatuses';
import { document as triggerQuoteSendRequestDoc } from '../generated/operations/triggerQuoteSendRequest';
/**
 Service class for Order-related GraphQL operations
 */
export function orderService(client: GraphQLClient) {
  return {
    /**
       Fetches a list of orders with search criteria
       * @param input Order search input parameters
       * @returns Promise<OrderResponse> The orders response data
       */
    async getOrders(input?: OrderSearchArguments): Promise<OrderResponse> {
      const result = await runOperation(client, ordersDoc, 'orders', { input });
      return result.data.orders as OrderResponse;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation(client, orderDoc, 'order', { ...variables, language });
      return result.data.order as Order;
    },
    /**
       Creates a new order
       * @param input Order creation input data
       * @returns Promise<Order> The created order
       */
    async createOrder(input: any): Promise<Order> {
      const result = await runOperation(client, orderCreateDoc, 'orderCreate', { input });
      return result.data.orderCreate as Order;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation(client, orderUpdateDoc, 'orderUpdate', { ...variables, language });
      return result.data.orderUpdate as Order;
    },
    /**
       Sets the status of an order
       * @param input Order status input data
       * @returns Promise<Order> The updated order
       */
    async setOrderStatus(input: OrderSetStatusInput): Promise<Order> {
      const result = await runOperation(client, orderSetStatusDoc, 'orderSetStatus', { input });
      return result.data.orderSetStatus as Order;
    },
    /**
       Updates an order address
       * @param variables Variables for the order address update mutation
       * - id: number - Id to identify address
       * - orderId: number - Order ID to update order address for
       * - input: OrderAddressUpdateInput - Order address update input data
       * @returns Promise<OrderAddress> The updated order
       */
    async updateOrderAddress(variables: OrderAddressUpdateVariables): Promise<OrderAddress> {
      const result = await runOperation(client, orderAddressUpdateDoc, 'orderAddressUpdate', variables);
      return result.data.orderAddressUpdate as OrderAddress;
    },
    /**
       Sends order confirmation email
       * @param orderId Order ID
       * @returns Promise<boolean> Success status
       */
    async sendOrderConfirmationEmail(orderId: number): Promise<SendOrderConfirmResponseType> {
      const result = await runOperation(client, orderSendConfirmationEmailDoc, 'orderSendConfirmationEmail', { orderId });
      return result.data.orderSendConfirmationEmail as SendOrderConfirmResponseType;
    },
    /**
       Fetches order PDF
       * @param orderId Order ID
       * @returns Promise<any> The PDF data
       */
    async getOrderPDF(orderId: number): Promise<Base64File> {
      const result = await runOperation(client, orderGetPDFDoc, 'orderGetPDF', { orderId });
      return result.data.orderGetPDF as Base64File;
    },
    /**
       Fetches quote PDF
       * @param quoteId Quote ID
       * @returns Promise<any> The PDF data
       */
    async getQuotePDF(quoteId: number): Promise<Base64File> {
      const result = await runOperation(client, quoteGetPDFDoc, 'quoteGetPDF', { quoteId });
      return result.data.quoteGetPDF as Base64File;
    },
    /**
       Fetches order address
       * @param orderId Order ID
       * @param addressType Address type
       * @returns Promise<Address> The address data
       */
    async getOrderAddress(orderId: number, addressType?: string): Promise<OrderAddress> {
      const result = await runOperation(client, orderAddressDoc, 'orderAddress', { orderId, addressType });
      return result.data.orderAddress as OrderAddress;
    },
    /**
       Fetches all addresses for an order
       * @param orderId Order ID
       * @returns Promise<Address[]> The addresses array
       */
    async getOrderAddresses(orderId: number): Promise<OrderAddress[]> {
      const result = await runOperation(client, orderAddressesDoc, 'orderAddresses', { orderId });
      return result.data.orderAddresses as OrderAddress[];
    },
    /**
       Fetches addresses by order ID
       * @deprecated The upstream `addressesByOrderId` query is deprecated. Use `getOrderAddresses` instead.
       * @param orderId Order ID
       * @returns Promise<Address[]> The addresses array
       */
    async getAddressesByOrderId(orderId: number): Promise<Address[]> {
      const result = await runOperation(client, addressesByOrderIdDoc, 'addressesByOrderId', { orderId });
      return result.data.addressesByOrderId as Address[];
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation(client, orderItemCreateDoc, 'orderItemCreate', { ...variables, language });
      return result.data.orderItemCreate as OrderItem;
    },
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
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation(client, orderItemUpdateDoc, 'orderItemUpdate', { ...variables, language });
      return result.data.orderItemUpdate as OrderItem;
    },
    /**
       Deletes an order item
       * @param variables Variables for the order item deletion mutation
       * - orderId: number - Order ID to delete order item for
       * - orderItemId: number - Order item ID to delete
       * @returns Promise<boolean> True if order item was deleted successfully
       */
    async deleteOrderItem(variables: OrderItemDeleteVariables): Promise<boolean> {
      const result = await runOperation(client, orderItemDeleteDoc, 'orderItemDelete', variables);
      return result.data.orderItemDelete;
    },
    /**
       Fetches a single orderlist by ID
       * @param id Orderlist ID to fetch
       * @returns Promise<Orderlist> The orderlist data
       */
    async getOrderlist(id: number): Promise<Orderlist> {
      const result = await runOperation(client, orderlistDoc, 'orderlist', { id });
      return result.data.orderlist as Orderlist;
    },
    /**
       Fetches a list of orderlists with search criteria
       * @param input Orderlist search input parameters
       * @returns Promise<OrderlistsResponse> The orderlists response data
       */
    async getOrderlists(input?: OrderlistSearchInput): Promise<OrderlistsResponse> {
      const result = await runOperation(client, orderlistsDoc, 'orderlists', { input });
      return result.data.orderlists as OrderlistsResponse;
    },
    /**
       Creates a new orderlist
       * @param input Orderlist creation input data
       * @returns Promise<Orderlist> The created orderlist
       */
    async createOrderlist(input: OrderlistCreateInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistCreateDoc, 'orderlistCreate', { input });
      return result.data.orderlistCreate as Orderlist;
    },
    /**
       Updates an existing orderlist
       * @param input Orderlist update input data
       * @returns Promise<Orderlist> The updated orderlist
       */
    async updateOrderlist(input: OrderlistUpdateInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistUpdateDoc, 'orderlistUpdate', { input });
      return result.data.orderlistUpdate as Orderlist;
    },
    /**
       Adds items to an orderlist
       * @param input Orderlist add items input data
       * @returns Promise<Orderlist> The updated orderlist
       */
    async addItemsToOrderlist(input: OrderlistItemsInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistAddItemsDoc, 'orderlistAddItems', { input });
      return result.data.orderlistAddItems as Orderlist;
    },
    /**
       Removes items from an orderlist
       * @param input Orderlist remove items input data
       * @returns Promise<Orderlist> The updated orderlist
       */
    async removeItemsFromOrderlist(input: OrderlistItemsInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistRemoveItemsDoc, 'orderlistRemoveItems', { input });
      return result.data.orderlistRemoveItems as Orderlist;
    },
    /**
       Assigns companies to an orderlist
       * @param input Orderlist assign companies input data
       * @returns Promise<Orderlist> The updated orderlist
       */
    async assignCompaniesToOrderlist(input: OrderlistCompaniesInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistAssignCompaniesDoc, 'orderlistAssignCompanies', { input });
      return result.data.orderlistAssignCompanies as Orderlist;
    },
    /**
       Unassigns companies from an orderlist
       * @param input Orderlist unassign companies input data
       * @returns Promise<Orderlist> The updated orderlist
       */
    async unassignCompaniesFromOrderlist(input: OrderlistCompaniesInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistUnassignCompaniesDoc, 'orderlistUnassignCompanies', { input });
      return result.data.orderlistUnassignCompanies as Orderlist;
    },
    /**
       Assigns users to an orderlist
       * @param input Orderlist assign users input data
       * @returns Promise<Orderlist> The updated orderlist
       */
    async assignUsersToOrderlist(input: OrderlistUsersInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistAssignUsersDoc, 'orderlistAssignUsers', { input });
      return result.data.orderlistAssignUsers as Orderlist;
    },
    /**
       Unassigns users from an orderlist
       * @param input Orderlist unassign users input data
       * @returns Promise<Orderlist> The updated orderlist
       */
    async unassignUsersFromOrderlist(input: OrderlistUsersInput): Promise<Orderlist> {
      const result = await runOperation(client, orderlistUnassignUsersDoc, 'orderlistUnassignUsers', { input });
      return result.data.orderlistUnassignUsers as Orderlist;
    },
    /**
       Fetches a single order status by ID
       * @param id Order status ID to fetch
       * @returns Promise<OrderStatus> The order status data
       */
    async getOrderStatus(id: number): Promise<OrderStatus> {
      const result = await runOperation(client, orderStatusDoc, 'orderStatus', { id });
      return result.data.orderStatus as OrderStatus;
    },
    /**
       Fetches a list of order statuses with search criteria
       * @param input Order status search input parameters
       * @returns Promise<OrderStatusesResponse> The order statuses response data
       */
    async getOrderStatuses(input?: OrderStatusesSearchInput): Promise<OrderStatusesResponse> {
      const result = await runOperation(client, orderStatusesDoc, 'orderStatuses', { input });
      return result.data.orderStatuses as OrderStatusesResponse;
    },
    /**
       Creates a new order status
       * @param input Order status creation input data
       * @returns Promise<OrderStatus> The created order status
       */
    async createOrderStatus(input: CreateOrderStatusInput): Promise<OrderStatus> {
      const result = await runOperation(client, orderStatusCreateDoc, 'orderStatusCreate', { input });
      return result.data.orderStatusCreate as OrderStatus;
    },
    /**
       Updates an existing order status
       * @param input Order status update input data
       * @returns Promise<OrderStatus> The updated order status
       */
    async updateOrderStatus(input: UpdateOrderStatusInput): Promise<OrderStatus> {
      const result = await runOperation(client, orderStatusUpdateDoc, 'orderStatusUpdate', { input });
      return result.data.orderStatusUpdate as OrderStatus;
    },
    /**
       Fetches a single order status set by ID
       * @param id Order status set ID to fetch
       * @returns Promise<OrderStatusSet> The order status set data
       */
    async getOrderStatusSet(id: number): Promise<OrderStatusSet> {
      const result = await runOperation(client, orderStatusSetDoc, 'orderStatusSet', { id });
      return result.data.orderStatusSet as OrderStatusSet;
    },
    /**
       Fetches a list of order status sets with search criteria
       * @param input Order status set search input parameters
       * @returns Promise<OrderStatusSetsResponse> The order status sets response data
       */
    async getOrderStatusSets(input?: OrderStatusSetsSearchInput): Promise<OrderStatusSetsResponse> {
      const result = await runOperation(client, orderStatusSetsDoc, 'orderStatusSets', { input });
      return result.data.orderStatusSets as OrderStatusSetsResponse;
    },
    /**
       Creates a new order status set
       * @param input Order status set creation input data
       * @returns Promise<OrderStatusSet> The created order status set
       */
    async createOrderStatusSet(input: CreateOrderStatusSetInput): Promise<OrderStatusSet> {
      const result = await runOperation(client, orderStatusSetCreateDoc, 'orderStatusSetCreate', { input });
      return result.data.orderStatusSetCreate as OrderStatusSet;
    },
    /**
       Updates an existing order status set
       * @param input Order status set update input data
       * @returns Promise<OrderStatusSet> The updated order status set
       */
    async updateOrderStatusSet(input: UpdateOrderStatusSetInput): Promise<OrderStatusSet> {
      const result = await runOperation(client, orderStatusSetUpdateDoc, 'orderStatusSetUpdate', { input });
      return result.data.orderStatusSetUpdate as OrderStatusSet;
    },
    /**
       Adds order statuses to an order status set
       * @param input Add order statuses input data
       * @returns Promise<OrderStatusSet> The updated order status set
       */
    async addOrderStatusesToOrderStatusSet(input: AddOrderStatusesToOrderStatusSetInput): Promise<OrderStatusSet> {
      const result = await runOperation(client, orderStatusSetAddOrderStatusesDoc, 'orderStatusSetAddOrderStatuses', { input });
      return result.data.orderStatusSetAddOrderStatuses as OrderStatusSet;
    },
    /**
       Removes order statuses from an order status set
       * @param input Remove order statuses input data
       * @returns Promise<OrderStatusSet> The updated order status set
       */
    async removeOrderStatusesFromOrderStatusSet(input: RemoveOrderStatusesFromOrderStatusSetInput): Promise<OrderStatusSet> {
      const result = await runOperation(client, orderStatusSetRemoveOrderStatusesDoc, 'orderStatusSetRemoveOrderStatuses', { input });
      return result.data.orderStatusSetRemoveOrderStatuses as OrderStatusSet;
    },
    /**
       Triggers the send request event for a quote
       * @param input Quote send request event input data
       * @returns Promise<boolean> Success status
       */
    async triggerQuoteSendRequest(input: TriggerQuoteSendRequestEventInput): Promise<boolean> {
      const result = await runOperation(client, triggerQuoteSendRequestDoc, 'triggerQuoteSendRequest', { input });
      return result.data.triggerQuoteSendRequest;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `orderService(client)`.
 */
export class OrderService {
  private readonly _svc: ReturnType<typeof orderService>;
  constructor(client: GraphQLClient) { this._svc = orderService(client); }
  /**
   * Fetches a list of orders with search criteria
   * @param input Order search input parameters
   */
  getOrders(input?: OrderSearchArguments): Promise<OrderResponse> { return this._svc.getOrders(input); }
  /**
   * Fetches a single order by ID or UUID
   * @param variables Variables for the order query
   * @param orderId Order ID to fetch
   * @param orderUUID Order UUID unique identifier
   * @param language Language for localized content
   * @param imageSearchFilters Image search filters
   * @param imageVariantFilters Image transformation filters
   */
  getOrder(variables: OrderQueryVariables): Promise<Order> { return this._svc.getOrder(variables); }
  /**
   * Creates a new order
   * @param input Order creation input data
   */
  createOrder(input: any): Promise<Order> { return this._svc.createOrder(input); }
  /**
   * Updates an existing order
   * @param variables Variables for the order update mutation
   * @param orderId Order ID to update
   * @param order Order update input data
   * @param language Language for localized content
   * @param imageSearchFilters Image search filters
   * @param imageVariantFilters Image transformation filters
   */
  updateOrder(variables: OrderUpdateVariables): Promise<Order> { return this._svc.updateOrder(variables); }
  /**
   * Sets the status of an order
   * @param input Order status input data
   */
  setOrderStatus(input: OrderSetStatusInput): Promise<Order> { return this._svc.setOrderStatus(input); }
  /**
   * Updates an order address
   * @param variables Variables for the order address update mutation
   * @param id Id to identify address
   * @param orderId Order ID to update order address for
   * @param input Order address update input data
   */
  updateOrderAddress(variables: OrderAddressUpdateVariables): Promise<OrderAddress> { return this._svc.updateOrderAddress(variables); }
  /**
   * Sends order confirmation email
   * @param orderId Order ID
   */
  sendOrderConfirmationEmail(orderId: number): Promise<SendOrderConfirmResponseType> { return this._svc.sendOrderConfirmationEmail(orderId); }
  /**
   * Fetches order PDF
   * @param orderId Order ID
   */
  getOrderPDF(orderId: number): Promise<Base64File> { return this._svc.getOrderPDF(orderId); }
  /**
   * Fetches quote PDF
   * @param quoteId Quote ID
   */
  getQuotePDF(quoteId: number): Promise<Base64File> { return this._svc.getQuotePDF(quoteId); }
  /**
   * Fetches order address
   * @param orderId Order ID
   * @param addressType Address type
   */
  getOrderAddress(orderId: number, addressType?: string): Promise<OrderAddress> { return this._svc.getOrderAddress(orderId, addressType); }
  /**
   * Fetches all addresses for an order
   * @param orderId Order ID
   */
  getOrderAddresses(orderId: number): Promise<OrderAddress[]> { return this._svc.getOrderAddresses(orderId); }
  /**
   * Fetches addresses by order ID
   * @param orderId Order ID
   */
  getAddressesByOrderId(orderId: number): Promise<Address[]> { return this._svc.getAddressesByOrderId(orderId); }
  /**
   * Creates a new order item
   * @param variables Variables for the order item creation mutation
   * @param orderId Order ID to create order item for
   * @param orderItem Order item creation input data
   * @param language Language for localized content
   * @param imageSearchFilters Image search filters
   * @param imageVariantFilters Image transformation filters
   */
  createOrderItem(variables: OrderItemCreateVariables): Promise<OrderItem> { return this._svc.createOrderItem(variables); }
  /**
   * Updates an existing order item
   * @param variables Variables for the order item update mutation
   * @param orderId Order ID to update order item for
   * @param orderItem Order item update input data
   * @param language Language for localized content
   * @param imageSearchFilters Image search filters
   * @param imageVariantFilters Image transformation filters
   */
  updateOrderItem(variables: OrderItemUpdateVariables): Promise<OrderItem> { return this._svc.updateOrderItem(variables); }
  /**
   * Deletes an order item
   * @param variables Variables for the order item deletion mutation
   * @param orderId Order ID to delete order item for
   * @param orderItemId Order item ID to delete
   */
  deleteOrderItem(variables: OrderItemDeleteVariables): Promise<boolean> { return this._svc.deleteOrderItem(variables); }
  /**
   * Fetches a single orderlist by ID
   * @param id Orderlist ID to fetch
   */
  getOrderlist(id: number): Promise<Orderlist> { return this._svc.getOrderlist(id); }
  /**
   * Fetches a list of orderlists with search criteria
   * @param input Orderlist search input parameters
   */
  getOrderlists(input?: OrderlistSearchInput): Promise<OrderlistsResponse> { return this._svc.getOrderlists(input); }
  /**
   * Creates a new orderlist
   * @param input Orderlist creation input data
   */
  createOrderlist(input: OrderlistCreateInput): Promise<Orderlist> { return this._svc.createOrderlist(input); }
  /**
   * Updates an existing orderlist
   * @param input Orderlist update input data
   */
  updateOrderlist(input: OrderlistUpdateInput): Promise<Orderlist> { return this._svc.updateOrderlist(input); }
  /**
   * Adds items to an orderlist
   * @param input Orderlist add items input data
   */
  addItemsToOrderlist(input: OrderlistItemsInput): Promise<Orderlist> { return this._svc.addItemsToOrderlist(input); }
  /**
   * Removes items from an orderlist
   * @param input Orderlist remove items input data
   */
  removeItemsFromOrderlist(input: OrderlistItemsInput): Promise<Orderlist> { return this._svc.removeItemsFromOrderlist(input); }
  /**
   * Assigns companies to an orderlist
   * @param input Orderlist assign companies input data
   */
  assignCompaniesToOrderlist(input: OrderlistCompaniesInput): Promise<Orderlist> { return this._svc.assignCompaniesToOrderlist(input); }
  /**
   * Unassigns companies from an orderlist
   * @param input Orderlist unassign companies input data
   */
  unassignCompaniesFromOrderlist(input: OrderlistCompaniesInput): Promise<Orderlist> { return this._svc.unassignCompaniesFromOrderlist(input); }
  /**
   * Assigns users to an orderlist
   * @param input Orderlist assign users input data
   */
  assignUsersToOrderlist(input: OrderlistUsersInput): Promise<Orderlist> { return this._svc.assignUsersToOrderlist(input); }
  /**
   * Unassigns users from an orderlist
   * @param input Orderlist unassign users input data
   */
  unassignUsersFromOrderlist(input: OrderlistUsersInput): Promise<Orderlist> { return this._svc.unassignUsersFromOrderlist(input); }
  /**
   * Fetches a single order status by ID
   * @param id Order status ID to fetch
   */
  getOrderStatus(id: number): Promise<OrderStatus> { return this._svc.getOrderStatus(id); }
  /**
   * Fetches a list of order statuses with search criteria
   * @param input Order status search input parameters
   */
  getOrderStatuses(input?: OrderStatusesSearchInput): Promise<OrderStatusesResponse> { return this._svc.getOrderStatuses(input); }
  /**
   * Creates a new order status
   * @param input Order status creation input data
   */
  createOrderStatus(input: CreateOrderStatusInput): Promise<OrderStatus> { return this._svc.createOrderStatus(input); }
  /**
   * Updates an existing order status
   * @param input Order status update input data
   */
  updateOrderStatus(input: UpdateOrderStatusInput): Promise<OrderStatus> { return this._svc.updateOrderStatus(input); }
  /**
   * Fetches a single order status set by ID
   * @param id Order status set ID to fetch
   */
  getOrderStatusSet(id: number): Promise<OrderStatusSet> { return this._svc.getOrderStatusSet(id); }
  /**
   * Fetches a list of order status sets with search criteria
   * @param input Order status set search input parameters
   */
  getOrderStatusSets(input?: OrderStatusSetsSearchInput): Promise<OrderStatusSetsResponse> { return this._svc.getOrderStatusSets(input); }
  /**
   * Creates a new order status set
   * @param input Order status set creation input data
   */
  createOrderStatusSet(input: CreateOrderStatusSetInput): Promise<OrderStatusSet> { return this._svc.createOrderStatusSet(input); }
  /**
   * Updates an existing order status set
   * @param input Order status set update input data
   */
  updateOrderStatusSet(input: UpdateOrderStatusSetInput): Promise<OrderStatusSet> { return this._svc.updateOrderStatusSet(input); }
  /**
   * Adds order statuses to an order status set
   * @param input Add order statuses input data
   */
  addOrderStatusesToOrderStatusSet(input: AddOrderStatusesToOrderStatusSetInput): Promise<OrderStatusSet> { return this._svc.addOrderStatusesToOrderStatusSet(input); }
  /**
   * Removes order statuses from an order status set
   * @param input Remove order statuses input data
   */
  removeOrderStatusesFromOrderStatusSet(input: RemoveOrderStatusesFromOrderStatusSetInput): Promise<OrderStatusSet> { return this._svc.removeOrderStatusesFromOrderStatusSet(input); }
  /**
   * Triggers the send request event for a quote
   * @param input Quote send request event input data
   */
  triggerQuoteSendRequest(input: TriggerQuoteSendRequestEventInput): Promise<boolean> { return this._svc.triggerQuoteSendRequest(input); }
}
