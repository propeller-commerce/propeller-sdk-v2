import { BaseService } from './BaseService';
import { Payment } from '../type/Payment';
import { PaymentsResponse } from '../type/PaymentsResponse';
import { PaymentsSearchInput } from '../type/PaymentsSearchInput';
import { PaymentInput } from '../type/PaymentInput';
import { UpdatePaymentInput } from '../type/UpdatePaymentInput';
/**
 Service for managing payments
 * @extends BaseService
 */
export class PaymentService extends BaseService {
  /**
   Retrieves a specific payment
   * @param id Payment ID
   * @returns Promise<Payment> Payment data
   */
  async getPayment(id: number): Promise<Payment> {
    const variables = { id };
    const result = await this.executeQuery('payment', variables);
    return new Payment(result.data.payment);
  }
  /**
   Retrieves payments with search
   * @param input Search input parameters
   * @returns Promise<PaymentsResponse> Payments response
   */
  async getPayments(input?: PaymentsSearchInput): Promise<PaymentsResponse> {
    const variables = { input };
    const result = await this.executeQuery('payments', variables);
    return new PaymentsResponse(result.data.payments);
  }
  /**
   Creates a new payment
   * @param input Payment creation input
   * @returns Promise<Payment> The created payment
   */
  async createPayment(input: PaymentInput): Promise<Payment> {
    const variables = { input };
    const result = await this.executeMutation('paymentCreate', variables);
    return new Payment(result.data.paymentCreate);
  }
  /**
   Updates an existing payment
   * @param input Payment update input
   * @returns Promise<Payment> The updated payment
   */
  async updatePayment(input: UpdatePaymentInput): Promise<Payment> {
    const variables = { input };
    const result = await this.executeMutation('paymentUpdate', variables);
    return new Payment(result.data.paymentUpdate);
  }
  /**
   Deletes a payment
   * @param id Payment ID to delete
   * @returns Promise<boolean> Success status
   */
  async deletePayment(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('paymentDelete', variables);
    return result.data.paymentDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}