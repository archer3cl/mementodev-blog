import { useEffect, useState } from 'react';

export default function ScrollTopButton() {
  const [scrollDown, setscrollDown] = useState(false);

  const handleScroll = () => {
    setscrollDown(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 right-0 mb-4 mr-4 transition-opacity duration-300 ease-in-out ${
        scrollDown ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        type="button"
        className="group px-4 py-4 transition ease-in duration-200 border-2 border-gray-900 dark:border-gray-50 bg-gray-50 dark:bg-gray-900 focus:outline-none"
        onClick={scrollToTop}
      >
        <svg
          className="fill-current text-gray-900 dark:text-gray-50"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339L24 16.67 12.004 4.5z" />
        </svg>
      </button>
    </div>
  );
}
