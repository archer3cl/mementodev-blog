import formatDate from '../lib/formatDate';

export default function BlogPost({ children, meta }) {
  return (
    <main className="">
      <article>
        <header className="mb-4">
          <h1 className="font-bold font-sans break-normal pt-6 pb-2 text-3xl md:text-4xl">
            {meta.title}
          </h1>
          <p className="text-sm md:text-base font-normal">
            By {meta.author} | {formatDate(meta.date)}
          </p>
        </header>
        <div className="markdown">{children}</div>
      </article>
    </main>
  );
}
