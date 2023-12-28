'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LIST = [
  { text: 'Home', pathname: '/' },
  { text: 'Sign in', pathname: '/login' },
  { text: 'Sign up', pathname: '/register' },
];

const NavBar = () => {
  const currentPathname = usePathname();

  return (
    <nav className='flex px-10 py-4 justify-between'>
      <div className='text-green-600 font-bold text-xl'>conduit</div>
      <ul className='flex gap-4 text-gray-400'>
        {NAV_LIST.map(({ text, pathname }) => (
          <li key={pathname} className={`${currentPathname === pathname && 'text-black'}`}>
            <Link href={pathname}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
