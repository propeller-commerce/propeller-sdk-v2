/**
 Add pixels to the edge of an image.
Notes
- By default padding applies a background color of white. See bg-color to change that.
- If the source image contains a transparent background and the output image also contains transparency, the padding will be made up of transparent pixels.
- When using pad and canvas at the same time, pad will be ignored.
- Values can be specified using CSS style shorthand values. (see CSS Margin or CSS Padding for more examples).
- CSS shorthand allows for all edges to be specified in one property.
- Any fractional pixel measurements will be rounded to the nearest whole pixel.
 */
export interface PadInput {
  /** Top - Pixels or Percentage - Default=0 */
  top?: number;
  /** Right - Pixels or Percentage - Default=0 */
  right?: number;
  /** Bottom - Pixels or Percentage - Default=0 */
  bottom?: number;
  /** Left - Pixels or Percentage - Default=0 */
  left?: number;
}