import { Shipment } from '../type/Shipment';
import { ShipmentResponse } from '../type/ShipmentResponse';
import { ShipmentSearchInput } from '../type/ShipmentSearchInput';
import { ShipmentCreateInput } from '../type/ShipmentCreateInput';
import { ShipmentUpdateInput } from '../type/ShipmentUpdateInput';
import { ShipmentItem } from '../type/ShipmentItem';
import { ShipmentItemResponse } from '../type/ShipmentItemResponse';
import { ShipmentItemSearchInput } from '../type/ShipmentItemSearchInput';
import { ShipmentItemCreateInput } from '../type/ShipmentItemCreateInput';
import { ShipmentItemUpdateInput } from '../type/ShipmentItemUpdateInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as shipmentDoc } from '../generated/operations/shipment';
import { document as shipmentsDoc } from '../generated/operations/shipments';
import { document as shipmentCreateDoc } from '../generated/operations/shipmentCreate';
import { document as shipmentUpdateDoc } from '../generated/operations/shipmentUpdate';
import { document as shipmentDeleteDoc } from '../generated/operations/shipmentDelete';
import { document as shipmentItemDoc } from '../generated/operations/shipmentItem';
import { document as shipmentItemsDoc } from '../generated/operations/shipmentItems';
import { document as shipmentItemCreateDoc } from '../generated/operations/shipmentItemCreate';
import { document as shipmentItemUpdateDoc } from '../generated/operations/shipmentItemUpdate';
import { document as shipmentItemDeleteDoc } from '../generated/operations/shipmentItemDelete';
/**
 Service for managing shipments and shipment items
 */
export function shipmentService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific shipment
       * @param id Shipment ID
       * @returns Promise<Shipment> Shipment data
       */
    async getShipment(id: number): Promise<Shipment> {
      const result = await runOperation(client, shipmentDoc, 'shipment', { id });
      return result.data.shipment as Shipment;
    },
    /**
       Retrieves shipments with search criteria
       * @param input Search input parameters
       * @returns Promise<ShipmentResponse> Shipments response
       */
    async getShipments(input?: ShipmentSearchInput): Promise<ShipmentResponse> {
      const result = await runOperation(client, shipmentsDoc, 'shipments', { input });
      return result.data.shipments as ShipmentResponse;
    },
    /**
       Creates a new shipment
       * @param input Shipment creation input
       * @returns Promise<Shipment> The created shipment
       */
    async createShipment(input: ShipmentCreateInput): Promise<Shipment> {
      const result = await runOperation(client, shipmentCreateDoc, 'shipmentCreate', { input });
      return result.data.shipmentCreate as Shipment;
    },
    /**
       Updates an existing shipment
       * @param input Shipment update input
       * @returns Promise<Shipment> The updated shipment
       */
    async updateShipment(input: ShipmentUpdateInput): Promise<Shipment> {
      const result = await runOperation(client, shipmentUpdateDoc, 'shipmentUpdate', { input });
      return result.data.shipmentUpdate as Shipment;
    },
    /**
       Deletes a shipment
       * @param id Shipment ID
       * @returns Promise<boolean> Success status
       */
    async deleteShipment(id: number): Promise<boolean> {
      const result = await runOperation(client, shipmentDeleteDoc, 'shipmentDelete', { id });
      return result.data.shipmentDelete;
    },
    /**
       Retrieves a specific shipment item
       * @param id Shipment item ID
       * @returns Promise<ShipmentItem> Shipment item data
       */
    async getShipmentItem(id: number): Promise<ShipmentItem> {
      const result = await runOperation(client, shipmentItemDoc, 'shipmentItem', { id });
      return result.data.shipmentItem as ShipmentItem;
    },
    /**
       Retrieves shipment items with search criteria
       * @param input Search input parameters
       * @returns Promise<ShipmentItemResponse> Shipment items response
       */
    async getShipmentItems(input?: ShipmentItemSearchInput): Promise<ShipmentItemResponse> {
      const result = await runOperation(client, shipmentItemsDoc, 'shipmentItems', { input });
      return result.data.shipmentItems as ShipmentItemResponse;
    },
    /**
       Creates a new shipment item
       * @param input Shipment item creation input
       * @returns Promise<ShipmentItem> The created shipment item
       */
    async createShipmentItem(input: ShipmentItemCreateInput): Promise<ShipmentItem> {
      const result = await runOperation(client, shipmentItemCreateDoc, 'shipmentItemCreate', { input });
      return result.data.shipmentItemCreate as ShipmentItem;
    },
    /**
       Updates an existing shipment item
       * @param input Shipment item update input
       * @returns Promise<ShipmentItem> The updated shipment item
       */
    async updateShipmentItem(input: ShipmentItemUpdateInput): Promise<ShipmentItem> {
      const result = await runOperation(client, shipmentItemUpdateDoc, 'shipmentItemUpdate', { input });
      return result.data.shipmentItemUpdate as ShipmentItem;
    },
    /**
       Deletes a shipment item
       * @param id Shipment item ID
       * @returns Promise<boolean> Success status
       */
    async deleteShipmentItem(id: number): Promise<boolean> {
      const result = await runOperation(client, shipmentItemDeleteDoc, 'shipmentItemDelete', { id });
      return result.data.shipmentItemDelete;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `shipmentService(client)`.
 */
export class ShipmentService {
  private readonly _svc: ReturnType<typeof shipmentService>;
  constructor(client: GraphQLClient) { this._svc = shipmentService(client); }
  /**
   * Retrieves a specific shipment
   * @param id Shipment ID
   */
  getShipment(id: number): Promise<Shipment> { return this._svc.getShipment(id); }
  /**
   * Retrieves shipments with search criteria
   * @param input Search input parameters
   */
  getShipments(input?: ShipmentSearchInput): Promise<ShipmentResponse> { return this._svc.getShipments(input); }
  /**
   * Creates a new shipment
   * @param input Shipment creation input
   */
  createShipment(input: ShipmentCreateInput): Promise<Shipment> { return this._svc.createShipment(input); }
  /**
   * Updates an existing shipment
   * @param input Shipment update input
   */
  updateShipment(input: ShipmentUpdateInput): Promise<Shipment> { return this._svc.updateShipment(input); }
  /**
   * Deletes a shipment
   * @param id Shipment ID
   */
  deleteShipment(id: number): Promise<boolean> { return this._svc.deleteShipment(id); }
  /**
   * Retrieves a specific shipment item
   * @param id Shipment item ID
   */
  getShipmentItem(id: number): Promise<ShipmentItem> { return this._svc.getShipmentItem(id); }
  /**
   * Retrieves shipment items with search criteria
   * @param input Search input parameters
   */
  getShipmentItems(input?: ShipmentItemSearchInput): Promise<ShipmentItemResponse> { return this._svc.getShipmentItems(input); }
  /**
   * Creates a new shipment item
   * @param input Shipment item creation input
   */
  createShipmentItem(input: ShipmentItemCreateInput): Promise<ShipmentItem> { return this._svc.createShipmentItem(input); }
  /**
   * Updates an existing shipment item
   * @param input Shipment item update input
   */
  updateShipmentItem(input: ShipmentItemUpdateInput): Promise<ShipmentItem> { return this._svc.updateShipmentItem(input); }
  /**
   * Deletes a shipment item
   * @param id Shipment item ID
   */
  deleteShipmentItem(id: number): Promise<boolean> { return this._svc.deleteShipmentItem(id); }
}
