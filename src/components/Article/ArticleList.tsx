'use client';
import { getArticles } from '@/services/articles';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Article from './Article';
import { ArticlesDTO } from '@/types/articles';

interface Props {
  articles: ArticlesDTO['articles'];
}

const ArticleList = ({ articles }: Props) => {
  return (
    <div>
      <section className='flex gap-5'>
        <article>
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </article>
      </section>
    </div>
  );
};

export default ArticleList;
