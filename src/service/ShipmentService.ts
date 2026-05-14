import { BaseService } from './BaseService';
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
/**
 Service for managing shipments and shipment items
 * @extends BaseService
 */
export class ShipmentService extends BaseService {
  /**
   Retrieves a specific shipment
   * @param id Shipment ID
   * @returns Promise<Shipment> Shipment data
   */
  async getShipment(id: number): Promise<Shipment> {
    const variables = { id };
    const result = await this.executeQuery('shipment', variables);
    return result.data.shipment as Shipment;
  }
  /**
   Retrieves shipments with search criteria
   * @param input Search input parameters
   * @returns Promise<ShipmentResponse> Shipments response
   */
  async getShipments(input?: ShipmentSearchInput): Promise<ShipmentResponse> {
    const variables = { input };
    const result = await this.executeQuery('shipments', variables);
    return result.data.shipments as ShipmentResponse;
  }
  /**
   Creates a new shipment
   * @param input Shipment creation input
   * @returns Promise<Shipment> The created shipment
   */
  async createShipment(input: ShipmentCreateInput): Promise<Shipment> {
    const variables = { input };
    const result = await this.executeMutation('shipmentCreate', variables);
    return result.data.shipmentCreate as Shipment;
  }
  /**
   Updates an existing shipment
   * @param input Shipment update input
   * @returns Promise<Shipment> The updated shipment
   */
  async updateShipment(input: ShipmentUpdateInput): Promise<Shipment> {
    const variables = { input };
    const result = await this.executeMutation('shipmentUpdate', variables);
    return result.data.shipmentUpdate as Shipment;
  }
  /**
   Deletes a shipment
   * @param id Shipment ID
   * @returns Promise<boolean> Success status
   */
  async deleteShipment(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('shipmentDelete', variables);
    return result.data.shipmentDelete;
  }
  /**
   Retrieves a specific shipment item
   * @param id Shipment item ID
   * @returns Promise<ShipmentItem> Shipment item data
   */
  async getShipmentItem(id: number): Promise<ShipmentItem> {
    const variables = { id };
    const result = await this.executeQuery('shipmentItem', variables);
    return result.data.shipmentItem as ShipmentItem;
  }
  /**
   Retrieves shipment items with search criteria
   * @param input Search input parameters
   * @returns Promise<ShipmentItemResponse> Shipment items response
   */
  async getShipmentItems(input?: ShipmentItemSearchInput): Promise<ShipmentItemResponse> {
    const variables = { input };
    const result = await this.executeQuery('shipmentItems', variables);
    return result.data.shipmentItems as ShipmentItemResponse;
  }
  /**
   Creates a new shipment item
   * @param input Shipment item creation input
   * @returns Promise<ShipmentItem> The created shipment item
   */
  async createShipmentItem(input: ShipmentItemCreateInput): Promise<ShipmentItem> {
    const variables = { input };
    const result = await this.executeMutation('shipmentItemCreate', variables);
    return result.data.shipmentItemCreate as ShipmentItem;
  }
  /**
   Updates an existing shipment item
   * @param input Shipment item update input
   * @returns Promise<ShipmentItem> The updated shipment item
   */
  async updateShipmentItem(input: ShipmentItemUpdateInput): Promise<ShipmentItem> {
    const variables = { input };
    const result = await this.executeMutation('shipmentItemUpdate', variables);
    return result.data.shipmentItemUpdate as ShipmentItem;
  }
  /**
   Deletes a shipment item
   * @param id Shipment item ID
   * @returns Promise<boolean> Success status
   */
  async deleteShipmentItem(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('shipmentItemDelete', variables);
    return result.data.shipmentItemDelete;
  }
}