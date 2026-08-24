/**
 Input object for OrderSetStatusInput
 */
export interface OrderSetStatusInput {
  /** The id of the order to set the status for */
  orderId: number;
  /** The status of the order */
  status?: string;
  /** The payment status of the order */
  payStatus?: string;
  /** Send the order confirmation email when the status is changed */
  sendOrderConfirmationEmail?: boolean;
  /** Add the order overview as attached PDF to the order confirmation email */
  addPDFAttachment?: boolean;
  /** Triggers the ORDER_SEND_CONFIRMATION event when the status is changed, which can be subscribed to via the Event Action Manager */
  triggerOrderSendConfirmEvent?: boolean;
  /** Delete the cart that created this order if the cart is still available */
  deleteCart?: boolean;
}