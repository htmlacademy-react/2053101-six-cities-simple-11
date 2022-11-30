export enum AppRoute {
  Main = '/',
  Login = 'login',
  Property = 'offer/:',
}

export const photoGalleryCount = {
  start: 0,
  end: 6
};

export const ratingRatio = 20;

export const offerTypeLetter = {
  first: 0,
  other: 1
};

export const reviewRatingStar = {
  five: [5, 'perfect'],
  four: [4, 'good'],
  three: [3, 'not bad'],
  two: [2, 'badly'],
  one: [1, 'terribly'],
} as const;
