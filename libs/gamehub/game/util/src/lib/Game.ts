import { Genre } from './Genre';
import { Platform } from './Platform';
import { Publisher } from './Publisher';

export type Game = {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  genres: Genre[];
  publishers: Publisher[];
};
