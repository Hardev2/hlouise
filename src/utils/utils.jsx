import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge classes with tailwind-merge with clsx full feature
 * @param {...string} inputs - Classes to merge
 * @returns {string} - Merged classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
