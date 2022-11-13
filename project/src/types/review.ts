type User = {
  id: string;
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

export type Review = {
  id: string;
  user: User;
  rating: string;
  comment: string;
  date: string;
}
