import { Article } from '@/types/articles';
import ArticleAuthor from './ArticleAuthor';
import LikeBtn from '../common/LikeBtn';

const Article = ({ article: { title, description, author, createdAt, favoritesCount } }: { article: Article }) => {
  return (
    <div className='flex flex-col gap-4 border-gray-200 border-t py-6'>
      <div className='flex justify-between items-center'>
        <ArticleAuthor author={author} createdAt={createdAt} color='text-primary' />
        <LikeBtn>{favoritesCount}</LikeBtn>
      </div>
      <section>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-sm text-gray-400 font-light'>{description}</p>
      </section>
    </div>
  );
};

export default Article;
