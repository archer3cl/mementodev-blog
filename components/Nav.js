import Link from 'next/link';
import { useEffect, useState } from 'react';
import DarkModeButton from './DarkModeButton';

export default function Nav() {
  const [scrollDown, setscrollDown] = useState(false);
  const handleScroll = () => {
    setscrollDown(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav
      className={`fixed w-full z-10 top-0 bg-gray-50 dark:bg-gray-900 pt-2 ${
        scrollDown ? 'shadow' : null
      }`}
    >
      <div className="w-full xl:max-w-5xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3 px-4 md:px-6">
        <Link href="/">
          <a className="font-extrabold text-xl underline-effect">
            Memento Dev Blog
          </a>
        </Link>
        <DarkModeButton />
      </div>
    </nav>
  );
}
