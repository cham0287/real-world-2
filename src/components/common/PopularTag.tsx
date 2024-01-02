import { HTMLAttributes } from 'react';

const PopularTag = ({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className='rounded-full text-white text-xs px-2 py-1 flex items-center bg-gray-400 hover:bg-gray-500'
      {...props}
    >
      {children}
    </button>
  );
};

export default PopularTag;
