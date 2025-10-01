/**
 Input object for TriggerCustomEventInput
 */
export interface TriggerCustomEventInput {
  /** The code to select EventActionConfigs to execute by. */
  code: string;
  /** The payload to be sent with the custom event */
  payload: any;
}