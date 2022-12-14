export enum AppRoute {
  Main = '/',
  Login = 'login',
  Property = 'offer/:',
  NotFoundPage = '*',
}

export const PHOTO_GALLERY_COUNT = 6;

export const RATING_RATIO = 20;

export const REVIEW_RATING_STARS = [
  { title: 'perfect', value: 5 },
  { title: 'good', value: 4 },
  { title: 'not bad', value: 3 },
  { title: 'badly', value: 2 },
  { title: 'terribly', value: 1 }
];

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
