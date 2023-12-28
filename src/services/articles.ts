import { ArticlesDTO } from '@/types/articles';
import { fetchData } from './app';

export const getArticles = async (): Promise<ArticlesDTO> => {
  return await fetchData('/articles');
};
