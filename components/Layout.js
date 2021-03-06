import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';
import ScrollTopButton from './ScrollTopButton';

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {pageTitle ? (
          <title>{pageTitle} | Memento Dev</title>
        ) : (
          <title>Memento Dev</title>
        )}
      </Head>
      <Nav />
      <main className="w-full md:max-w-3xl xl:max-w-5xl mx-auto pt-12 pb-10">
        <div className="w-full px-4 md:px-6 text-xl leading-normal">
          {children}
        </div>
      </main>
      <ScrollTopButton />
      <Footer />
    </>
  );
}
