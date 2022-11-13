type Location = {
  latitude: string;
  longitude: string;
  zoom: string;
};

type City = {
  name: string;
  location: Location;
};

type Host = {
  id: string;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type Offer= {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isPremium: boolean;
  rating: string;
  type: string;
  bedrooms: string;
  maxAdults: string;
  price: string;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
  id: string;
};
