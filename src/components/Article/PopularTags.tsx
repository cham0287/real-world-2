'use client';

import { getTags } from '@/services/articles';
import { useQuery } from '@tanstack/react-query';
import PopularTag from '../common/PopularTag';

const PopularTags = () => {
  const { data } = useQuery({
    queryKey: ['/api', '/tags'],
    queryFn: getTags,
  });
  return (
    <div className='bg-gray-100 p-2'>
      <h2>Popular Tags</h2>
      <ul className='flex gap-1 flex-wrap pt-2'>
        {data ? (
          data.tags.map((tag) => <PopularTag key={tag}>{tag}</PopularTag>)
        ) : (
          <div>Loading Tags...</div>
        )}
      </ul>
    </div>
  );
};

export default PopularTags;
