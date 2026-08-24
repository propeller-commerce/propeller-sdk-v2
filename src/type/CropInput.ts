/**
 Removes pixels from an image.
When specifying a crop parameter, the value starts with the desired width and height, either as measurements of pixels, separated with a comma, or as a ratio, separated with a colon (for example, crop=4:3 or crop=640,480 or crop=0.8,0.4).
The remaining parameters determine the position of the cropped region. On each dimension, placement can be made either with a position coordinate (x or y, which are relative to the top left of the uncropped image) or as a percentage offset from the center of the image using offset-x and offset-y. These can be mixed and matched, but only one method can be used for each dimension (i.e., x can be combined with offset-y but x cannot be combined with offset-x).
Offset positioning acts to distribute the remaining space according to the specified offset proportions. If an image is 2000 pixels wide and is being cropped to 1000 pixels wide, offset-x10 would crop 10% (100 pixels) from the left of the image and 90% (900 pixels) from the right. An offset of 50 centers the crop in the middle of the image.
Appending ,smart to the parameter value enables content-aware algorithms to attempt to crop the image to the desired aspect ratio while intelligently focusing on the most important visual content, including the detection of faces.
If the specified cropped region is outside the bounds of the image, the transformation will fail with the error "Invalid transformation for requested image: Invalid crop, region out of bounds". Append ,safe to the parameter value to override this. In safe mode, the image gets delivered as an intersection of the origin image and the specified cropped region. This avoids the error, but the resulting image may not be of the specified dimensions.
 */
export interface CropInput {
  /** Width as Pixel or Percentage */
  width?: number;
  /** Height as Pixels or Percentage */
  height?: number;
  /** WidthRatio as Number */
  widthRatio?: number;
  /** HeightRatio as Number */
  heightRatio?: number;
  /** X coordinate as Pixels or Percentage */
  x?: number;
  /** Y coordinate as Pixels or Percentage */
  y?: number;
  /** X coordinate offset as Percentage */
  offsetX?: number;
  /** Y coordinate offset as Percentage */
  offsetY?: number;
  /** smart */
  smart?: string;
  /** safe */
  safe?: string;
}