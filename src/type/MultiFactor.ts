import { EnrolledFactor } from './EnrolledFactor';
/**
 Object class for MultiFactor
 */
export class MultiFactor {
  /** The factors enrolled for the user */
  private _enrolledFactors?: EnrolledFactor[];
  /**
   Creates a new instance of MultiFactor
   */
  constructor(data: Partial<MultiFactor> = {}) {
    this._enrolledFactors = data.enrolledFactors;
  }
  /**
   The factors enrolled for the user
   */
  get enrolledFactors(): EnrolledFactor[] | undefined {
    return this._enrolledFactors;
  }
  /**
   The factors enrolled for the user
   */
  set enrolledFactors(value: EnrolledFactor[] | undefined) {
    this._enrolledFactors = value;
  }
}