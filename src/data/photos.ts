import type { ImageMetadata } from "astro";

// Every project photo, keyed by file name ("pw17.jpg"), so data files can
// refer to photos by name and still get Astro's optimised, responsive output.
const files = import.meta.glob<{ default: ImageMetadata }>("../assets/photos/*.jpg", { eager: true });

export const photos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split("/").pop()!, mod.default]),
);

export function photo(name: string): ImageMetadata {
  const img = photos[name];
  if (!img) throw new Error(`Unknown photo: ${name}`);
  return img;
}
