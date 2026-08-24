import { TransformationInput } from './TransformationInput';
/**
 Input object for ImageTransformationInput
 */
export interface ImageTransformationInput {
  /** Friendly name for your image transformation */
  name: string;
  /** Image transformation options */
  transformation: TransformationInput;
}