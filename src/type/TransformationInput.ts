import { Auto } from '../enum/Auto';
import { FeaturesEnableDisable } from '../enum/FeaturesEnableDisable';
import { Fit } from '../enum/Fit';
import { Format } from '../enum/Format';
import { Level } from '../enum/Level';
import { ImageMetadata } from '../enum/ImageMetadata';
import { Optimize } from '../enum/Optimize';
import { Orient } from '../enum/Orient';
import { ResizeFilter } from '../enum/ResizeFilter';
import { CanvasInput } from './CanvasInput';
import { CropInput } from './CropInput';
import { PadInput } from './PadInput';
import { SharpenInput } from './SharpenInput';
import { TrimInput } from './TrimInput';
/**
 Input object for TransformationInput
 */
export interface TransformationInput {
  /** Enable optimization features automatically.
Enables optimizations based on content negotiation.
The only negotiated optimizations currently available are for AVIF and WebP, both image compression formats with limited browser support.
This functionality is also possible using format=auto which adds additional support for JPEGXL output.
Notes
- Although the AVIF and WebP formats produce images at a higher compression ratio with a lower loss of quality compared to JPEG, they are not supported in all browsers.
- When using Firefox version 66 to 71, automatic content negotiation will not occur when navigating to the image. To view WebP or AVIF images generated via auto=avif or auto=webp you must insert your image onto a web page.
- format=auto will take precedence if combined with auto. */
  auto?: Auto;
  /** Set the background color of an image.
The bg-color parameter sets the background color of an image to use when applying padding or when replacing transparent pixels.
Its value may be one of:
- Hex RGB value: Both 3- and 6-digit values are acceptable (e.g. a22 or cf23a5).
- Decimal RGB: RGB values between 0 and 255. Comma-delimited (e.g. 255,0,0).
- Decimal RGB with alpha|RGBA colors include an additional value for alpha (transparency), which ranges from 0 for fully transparent to 1 for fully opaque.
Examples
- "c5c5c5"      => Set background color to grey (Hex RGB)
- "000"         => Set background color to black (Hex RGB)
- "255,0,0"     => Set background color to red (Decimal RGB)
- "255,0,0,0.5" => Set background color to red with 50% transparency (Decimal RGBA) */
  bgColor?: string;
  /** Set the blurriness of the output image.
Applies a Gaussian blur filter to the image.
Its value is a number of pixels between 0.5 and 1000 or a percentage (of the dimensions of the image) suffixed with p (e.g., 1p for 1%).
Examples
- "50"   => Apply a Gaussian blur with a radius of 50px
- "0.5p" => Apply a Gaussian blur with a radius of 0.5% of the image size */
  blur?: number;
  /** Set the brightness of the output image.
The brightness parameter increases or decreases the amount of perceived light an image radiates or reflects.
Its value may be any number between -100 and 100.
Examples
- 50  => Increase the brightness by 50
- -42 => Decrease the brightness by 42 */
  brightness?: number;
  /** Increase the size of the canvas around an image. */
  canvas?: CanvasInput;
  /** Set the contrast of the output image.
The contrast parameter increases or decreases the difference between the darkest and lightest tones in an image.
Notes
- The default value is 0. This leaves the image unchanged.
- A value of -100 will result in a fully grey image.
Examples
- 50  => Increase the contrast by 50 */
  contrast?: number;
  /** Remove pixels from an image. */
  crop?: CropInput;
  /** Disable functionality that is enabled by default.
upscale is already disabled by default. It can be enabled with the enable parameter.
Notes
- Image upscaling is discouraged because it increases both the file size and delivery time of the image to the end user with no visual improvement. We recommend handling upscaling on the client-side (e.g., using a web browser or native application).
- The upscale value must be used with the width, height, or dpr parameters to see any effect in the output image.
Examples
- "width=2560&disable=upscale" => Attempt to resize the image to 2560px wide but do not exceed the natural width of the source image */
  disable?: FeaturesEnableDisable;
  /** Serve correctly sized images for devices that expose a device pixel ratio.
Device pixel ratio.
The dpr parameter provides a means to multiply image dimensions in order to translate logical pixels (also 'CSS pixels') into physical pixels. The device pixel ratio is therefore the ratio between physical pixels and logical pixels.
It is usually possible for client-side software to query the host system to determine the DPR of the display the user is viewing. In web browsers, this is available as the Window.devicePixelRatio variable in JavaScript. The iPhone 5 reports a device pixel ratio of 2, because the physical linear resolution is double the logical resolution.
- Physical Resolution: 960 x 640
- Logical Resolution: 480 x 320
Other devices report varying device pixel ratios, including non-integer ones. For example, the Nokia Lumia 1020 reports 1.6667, whereas the Samsung Galaxy S4 reports 3.
Its value may be any number between 1 and 10.
Examples
- width=200&dpr=2 => Resize the width to 400px (200 CSS pixels for screens with a device pixel ratio of 2) */
  dpr?: number;
  /** Enable functionality that is disabled by default.
Supported values:
- upscale => Allow images to be resized such that the output image's dimensions are larger than the source image.
Notes
- Image upscaling is discouraged because it increases both the file size and delivery time of the image to the end user with no visual improvement. We recommend handling upscaling on the client-side (e.g., using a web browser or native application).
- The upscale value must be used with the width, height, or dpr parameters to see any effect in the output image.
Examples:
- ?width=2560&enable=upscale => Resize the image to 2560px wide, even if the source image is smaller */
  enable?: FeaturesEnableDisable;
  /** Set how the image will fit within the size bounds provided.
The fit parameter controls how the image will be constrained within the provided size (width and height) values, in order to maintain the correct proportions.
Allowed values:
- bounds => Resize the image to fit entirely within the specified region, making one dimension smaller if needed.
- cover	 => Resize the image to entirely cover the specified region, making one dimension larger if needed.
- crop	 => Resize and crop the image centrally to exactly fit the specified region.
Notes
The fit parameter has no effect unless both width and height are specified.
Examples
- width=150&height=150&fit=bounds	=> Resize the image to fit within the bounds of 150px in width by 150px in height
- width=150&height=150&fit=cover	=> Resize the image to entirely cover 150px in width by 150px in height
- width=150&height=150&fit=crop	  => Crop the image to 150px in width by 150px in height */
  fit?: Fit;
  /** Specify the output format to convert the image to.
The format parameter enables the source image to be converted (a.k.a., "transcoded") from one encoded format to another. This is useful when the source image has been saved in a sub-optimal file format that hinders performance.
Notes
- The source image can be any of the following image formats: AVIF, JPEG, JPEGXL, PNG, GIF, WEBP.
- JPEG, progressive JPEG, WebP (Lossy), and PNG8 have a sliding quality scale that supports the quality parameter.
- GIF and PNG do not have a sliding quality scale. They do not support the quality parameter.
- A progressive JPEG pjpg is an image created using the JPEG suite of compression algorithms that will "fade in" successive waves of lines until the entire image has completely arrived. For this reason, progressive JPEG images typically appear to load quicker than the Baseline JPEG jpg format.
- WebP support is available in Google Chrome, Mozilla Firefox 65 and later, Safari 14 and later, Opera, and Android Browser.
- Lossless compression is currently supported for WebP and JPEGXL only.
- GIF to WebP conversion does not support animated GIFs.
- MP4 conversion is only available for animated GIF source images.
- AVIF and JPEGXL are premium features
About the auto value
The auto behavior aims to provide the optimal output format based on client capabilities as well as information related to the source image and transform characteristics. In that regard, we may adopt different heuristics to determine the output format for different source images or transforms.
When using format=auto, the image format delivered is always compatible with the current browser regardless of the source image format. This means a JPEGXL source image can safely be used in a browser where JPEGXL is not supported, and the resulting image is always viewable. With other format parameters and with auto=webp and auto=avif, there are some cases where the original format may be used.
- auto intelligently chooses the best format to deliver to the user prioritizing:
  - JPEGXL
  - AVIF
  - WebP
  - Source image format / JPEG
- Images default to lossy unless the quality parameter is set to 100.
- If no quality parameter is set, the default JPEG quality specified in IO default settings is used.
- Allows the use of JPEGXL, AVIF, or WebP as the source image format in cases where that image format is not support in the viewing environment.
- Quality mapping uses an SSIM similarity score between formats.
- Takes precedence if combined with the auto parameter. */
  format?: Format;
  /** Extract the first frame from an animated image sequence. */
  frame?: number;
  /** Resize the height of the image.
The desired height of the output image.
The height parameter enables dynamic height resizing based on pixels and percent values.
The {value} can be either a positive integer or a positive number less than 1. If the value is an integer greater than or equal to 1, the value is interpreted as a pixel height. If the height parameter is less than 1, the value is interpreted as a percentage height.
Unless a width parameter is present, the height value will cause the width of the image to be scaled in proportion to the requested height. If both width and height are omitted, the input image dimensions are used.
value may be one of:
- Absolute height: An integer number of pixels.
- Relative height: A fraction between 0 and 0.99 (e.g., 0.5) or a percentage between 0 and 100 followed by the letter p (e.g., 50p). In either case, the value indicates the desired height relative to the image's natural height.
Notes
- The maximum output dimensions are 8,192 x 8,192 pixels.
- Because we use a positive number between 0 and 0.99 to return a percentage-based scaled image, in order to return an image that is 100% or more, a p suffix can be appended to the value. For example, height=250p would return an image that is 250% the height of the original. We use p as a simple way to represent percentages.
- If the requested height is not a whole number of pixels (e.g., as a result of applying a percentage value for height), it is rounded to the nearest integer.
Examples
- height=200	          => Resize the height to 200px
- height=0.10	          => Resize the height to 10% of the input image
- height=150p	          => Resize the height to 150% of the input image
- height=200&width=0.50	=> Force resize to a height of 200px and a width that is 50% of the original
- height=200&dpr=2	    => Resize the height to 400px (200 CSS pixels for screens with a device pixel ratio of 2)
- height=150&width=150&fit=bounds	=> Fit image within a 150 x 150px rectangle */
  height?: number;
  /** Specify the level constraints when converting to video.
When converting animated GIFs to the MP4 format and when used in conjunction with the profile parameter, the level parameter specifies a set of constraints indicating a degree of required decoder performance for a profile.
Notes
If either level or profile parameters are missing, profile=baseline&level=3.0 will be used as the default.
Examples
- format=mp4&profile=main&level=5.2	=> Convert the source animated GIF to MP4 format and select the main profile with a level of 5.2 */
  level?: Level;
  /** Include or exclude metadata from the output image.
By default, the image optimizer will remove all metadata embedded in an image. The metadata parameter allows this behavior to be configured.
Notes
This parameter is only effective when the source and destination format are both jpeg. */
  metadata?: ImageMetadata;
  /** Automatically apply optimal quality compression.
The optimize parameter automatically applies optimal quality compression to produce an output image with as much visual fidelity as possible, while minimizing the file size.
Notes
- Optimize is currently supported by the following output formats: JPEG, WebP, AVIF.
- If the quality parameter is also provided, quality overrides optimize because it is more precise.
- Because optimize attempts to produce an output image with as much visual quality as possible while minimizing the file size, the operations applied are subject to change.
Examples
- optimize=medium	        => Output an image with medium optimization
- optimize=high&auto=webp	=> Output a highly optimized JPEG. For browsers that support WebP output a highly optimized WebP image. */
  optimize?: Optimize;
  /** Change how the image will be orientated.
The orient parameter controls the cardinal orientation of the image.
Notes
- By default, if the source image contains orientation information stored within its metadata, that orientation will be applied to the image data and the orientation override removed from metadata.
- The numerical values are the same as EXIF rotation numbers.
Examples
- orient=r => Orient the image right
- orient=2 => Flip vertically
- orient=3 => Flip vertically and horizontally */
  orient?: Orient;
  /** Add pixels to the edge of an image.
Notes
- By default padding applies a background color of white. See bg-color to change that.
- If the source image contains a transparent background and the output image also contains transparency, the padding will be made up of transparent pixels.
- When using pad and canvas at the same time, pad will be ignored.
- Values can be specified using CSS style shorthand values. (see CSS Margin or CSS Padding for more examples).
- CSS shorthand allows for all edges to be specified in one property.
- Any fractional pixel measurements will be rounded to the nearest whole pixel.
Examples
- pad=25,50,75,100 => Pad top edge 25px, right edge 50px, bottom edge 75px and left edge 100px
- pad=25,50,75	   => Pad top edge 25px, right and left edge 50px, bottom edge 75px
- pad=25,50	       => Pad top and bottom edge 25px, right and left edge 50px
- pad=0.25	       => Pad all edges by 25% */
  pad?: PadInput;
  /** Remove pixels from an image before any other transformations occur.
Identical to crop except that precrop is performed before any other transformations. */
  precrop?: CropInput;
  /** Specify the profile class of application when converting to video.
When converting animated GIFs to MP4 format and when used in conjunction with the level parameter, the profile parameter controls which features the video encoder can use based on a target class of application for decoding the specific video bitstream.
Notes
If either profile or level parameters are missing, profile=baseline&level=3.0 will be used as the default.
Examples
- format=mp4&profile=high&level=5.0	=> Convert the source animated GIF to MP4 format and select the high profile with a level of 5.0 */
  profile?: string;
  /** Optimize the image to the given compression level for lossy file formatted images.
Output image quality for lossy file formats.
The quality parameter enables control over the compression level for lossy file-formatted images.
Its value may be any integer between 1 and 100, where 1 is a lower quality image and a smaller file and 100 is the highest quality image and larger file. If desired, a second quality level can be specified for use when auto=webp is enabled and a WebP output format has been selected.
Notes
- The quality parameter can be applied to the following output formats: avif, jpg, pjpg, png8, webp and webply.
- If no quality parameter is present for jpg, pjpg, or webp, the output image will be returned at the default value set in the Image Optimizer web interface.
- If auto=webp is enabled by the URL or the service settings, the second value will be used as the quality value if the requestor sends the accept: image/webp request header.
- When only specifying quality, if the output image file size is larger than the input image, the original image will be delivered.
- This does not include a way of specifying auto AVIF quality.
Examples
- quality=85	                        => Output an image with quality set to 85.
- format=pjpg&auto=webp&quality=85,75	=> Convert the image format to a progressive jpg with image quality set to 85. For browsers that support WebP set the image quality to 75. */
  quality?: number;
  /** Specify the resize filter used when resizing images.
The resizeFilter parameter enables control over the resizing filter used to generate a new image with a higher or lower number of pixels.
Notes
- When making an image smaller, use bicubic, which has a natural sharpening effect.
- When making an image larger, use bilinear, which has a natural smoothing effect.
- When resizing pixel art, use nearest, which has a natural pixelation effect.
- When quality is the main concern, use lanczos, which typically renders the best results.
Examples
- resize-filter=bilinear	Deliver an image that has been resized using the bilinear filter. */
  resizeFilter?: ResizeFilter;
  /** Set the saturation of the output image.
Saturation of the output image.
The saturation parameter increases or decreases the intensity of the colors in an image.
Its value may be any number between -100 and 100.
Notes
- The default value is 0. This leaves the image unchanged.
- Valid values range from -100 to 100
- A value of -100 will generate a grayscale image.
Examples
- saturation=25	  => Increase saturation by 25
- saturation=-100	=> Decrease saturation by 100 (rendering the image grayscale) */
  saturation?: number;
  /** Set the sharpness of the output image.
Sharpness of the output image.
The sharpen parameter increases the definition of the edges of objects in an image.
Notes
The sharpen parameter is an implementation of an unsharp mask.
Examples
- sharpen=a5,r2,t1 => Increase the sharpness of the image by amount:5, radius:2, and threshold:1 */
  sharpen?: SharpenInput;
  /** Remove pixels from the edge of an image.
The trim parameter removes pixels from the edge of an image by pixel or percentage value. This can be useful for removing whitespace and borders that appear on a source image.
Notes
- Values can be specified using CSS style shorthand values. (See CSS Margin or CSS Padding for more examples).
- CSS shorthand allows for all edges to be specified in one property.
- Any fractional pixel measurements will be rounded to the nearest whole pixel.
Examples
- trim=25,50,75,100	=> Trim top edge 25px, right edge 50px, bottom edge 75px and left edge 100px
- trim=25,50,75	    => Trim top edge 25px, right and left edge 50px, bottom edge 75px
- trim=25,50	      => Trim top and bottom edge 25px, right and left edge 50px
- trim=0.25	        => Trim all edges by 25% */
  trim?: TrimInput;
  /** Resize the width of the image.
    The desired width of the output image.
    The width parameter enables dynamic width resizing based on pixels and percent values.
    The {value} can be either a positive integer or a number less than 1. If the value is an integer greater than or equal to 1, the value is interpreted as a pixel width. If the width parameter is less than 1, the value is interpreted as a percentage width.
    Unless a height parameter is present, the width value will cause the height of the image to be scaled in proportion to the requested width. If both width and height are omitted, the input image dimensions are used.
    value may be one of:
    - Absolute width: An integer between 1 and 8192.
    - Relative width: A fraction between 0 and 0.99 (e.g. ,0.5) or a percentage between 0 and 100 followed by the letter p (e.g., 50p). In either case the value indicates the desired width relative to the image's natural width.
    Notes
    - The maximum output dimensions are 8,192 x 8,192 pixels.
    - If the image is animated, the maximum output dimensions apply to the sum of the area of all the frames of the image. For example, a 1024x1024px GIF could have 64 frames before it would exceed the size limit.
    - Because we use a positive number less than 1 to return a percentage-based scaled image, in order to return an image that is 100% or more, a p suffix can be appended to the value. For example, width=250p would return an image that is 250% the width of the original. We use p as a simple way to represent percent.
    - If the requested width is a fraction of a pixel (e.g., as a result of applying a percentage value for width), it is rounded to the nearest integer.
    Examples
    - width=200	                      => Resize the width to 200px
    - width=0.10	                    => Resize the width to 10% of the input image
    - width=150p	                    => Resize the width to 150% of the input image
    - width=200&height=0.50	          => Force resize to a width of 200px and a height that is 50% of the original.
    - width=150&height=150&fit=bounds	=> Fit image within a 150 x 150px rectangle
    - width=200&dpr=2	                => Resize the width to 400px (200 CSS pixels for screens with a device pixel ratio of 2) */
  width?: number;
}