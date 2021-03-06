import Link from 'next/link';
import { useTag } from '../lib/tags';

export default function Footer() {
  const { listTags } = useTag();
  return (
    <footer className="dark:bg-gray-800">
      <div className="w-full mx-auto xl:max-w-5xl px-4 md:px-6 py-20 flex flex-col md:flex-row md:flex-nowrap md:justify-between">
        <div className="text-left mb-4 md:w-96">
          <div className="flex title-font font-medium items-center justify-start text-gray-900 dark:text-gray-50 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-11 h-11 transform -rotate-12"
            >
              <path
                d="M471.7 260.6a109.6 109.6 0 00-77.7-32.2H118A110 110 0 10174 433.1s76-31.3 164.2 0a110 110 0 00148.5-153.8"
                fill="#547475"
              />
              <circle cx="390.2" cy="294" r="18.9" fill="#53caf9" />
              <circle cx="390.2" cy="381.4" r="18.9" fill="#efba00" />
              <circle cx="346.4" cy="337.7" r="18.9" fill="#73c470" />
              <circle cx="433.9" cy="337.7" r="18.9" fill="#f74848" />
              <path
                d="M144.4 323.7h-19.9v-20a13 13 0 00-13-12.9h-2a13 13 0 00-13 13v19.9h-20a13 13 0 00-12.9 13v2a13 13 0 0013 13h19.9v20a13 13 0 0013 12.9h2a13 13 0 0013-13v-19.9h20a13 13 0 0012.9-13v-2a13 13 0 00-13-13z"
                fill="#b4cccb"
              />
              <path fill="#8aacad" d="M253.8 256.3H215v-27.9h77.6v28h-14.3" />
              <path fill="#231f20" d="M215 228.4h25.5v27.9H215z" opacity=".2" />
              <g fill="#231f20">
                <path d="M493.5 274.9a8 8 0 00-13.6 8.7 101.5 101.5 0 0113.9 75.2 102 102 0 01-99.8 81.4h-3.6l-1.8-.2h-1.8l-2.4-.3h-1l-2.9-.4h-.2a101.6 101.6 0 01-80.8-62.8 8 8 0 00-15 6c5 12.3 11.8 23.4 20.1 33-38.7-7.4-73-4.5-97.2 0 8.3-9.6 15.1-20.7 20.1-33a8 8 0 10-15-6 101.6 101.6 0 01-80.8 62.8h-.2l-3 .4h-1l-2.3.2-1.8.1-1.8.1-3.6.1a102 102 0 010-203.7h89v19.8a8 8 0 008 8.1h38.8a8 8 0 100-16.2h-30.7v-11.7h61.5v11.7h-6.3a8 8 0 000 16.2h14.3a8 8 0 008.1-8v-20H394c27.2 0 52.8 10.7 72 30a8 8 0 0011.4-11.5 117.3 117.3 0 00-83.4-34.6H261.9v-29.5a34.3 34.3 0 0134.3-34.3h57.6a50.5 50.5 0 000-100.9H251.7a8 8 0 000 16.2H353.8a34.3 34.3 0 010 68.6h-57.6a50.5 50.5 0 00-50.4 50.4v29.5H118c-65 0-118 53-118 118a118.2 118.2 0 00122.2 118l2-.1 2-.1 2.7-.2 1.2-.2 3.3-.3h.3c15.8-2.2 30.8-7.4 44.2-15.2 8.7-3.3 77.7-27.4 156.4 0a117.6 117.6 0 0047.6 15.5l1.2.2 2.7.2h2l2 .2h4.2A118.2 118.2 0 00493.5 275z" />
                <path d="M109.4 392.7h2.2a21 21 0 0021-21v-11.9h11.8a21 21 0 0021-21v-2.2a21 21 0 00-21-21h-11.8v-11.8a21 21 0 00-21-21h-2.2a21 21 0 00-21 21v11.8H76.5a21 21 0 00-21 21v2.2a21 21 0 0021 21h11.9v11.9a21 21 0 0021 21zm-32.9-49a4.9 4.9 0 01-4.8-5v-2c0-2.7 2.2-5 4.8-5h20a8 8 0 008-8v-20c0-2.6 2.2-4.8 5-4.8h2c2.7 0 5 2.2 5 4.9v19.9a8 8 0 008 8h20c2.6 0 4.8 2.3 4.8 5v2c0 2.8-2.2 5-4.9 5h-19.9a8 8 0 00-8 8v20c0 2.6-2.3 4.8-5 4.8h-2a4.9 4.9 0 01-5-4.8v-20a8 8 0 00-8-8h-20zM390.2 321a27 27 0 10-.1-54 27 27 0 000 54zm0-37.8a10.8 10.8 0 110 21.6 10.8 10.8 0 010-21.6zM390.2 408.4a27 27 0 10-.1-54 27 27 0 000 54zm0-37.8a10.8 10.8 0 110 21.6 10.8 10.8 0 010-21.6zM319.5 337.7a27 27 0 1054 0 27 27 0 00-54 0zm37.7 0a10.8 10.8 0 11-21.6 0 10.8 10.8 0 0121.6 0zM460.8 337.7a27 27 0 10-54 0 27 27 0 0054 0zm-37.7 0a10.8 10.8 0 1121.6 0 10.8 10.8 0 01-21.6 0z" />
              </g>
              <path
                d="M33.7 338.3a110 110 0 01110-109.9H118a110 110 0 1012.8 219.1 110 110 0 01-97-109.2z"
                fill="#231f20"
                opacity=".2"
              />
            </svg>
            <span className="ml-3 text-xl">Alex Vieyra</span>
          </div>
          <p className="mt-2 text-sm text-gray-500 mb-4">
            Learning my way into the game dev world. In the meantime I'm still
            trying to balance work with making video games as a hobby.
          </p>
          <div className="hidden md:block text-sm">
            © 2021-present Alex Vieyra. All Rights Reserved.
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 md:mr-16">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {listTags().map((tag) => (
                <Link href={`/tags/${tag.slug}`} key={tag.slug}>
                  <a className="underline-effect capitalize w-max">
                    {tag.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-50 tracking-widest text-sm mb-3 uppercase">
              Links
            </h2>
            <div className="grid grid-cols-1 gap-2">
              <a
                href="https://twitter.com/VieyraFC"
                className="underline-effect flex items-center w-max"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current mr-2 w-4 h-4"
                >
                  <path d="M24 4.6c-.9.3-1.8.6-2.8.7a5 5 0 002.1-2.7c-1 .6-2 1-3 1.2a5 5 0 00-8.5 4.5A14 14 0 011.7 3a5 5 0 001.5 6.6c-.8 0-1.6-.2-2.2-.6A5 5 0 005 14a5 5 0 01-2.3 0 5 5 0 004.6 3.5 9.9 9.9 0 01-7.3 2A14 14 0 0021.5 7.1 10 10 0 0024 4.6z" />
                </svg>
                Twitter
              </a>
              <a
                href="https://alex-vieyra.itch.io/"
                className="underline-effect flex items-center w-max"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 245.4 220.7"
                  className="fill-current mr-2 w-4 h-4"
                >
                  <path d="M32 1.4C21.3 7.7.2 31.9 0 38.3v10.5c0 13.3 12.5 25 23.8 25a25 25 0 0024.9-24.6c0 13.4 11 24.7 24.5 24.7a24.4 24.4 0 0024.2-24.7A25.3 25.3 0 00122.6 74h.2A25.3 25.3 0 00148 49.2 24.4 24.4 0 00172.2 74a24.7 24.7 0 0024.5-24.7A25 25 0 00221.6 74c11.3 0 23.8-11.8 23.8-25V38.2c-.2-6.4-21.3-30.6-32-37C180 .3 157 0 122.7 0 88.3 0 41.5.5 32 1.4zm65.2 66.2a28 28 0 01-4.8 6.1c-5.1 5-12.2 8.2-19.9 8.2a28.5 28.5 0 01-20-8.2 26.6 26.6 0 01-4.5-6c-1.3 2.3-3.1 4.2-5 6A28.5 28.5 0 0123 82c-.9 0-1.8-.3-2.6-.6-1.1 11.4-1.6 22.3-1.7 30.2v12c.1 23.8-2.5 77.3 10.4 90.4 20 4.7 56.7 6.8 93.6 6.8 36.8 0 73.6-2.1 93.5-6.8 13-13 10.4-66.6 10.6-90.4l-.1-12c-.2-8-.6-18.8-1.7-30.2-.8.3-1.8.6-2.7.6a28.5 28.5 0 01-20-8.2 28.2 28.2 0 01-5-6 26.6 26.6 0 01-4.5 6 28.5 28.5 0 01-20 8.2c-7.7 0-14.7-3.2-19.8-8.2a28 28 0 01-4.8-6.1 28 28 0 01-4.7 6.1 28.5 28.5 0 01-20 8.2h-1.6a28.5 28.5 0 01-20-8.2 28 28 0 01-4.7-6.1zM76.7 94c8.1 0 15.3 0 24.3 9.7a207 207 0 0143.5 0c8.8-9.7 16-9.7 24.2-9.7 3.8 0 19.1 0 29.8 30l11.5 41.1c8.5 30.7-2.7 31.4-16.7 31.4-20.8-.7-32.3-15.8-32.3-30.9-11.5 1.9-24.9 2.8-38.3 2.8-13.4 0-26.8-1-38.3-2.8 0 15-11.5 30.2-32.3 31-14 0-25.2-.8-16.7-31.5l11.5-41.1c10.6-30 26-30 29.8-30zm46 23.6s-21.9 20-25.8 27.2l14.3-.6v12.5c0 .6 5.7.3 11.5 0 5.7.3 11.5.6 11.5 0v-12.5l14.3.6c-4-7.2-25.8-27.2-25.8-27.2z" />
                </svg>
                Itch.io
              </a>
            </div>
          </div>
        </div>
        <div className="md:hidden text-sm text-center">
          © 2021-present Alex Vieyra. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
