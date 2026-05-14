import { EnrolledFactor } from './EnrolledFactor';
/**
 Object class for MultiFactor
 */
export class MultiFactor {
  /** The factors enrolled for the user */
  enrolledFactors?: EnrolledFactor[];
  constructor(data: Partial<MultiFactor> = {}) {
    Object.assign(this, data);
  }
}