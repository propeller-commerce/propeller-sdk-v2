import { ExternalReferenceInput } from './ExternalReferenceInput';
import { LocalizedStringInput } from './LocalizedStringInput';
import { CreateSparePartsMachineInput } from './CreateSparePartsMachineInput';
import { CreateSparePartInput } from './CreateSparePartInput';
/**
 Input object for UpsertSparePartsMachineInput
 */
export interface UpsertSparePartsMachineInput {
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