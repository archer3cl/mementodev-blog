import formatDate from '../lib/formatDate';
import 'prism-themes/themes/prism-atom-dark.css';

export default function BlogPost({ children, meta }) {
  return (
    <main className="mb-8">
      <article>
        <header className="mb-4">
          <h1 className="font-bold font-sans break-normal pt-6 pb-2 text-4xl">
            {meta.title}
          </h1>
          <p className="text-sm md:text-base font-normal">
            By {meta.author} | {formatDate(meta.date)}
          </p>
        </header>
        <div className="prose dark:prose-dark md:prose-xl dark:prose-dark-xl md:mx-auto">
          {children}
        </div>
      </article>
    </main>
  );
}
