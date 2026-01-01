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
export function getRandomFallbackImage(): string {
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

  if (import.meta.server) {
    // 在服务器端返回第一张图片以保证 SSR 一致性
    return fallbackImages[0]!;
  }

  const randomIndex = Math.floor(Math.random() * fallbackImages.length);
  return fallbackImages[randomIndex]!;
}
