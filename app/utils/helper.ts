// Utility functions

/**
 * Makes the first character of a string uppercase.
 * @param str - The string to transform.
 * @returns The transformed string.
 */
export function makeFirstCharUpper(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Formats a date string into a more readable format.
 * @param dateString - The date string to format.
 * @returns The formatted date string.
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Gets a random 404 image from the /public/404/ directory
 * @returns A random image path from /public/404/
 */
export function getRandomFallbackImage(seed?: string): string {
  const fallbackImages: string[] = [
    "/404/1.webp",
    "/404/2.webp",
    "/404/3.webp",
    "/404/4.webp",
    "/404/5.webp",
    "/404/6.webp",
    "/404/7.webp",
    "/404/8.webp",
    "/404/9.webp",
  ];

  // If a seed is provided, choose a deterministic image based on the seed.
  if (seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    const idx = Math.abs(hash) % fallbackImages.length;
    return fallbackImages[idx]!;
  }

  // No seed: return the first image to keep SSR/client consistent.
  return fallbackImages[0]!;
}
