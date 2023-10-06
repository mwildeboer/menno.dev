import type { GetImageResult, ImageMetadata } from "astro";
import { getImage } from "astro:assets";

export class PictureSetResult {
  imageResults: GetImageResult[];

  constructor(imageResults: GetImageResult[]) {
    this.imageResults = imageResults;
  }

  get src() {
    return this.imageResults[0]?.src;
  }

  get srcset() {
    const srcsetSegment = this.imageResults.map((imageResult, index) => `${imageResult.src} ${index + 1}x`);
    return srcsetSegment.join(", ");
  }
}

export class PictureSet {
  imagesByKey: Record<string, ImageMetadata> = {};

  async loadImageMetaData() {
    if (Object.keys(this.imagesByKey).length > 0) {
      return this.imagesByKey;
    }

    const importedImages = await import.meta.glob<{ default: ImageMetadata }>("../assets/images/*.png", {
      eager: true,
    });

    const imagesByKey = Object.entries(importedImages).reduce((accumulator, [key, image]) => {
      const segments = key.split("/");
      const name = segments[segments.length - 1]!.replace(".png", "");
      accumulator[name] = image.default;
      return accumulator;
    }, {} as Record<string, ImageMetadata>);

    this.imagesByKey = imagesByKey;
    return imagesByKey;
  }

  async process(name: string, format: string, width: number, height: number) {
    const imagesByKey = await this.loadImageMetaData();
    const image = imagesByKey[name]!;
    const processedImages = await Promise.all([
      getImage({ src: image, format, width, height }),
      getImage({ src: image, format, width: width * 2, height: height * 2 }),
      getImage({ src: image, format, width: width * 3, height: height * 3 }),
    ]);
    return new PictureSetResult(processedImages);
  }
}
