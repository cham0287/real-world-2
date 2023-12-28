import { HTMLAttributes } from 'react';
import { FaHeart } from 'react-icons/fa';

const LikeBtn = ({ children, ...props }: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className='rounded-[3px] border border-primary text-primary text-xs px-2 py-1 flex items-center hover:text-white hover:bg-primary'
      {...props}
    >
      <FaHeart />
      &nbsp;
      {children}
    </button>
  );
};

export default LikeBtn;
