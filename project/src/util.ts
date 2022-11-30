import { RATING_RATIO } from './const';

export function getRatingWidth(rating: number) {
  return `${Math.round(rating) * RATING_RATIO}%`;
}

export const capitalizeFirstChar = (text: string) => text.charAt(0).toUpperCase().concat(text.slice(1));
