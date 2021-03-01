import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <Nav />
      <section className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          {children}
        </div>
      </section>
      <Footer />
    </>
  );
}
