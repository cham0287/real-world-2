import { Article } from '@/types/articles';
import ArticleAuthor from './ArticleAuthor';
import LikeBtn from '../common/LikeBtn';
import Link from 'next/link';

const Article = ({
  article: { title, description, author, createdAt, favoritesCount, tagList, slug },
}: {
  article: Article;
}) => {
  return (
    <div className='flex flex-col gap-4 border-gray-200 border-t py-6'>
      <div className='flex justify-between items-center'>
        <ArticleAuthor author={author} createdAt={createdAt} color='text-primary' />
        <LikeBtn>{favoritesCount}</LikeBtn>
      </div>
      <Link href={`/article/${slug}`}>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-sm text-gray-400 font-light'>{description}</p>
      </Link>
      <section className='flex justify-between'>
        <Link href={`/article/${slug}`} className='text-gray-300 text-xs'>
          Read more...
        </Link>
        <Link href={`/article/${slug}`}>
          <ul className='flex gap-1'>
            {tagList.map((tag) => (
              <li key={tag} className='rounded-full border px-[6px] py-[2px] border-gray-300 text-xs text-gray-300'>
                {tag}
              </li>
            ))}
          </ul>
        </Link>
      </section>
    </div>
  );
};

export default Article;
