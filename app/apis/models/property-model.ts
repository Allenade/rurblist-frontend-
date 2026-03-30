import { CommentModel } from './comment-model';
import { ImageModel } from './image-model';
import { LocationModel } from './location-model';
import { ProfileImage } from './profile-model';
import { UserModel } from './user-model';

// types/property.ts
export type Property = {
  id: string;
  title: string;
  price: number;
  type: 'rent' | 'sale';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
};

export interface Property1 {
  _id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  size: number;
  agentFee: number;
  paymentFrequency: string;
  images: ImageModel[];
  location: LocationModel;
  owner: UserModel;
  likes: any[];
  amenities: string[];
  furnishingStatus: string;
  likesCount: number;
  comments: CommentModel[];
  views: number;
  verificationStatus: string;
  isAvailable: boolean;
  priorityLevel: number;
  slug: string;
  trendingScore: number;
  createdAt: string;
  updatedAt: string;
  unlikes: any[];
  unlikesCount: number;
  commentsCount: number;
}

export type PropertySearchParams = {
  search?: string;
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  state?: string;
  city?: string;
  sort?: string;
  page?: number;
  limit?: number;
  lat?: number;
  lng?: number;
  radius?: number;
  cursor?: string;
};
