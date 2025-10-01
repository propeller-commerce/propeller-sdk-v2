/**
 Remove pixels from the edge of an image.
The trim parameter removes pixels from the edge of an image by pixel or percentage value. This can be useful for removing whitespace and borders that appear on a source image.
Notes
- Values can be specified using CSS style shorthand values. (See CSS Margin or CSS Padding for more examples).
- CSS shorthand allows for all edges to be specified in one property.
- Any fractional pixel measurements will be rounded to the nearest whole pixel.
 */
export interface TrimInput {
  /** Top - Pixels or Percentage(decimal 0.0 - 1) - Default=0 */
  top?: number;
  /** Right - Pixels or Percentage(decimal 0.0 - 1) - Default=0 */
  right?: number;
  /** Bottom - Pixels or Percentage(decimal 0.0 - 1) - Default=0 */
  bottom?: number;
  /** Left - Pixels or Percentage(decimal 0.0 - 1) - Default=0 */
  left?: number;
}