'use client';
import { getArticles } from '@/services/articles';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Article from './Article';

const ArticleList = () => {
  const { data } = useQuery({ queryKey: ['/api', '/articles'], queryFn: getArticles });

  return (
    <div>{data?.articles && data.articles.map((article) => <Article key={article.slug} article={article} />)}</div>
  );
};

export default ArticleList;
