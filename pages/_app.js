import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { TagProvider } from '../lib/tags';
import SEO from '../next-seo.config';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <TagProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </TagProvider>
    </ThemeProvider>
  );
}

export default MyApp;
