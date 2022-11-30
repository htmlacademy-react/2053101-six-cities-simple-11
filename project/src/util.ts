import { ratingRatio } from './const';

export function getRatingWidth(rating: number) {
  return `${Math.round(rating) * ratingRatio}%`;
}

export const capitalizeFirstChar = (text: string) => text.charAt(0).toUpperCase().concat(text.slice(1));
