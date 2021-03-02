import Link from 'next/link';
import { useEffect, useState } from 'react';

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
      className={`fixed w-full z-10 top-0 ${
        scrollDown ? 'bg-white shadow' : 'bg-gray-100'
      }`}
    >
      <div
        id="progress"
        className="h-1 z-20 top-0"
        style={{
          background:
            'linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)',
        }}
      />
      <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <Link href="/">
            <a className="text-gray-900 no-underline hover:no-underline font-extrabold text-xl">
              Memento Dev Blog
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
