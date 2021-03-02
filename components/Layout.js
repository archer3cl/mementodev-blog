import Head from 'next/head';
import DarkModeButton from './DarkModeButton';
import Footer from './Footer';
import Nav from './Nav';
import ScrollTopButton from './ScrollTopButton';

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {pageTitle ? (
          <title>{pageTitle} | Memento Dev Blog</title>
        ) : (
          <title>Memento Dev Blog</title>
        )}
      </Head>
      <Nav />
      <section className="w-full xl:max-w-5xl mx-auto py-20">
        <div className="w-full px-4 md:px-6 text-xl leading-normal">
          {children}
        </div>
      </section>
      <DarkModeButton />
      <ScrollTopButton />
      <Footer />
    </>
  );
}
