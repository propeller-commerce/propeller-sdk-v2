import { EnrolledFactor } from './EnrolledFactor';
/**
 Object class for MultiFactor
 */
export interface MultiFactor {
  /** The factors enrolled for the user */
  enrolledFactors?: EnrolledFactor[];
}