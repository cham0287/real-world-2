import { Author } from '@/types/common';
import Image from 'next/image';
import dayjs from 'dayjs';
import { HTMLAttributes } from 'react';
import Link from 'next/link';

interface ArticleAuthorProps extends HTMLAttributes<HTMLDivElement> {
  author: Author;
  createdAt: Date;
  color?: string;
}

const ArticleAuthor = ({ author, createdAt, color }: ArticleAuthorProps) => {
  const formattedDate = dayjs(createdAt).format('MMMM D, YYYY');

  return (
    <div className={`flex gap-2 items-center ${color}`}>
      <Image className='rounded-full' src={author.image} alt='author image' width={30} height={30} />
      <div>
        <Link href={`/author/${author.username}`} className='text-sm hover:underline hover:text-green-700'>
          {author.username}
        </Link>
        <p className='text-xs text-gray-300'>{formattedDate}</p>
      </div>
    </div>
  );
};

export default ArticleAuthor;
