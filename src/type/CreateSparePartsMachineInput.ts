import { ExternalReferenceInput } from './ExternalReferenceInput';
import { LocalizedStringInput } from './LocalizedStringInput';
import { CreateSparePartInput } from './CreateSparePartInput';
/**
 Input object for CreateSparePartsMachineInput
 */
export interface CreateSparePartsMachineInput {
  /** External reference for the machine */
  externalReference: ExternalReferenceInput;
  /** Spare PartsMachine name */
  name: LocalizedStringInput[];
  /** Machine description */
  description?: LocalizedStringInput[];
  /** Nested SubMachines input */
  machines?: CreateSparePartsMachineInput[];
  /** Spare parts for this machine */
  parts?: CreateSparePartInput[];
  /** Machine slug */
  slug?: LocalizedStringInput[];
}