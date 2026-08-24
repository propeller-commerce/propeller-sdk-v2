import { BusinessHoursInput } from './BusinessHoursInput';
/**
 Input object for UpdateWarehouseInput
 */
export interface UpdateWarehouseInput {
  /** Warehouse name */
  name?: string;
  /** Warehouse description */
  description?: string;
  /** Warehouse notes */
  notes?: string;
  /** Warehouse isActive status */
  isActive?: boolean;
  /** Warehouse isStore status */
  isStore?: boolean;
  /** Warehouse isPickupLocation status */
  isPickupLocation?: boolean;
  /** Optional warehouse shopId! Default value will be internally inferred from the appropriate channel */
  shopId?: number;
  /** Warehouse business hours per week day
    Example:
        [{
          dayOfWeek: 0
          openingTime: "08:00"
          closingTime: "20:00"
          lunchBeakStartTime: "12:00"
          lunchBeakEndTime: "12:30"
        },
        {
          dayOfWeek: 1
          openingTime: "08:00"
          closingTime: "20:00"
          lunchBeakStartTime: "12:00"
          lunchBeakEndTime: "12:30"
        },
        {
          dayOfWeek: 2
          openingTime: "08:00"
          closingTime: "20:00"
          lunchBeakStartTime: "12:00"
          lunchBeakEndTime: "12:30"
        },
        {
          dayOfWeek: 3
          openingTime: "08:00"
          closingTime: "20:00"
          lunchBeakStartTime: "12:00"
          lunchBeakEndTime: "12:30"
        },
        {
          dayOfWeek: 4
          openingTime: "08:00"
          closingTime: "20:00"
          lunchBeakStartTime: "12:00"
          lunchBeakEndTime: "12:30"
        },
        {
          dayOfWeek: 5
          openingTime: "08:00"
          closingTime: "20:00"
          lunchBeakStartTime: "12:00"
          lunchBeakEndTime: "12:30"
        },
        {
          dayOfWeek: 6
          openingTime: "08:00"
          closingTime: "20:00"
          lunchBeakStartTime: "12:00"
          lunchBeakEndTime: "12:30"
        }] */
  businessHours?: BusinessHoursInput[];
}