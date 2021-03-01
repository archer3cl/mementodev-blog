import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [navOpen, setnavOpen] = useState(false);

  function toggleNav() {
    setnavOpen(!navOpen);
    console.log('Toggle');
  }

  return (
    <nav className="fixed w-full z-10 top-0">
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
        <div className="block lg:hidden pr-4">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
            type="button"
            onClick={() => toggleNav()}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:items-center lg:w-auto lg:flex mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20 ${
            !navOpen ? 'hidden' : null
          }`}
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link href="/">
                <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">
                  Active
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/">
                <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4">
                  link
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/">
                <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4">
                  link
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
