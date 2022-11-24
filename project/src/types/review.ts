type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type UserReview = {
  user: User;
  comment: string;
date: string;
id: number;
rating: number;
}
