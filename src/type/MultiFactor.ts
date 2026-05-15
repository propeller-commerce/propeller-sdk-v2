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

  /** Returns `enrolledFactors` as EnrolledFactor instances (coerced on first access). */
  getEnrolledFactors(): EnrolledFactor[] | undefined {
    if (!this.enrolledFactors) return undefined;
    this.enrolledFactors = this.enrolledFactors.map((x: any) => x instanceof EnrolledFactor ? x : new EnrolledFactor(x));
    return this.enrolledFactors;
  }
}