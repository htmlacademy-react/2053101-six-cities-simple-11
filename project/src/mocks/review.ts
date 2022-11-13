import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: '1',
    user: {
      id: '12',
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/3.jpg'
    },
    rating: '4',
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2022-10-16T13:58:46.495Z'
  },
  {
    id: '2',
    user: {
      id: '23',
      isPro: false,
      name: 'Joosi',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/3.jpg'
    },
    rating: '5',
    comment: 'Something text',
    date: '2022-11-14T17:00:46.495Z'
  },
  {
    id: '3',
    user: {
      id: '34',
      isPro: true,
      name: 'Musk',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/3.jpg'
    },
    rating: '1',
    comment: 'Also text',
    date: '2022-02-10T08:58:44.495Z'
  },
  {
    id: '4',
    user: {
      id: '45',
      isPro: true,
      name: 'Mary',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/3.jpg'
    },
    rating: '9',
    comment: 'Very good!',
    date: '2021-11-05T15:14:25.495Z'
  }
];
