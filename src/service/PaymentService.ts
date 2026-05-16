import { Payment } from '../type/Payment';
import { PaymentsResponse } from '../type/PaymentsResponse';
import { PaymentsSearchInput } from '../type/PaymentsSearchInput';
import { UpdatePaymentInput } from '../type/UpdatePaymentInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as paymentDoc } from '../generated/operations/payment';
import { document as paymentsDoc } from '../generated/operations/payments';
import { document as paymentCreateDoc } from '../generated/operations/paymentCreate';
import { document as paymentUpdateDoc } from '../generated/operations/paymentUpdate';
import { document as paymentDeleteDoc } from '../generated/operations/paymentDelete';
/**
 Service for managing payments
 */
export function paymentService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific payment
       * @param id Payment ID
       * @returns Promise<Payment> Payment data
       */
    async getPayment(id: number): Promise<Payment> {
      const result = await runOperation(client, paymentDoc, 'payment', { id });
      return result.data.payment as Payment;
    },
    /**
       Retrieves payments with search
       * @param input Search input parameters
       * @returns Promise<PaymentsResponse> Payments response
       */
    async getPayments(input?: PaymentsSearchInput): Promise<PaymentsResponse> {
      const result = await runOperation(client, paymentsDoc, 'payments', { input });
      return result.data.payments as PaymentsResponse;
    },
    /**
       Creates a new payment
       * @param input Payment creation input
       * @returns Promise<Payment> The created payment
       */
    async createPayment(input: any): Promise<Payment> {
      const result = await runOperation(client, paymentCreateDoc, 'paymentCreate', { input });
      return result.data.paymentCreate as Payment;
    },
    /**
       Updates an existing payment
       * @param input Payment update input
       * @returns Promise<Payment> The updated payment
       */
    async updatePayment(input: UpdatePaymentInput): Promise<Payment> {
      const result = await runOperation(client, paymentUpdateDoc, 'paymentUpdate', { input });
      return result.data.paymentUpdate as Payment;
    },
    /**
       Deletes a payment
       * @param id Payment ID to delete
       * @returns Promise<boolean> Success status
       */
    async deletePayment(id: number): Promise<Payment> {
      const result = await runOperation(client, paymentDeleteDoc, 'paymentDelete', { id });
      return result.data.paymentDelete as Payment;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `paymentService(client)`.
 */
export class PaymentService {
  private readonly _svc: ReturnType<typeof paymentService>;
  constructor(client: GraphQLClient) { this._svc = paymentService(client); }
  /**
   * Retrieves a specific payment
   * @param id Payment ID
   */
  getPayment(id: number): Promise<Payment> { return this._svc.getPayment(id); }
  /**
   * Retrieves payments with search
   * @param input Search input parameters
   */
  getPayments(input?: PaymentsSearchInput): Promise<PaymentsResponse> { return this._svc.getPayments(input); }
  /**
   * Creates a new payment
   * @param input Payment creation input
   */
  createPayment(input: any): Promise<Payment> { return this._svc.createPayment(input); }
  /**
   * Updates an existing payment
   * @param input Payment update input
   */
  updatePayment(input: UpdatePaymentInput): Promise<Payment> { return this._svc.updatePayment(input); }
  /**
   * Deletes a payment
   * @param id Payment ID to delete
   */
  deletePayment(id: number): Promise<Payment> { return this._svc.deletePayment(id); }
}
