/**
 Sharpness of the output image.
The sharpen parameter increases the definition of the edges of objects in an image.
Notes
- The sharpen parameter is an implementation of an unsharp mask.
 */
export interface SharpenInput {
  /** Sharpen amount value */
  amount?: number;
  /** Sharpen radius value */
  radius?: number;
  /** Sharpen threshold value */
  threshold?: number;
}