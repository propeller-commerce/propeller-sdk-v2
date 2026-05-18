import { PayMethod } from '../type/PayMethod';
import { PayMethodsResponse } from '../type/PayMethodsResponse';
import { PayMethodSearchInput } from '../type/PayMethodSearchInput';
import { PayMethodCreateInput } from '../type/PayMethodCreateInput';
import { PayMethodUpdateInput } from '../type/PayMethodUpdateInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as payMethodDoc } from '../generated/operations/payMethod';
import { document as payMethodsDoc } from '../generated/operations/payMethods';
import { document as payMethodCreateDoc } from '../generated/operations/payMethodCreate';
import { document as payMethodUpdateDoc } from '../generated/operations/payMethodUpdate';
import { document as payMethodDeleteDoc } from '../generated/operations/payMethodDelete';
import type { PayMethodUpdateVariables } from '../generated/operationVariables';
/**
 Service for managing payment methods
 */
export function payMethodService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific payment method
       * @param id Payment method ID
       * @returns Promise<PayMethod> Payment method data
       */
    async getPayMethod(id: number): Promise<PayMethod> {
      const result = await runOperation<{ payMethod: PayMethod }>(client, payMethodDoc, 'payMethod', { id });
      return result.data.payMethod as PayMethod;
    },
    /**
       Retrieves payment methods with search
       * @param input Search input parameters
       * @returns Promise<PayMethodsResponse> Payment methods response
       */
    async getPayMethods(input?: PayMethodSearchInput): Promise<PayMethodsResponse> {
      const result = await runOperation<{ payMethods: PayMethodsResponse }>(client, payMethodsDoc, 'payMethods', { input });
      return result.data.payMethods as PayMethodsResponse;
    },
    /**
       Creates a new payment method
       * @param input Payment method creation input
       * @returns Promise<PayMethod> The created payment method
       */
    async createPayMethod(input: PayMethodCreateInput): Promise<PayMethod> {
      const result = await runOperation<{ payMethodCreate: PayMethod }>(client, payMethodCreateDoc, 'payMethodCreate', { input });
      return result.data.payMethodCreate as PayMethod;
    },
    /**
       Updates an existing payment method
       * @param variables Payment method update input
       * @returns Promise<PayMethod> The updated payment method
       */
    async updatePayMethod(variables: PayMethodUpdateVariables): Promise<PayMethod> {
      const result = await runOperation<{ payMethodUpdate: PayMethod }>(client, payMethodUpdateDoc, 'payMethodUpdate', variables);
      return result.data.payMethodUpdate as PayMethod;
    },
    /**
       Deletes a payment method
       * @param id PayMethod ID to delete
       * @returns Promise<boolean> Success status
       */
    async deletePayMethod(id: number): Promise<boolean> {
      const result = await runOperation<{ payMethodDelete: boolean }>(client, payMethodDeleteDoc, 'payMethodDelete', { id });
      return result.data.payMethodDelete;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `payMethodService(client)`.
 */
export class PayMethodService {
  private readonly _svc: ReturnType<typeof payMethodService>;
  constructor(client: GraphQLClient) { this._svc = payMethodService(client); }
  /**
   * Retrieves a specific payment method
   * @param id Payment method ID
   */
  getPayMethod(id: number): Promise<PayMethod> { return this._svc.getPayMethod(id); }
  /**
   * Retrieves payment methods with search
   * @param input Search input parameters
   */
  getPayMethods(input?: PayMethodSearchInput): Promise<PayMethodsResponse> { return this._svc.getPayMethods(input); }
  /**
   * Creates a new payment method
   * @param input Payment method creation input
   */
  createPayMethod(input: PayMethodCreateInput): Promise<PayMethod> { return this._svc.createPayMethod(input); }
  /**
   * Updates an existing payment method
   * @param variables Payment method update input
   */
  updatePayMethod(variables: PayMethodUpdateVariables): Promise<PayMethod> { return this._svc.updatePayMethod(variables); }
  /**
   * Deletes a payment method
   * @param id PayMethod ID to delete
   */
  deletePayMethod(id: number): Promise<boolean> { return this._svc.deletePayMethod(id); }
}
