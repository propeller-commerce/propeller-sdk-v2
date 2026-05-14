import { BaseService } from './BaseService';
import { PayMethod } from '../type/PayMethod';
import { PayMethodsResponse } from '../type/PayMethodsResponse';
import { PayMethodSearchInput } from '../type/PayMethodSearchInput';
import { PayMethodCreateInput } from '../type/PayMethodCreateInput';
import { PayMethodUpdateInput } from '../type/PayMethodUpdateInput';
/**
 Service for managing payment methods
 * @extends BaseService
 */
export class PayMethodService extends BaseService {
  /**
   Retrieves a specific payment method
   * @param id Payment method ID
   * @returns Promise<PayMethod> Payment method data
   */
  async getPayMethod(id: number): Promise<PayMethod> {
    const variables = { id };
    const result = await this.executeQuery('payMethod', variables);
    return result.data.payMethod as PayMethod;
  }
  /**
   Retrieves payment methods with search
   * @param input Search input parameters
   * @returns Promise<PayMethodsResponse> Payment methods response
   */
  async getPayMethods(input?: PayMethodSearchInput): Promise<PayMethodsResponse> {
    const variables = { input };
    const result = await this.executeQuery('payMethods', variables);
    return result.data.payMethods as PayMethodsResponse;
  }
  /**
   Creates a new payment method
   * @param input Payment method creation input
   * @returns Promise<PayMethod> The created payment method
   */
  async createPayMethod(input: PayMethodCreateInput): Promise<PayMethod> {
    const variables = { input };
    const result = await this.executeMutation('payMethodCreate', variables);
    return result.data.payMethodCreate as PayMethod;
  }
  /**
   Updates an existing payment method
   * @param input Payment method update input
   * @returns Promise<PayMethod> The updated payment method
   */
  async updatePayMethod(input: PayMethodUpdateInput): Promise<PayMethod> {
    const variables = { input };
    const result = await this.executeMutation('payMethodUpdate', variables);
    return result.data.payMethodUpdate as PayMethod;
  }
  /**
   Deletes a payment method
   * @param id PayMethod ID to delete
   * @returns Promise<boolean> Success status
   */
  async deletePayMethod(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('payMethodDelete', variables);
    return result.data.payMethodDelete;
  }
}