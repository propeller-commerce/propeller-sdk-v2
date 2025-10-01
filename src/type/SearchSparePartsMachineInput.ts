import { ExternalReferenceInput } from './ExternalReferenceInput';
/**
 Input object for SearchSparePartsMachineInput
 */
export interface SearchSparePartsMachineInput {
  /** List of machine ids */
  ids?: string[];
  /** List of external source references */
  externalReferences?: ExternalReferenceInput[];
  /** Page number */
  page?: number;
  /** Number of items per page */
  offset?: number;
}