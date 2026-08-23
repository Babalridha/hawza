import type { ImageMetadata } from 'astro';

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
  },
);

export function getImageAsset(filename: string): ImageMetadata {
  const imageModule = imageModules[`../assets/images/${filename}`];

  if (!imageModule) {
    throw new Error(`Image asset not found: ${filename}`);
  }

  return imageModule.default;
}
