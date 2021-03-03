import { useTheme } from 'next-themes';

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  function toggleDarkMode() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="fixed bottom-0 left-0 mb-4 ml-4 z-10">
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="w-14 h-8 flex items-center rounded-full p-1 ring transform duration-300 ease-in-out bg-gray-50 dark:bg-gray-900 focus:outline-none"
          onClick={toggleDarkMode}
        >
          <div className="dark:bg-gray-50 bg-gray-900 w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out dark:translate-x-6" />
        </button>
      </div>
    </div>
  );
}
