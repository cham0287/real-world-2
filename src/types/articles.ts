import { Author } from './common';

export type ArticlesDTO = {
  articles: readonly Article[];
  articlesCount: number;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
};
