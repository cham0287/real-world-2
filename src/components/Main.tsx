'use client';
import ArticleList from './Article/ArticleList';
import { useQuery } from '@tanstack/react-query';
import { getArticles } from '@/services/articles';
import PopularTags from './Article/PopularTags';

const Main = () => {
  const { data } = useQuery({
    queryKey: ['/api', '/articles'],
    queryFn: getArticles,
  });

  return (
    <section className='px-10 pt-10 pb-20 flex flex-col items-start gap-10 lg:flex-row'>
      {data?.articles && <ArticleList articles={data.articles} />}
      <PopularTags />
    </section>
  );
};

export default Main;
