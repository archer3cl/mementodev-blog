import { ThemeProvider } from 'next-themes';
import { TagProvider } from '../lib/tags';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <TagProvider>
        <Component {...pageProps} />
      </TagProvider>
    </ThemeProvider>
  );
}

export default MyApp;
