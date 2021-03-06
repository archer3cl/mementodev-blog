import { useTheme } from 'next-themes';

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  function toggleDarkMode() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button
      type="button"
      className="w-12 h-6 flex items-center rounded-full ring transform duration-300 ease-in-out bg-gray-50 dark:bg-gray-900 focus:outline-none"
      onClick={toggleDarkMode}
    >
      <span className="dark:bg-gray-50 bg-gray-900 w-8 h-8 -m-1 rounded-full shadow-md transform duration-300 ease-in-out dark:translate-x-6 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 488"
          className="w-5 h-5 mx-auto hidden dark:block"
        >
          <circle cx="244" cy="244" r="158.4" fill="#ffc114" />
          <path d="M356 132c62 62 62 162 0 224s-162 62-224 0" fill="#fca12a" />
          <path fill="#ffc114" d="M206 68l38-68 38 68z" />
          <path fill="#fca12a" d="M247 68l-3-68 38 68z" />
          <path fill="#ffc114" d="M282 420l-38 68-38-68z" />
          <path fill="#fca12a" d="M241 420l3 68-38-68z" />
          <path fill="#ffc114" d="M420 206l68 38-68 38z" />
          <path fill="#fca12a" d="M420 247l68-3-68 38z" />
          <path fill="#ffc114" d="M68 282L0 244l68-38z" />
          <path fill="#fca12a" d="M68 241l-68 3 68-38z" />
          <path fill="#ffc114" d="M344 90l75-21-21 75z" />
          <path fill="#fca12a" d="M374 119l45-50-21 75z" />
          <path fill="#ffc114" d="M144 398l-75 21 21-75z" />
          <path fill="#fca12a" d="M114 369l-45 50 21-75z" />
          <path fill="#ffc114" d="M398 344l21 75-75-21z" />
          <path fill="#fca12a" d="M369 374l50 45-75-21z" />
          <path fill="#ffc114" d="M90 144L69 69l75 21z" />
          <path fill="#fca12a" d="M119 114L69 69l75 21z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 h-5 mx-auto dark:hidden"
        >
          <path
            d="M287 350A251 251 0 01167 8a258 258 0 10337 337 250 250 0 01-191 15"
            fill="#3a5d74"
          />
          <path
            d="M286 487A258 258 0 01111 40a257 257 0 10330 395c-43 33-97 52-155 52z"
            fill="#231f20"
            opacity=".2"
          />
          <path
            d="M266 512A264 264 0 010 246 264 264 0 01164 1a8 8 0 0110 11 243 243 0 00116 331 8 8 0 01-6 14A259 259 0 01151 25a249 249 0 00115 471c94 0 179-52 221-135a256 256 0 01-177 6 8 8 0 115-15 242 242 0 00185-14 8 8 0 0111 10 266 266 0 01-245 164z"
            fill="#231f20"
          />
        </svg>
      </span>
    </button>
  );
}
