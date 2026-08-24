/**
 Change the size of the image canvas.
Sets the size of the image canvas, without changing the size of the image itself, which has the effect of adding space around the image.
This parameter takes multiple values. The first two represent the desired width and height, either as measurements of pixels, separated with a comma, or as a ratio, separated with a colon. The remaining parameters allow the placement of the image within the canvas to be adjusted. On each dimension, placement can be made either with a position coordinate (x or y, which are relative to the top left of the newly-enlarged canvas) or as a percentage offset from the center of the image using offset-x and offset-y. These can be mixed and matched, but only one method can be used for each dimension (i.e., x can be combined with offset-y but x cannot be combined with offset-x).
The remaining parameters determine the position of the cropped region.
Offset positioning acts to distribute the remaining space according to the specified offset proportions. For example, offset-y10 would place the image so that 10% of the leftover space is above the image and 90% below it.
Notes
- x and y can be set as a value in pixels (e.g., 40 is 40 pixels) or as a percentage suffixed with p (e.g., 50p is 50%).
- When x and y are percentages, they are calculated as percentages of the image size, not the canvas size.
- offset-x and offset-y are always interpreted as percentages of the canvas size (e.g., 25 is 25%).
- If no x, y, offset-x, or offset-y parameters are supplied, the image is positioned in the center of the canvas.
- The background color of the canvas will default to transparency for image output formats that support transparency and white for formats that don't. This behavior can be changed by adding the bg-color parameter.
- When using canvas and pad at the same time, pad will be ignored.
- Any fractional pixel measurements will be rounded to the nearest whole pixel.
 */
export interface CanvasInput {
  /** Width as Pixels or Percentage */
  width?: number;
  /** Height as Pixels or Percentage */
  height?: number;
  /** WidthRatio as Number */
  widthRatio?: number;
  /** HeightRatio as Number */
  heightRatio?: number;
  /** X as Pixels or Percentage */
  x?: number;
  /** Y as Pixels or Percentage */
  y?: number;
  /** X Offset as Percentage */
  offsetX?: number;
  /** Y Offset as Percentage */
  offsetY?: number;
}