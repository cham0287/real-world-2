'use client';

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='flex px-10 py-4 justify-between'>
      <div className='text-green-600 font-bold text-xl'>conduit</div>
      <ul className='flex gap-2'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/login'>Sign in</Link>
        </li>
        <li>
          <Link href='/register'>Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
