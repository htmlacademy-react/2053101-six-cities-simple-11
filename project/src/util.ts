import { ratingRatio } from './const';

export function getRatingWidth(rating: number) {
  return `${Math.round(rating) * ratingRatio}%`;
}
