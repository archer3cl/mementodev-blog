import Link from 'next/link';
import formatDate from '../lib/formatDate';
import { useTag } from '../lib/tags';

export default function PostList({ posts }) {
  const { getTag } = useTag();
  if (posts === 'undefined') return null;
  return (
    <div>
      {posts.length === 0 && <div>No posts!</div>}
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-6">
        {posts &&
          posts.map((post) => (
            <article key={post.slug} className="mb-4">
              <div className="md:border-l-2 md:border-blue-soda md:dark:border-pink-sunset md:pl-4 md:py-3">
                <Link href={`/post/${post.slug}`}>
                  <a className="group flex flex-col">
                    <h2 className="font-bold font-sans break-normal text-3xl md:text-4xl mb-2">
                      <span className="group-hover:underline-effect">
                        {post.meta.title}
                      </span>
                    </h2>
                    <p className="text-sm md:text-base mb-4">
                      {formatDate(post.meta.date)}
                    </p>
                    <p className="text-sm md:text-base mb-4">
                      {post.meta.excerpt}
                    </p>
                    <p className="text-sm md:text-base uppercase font-bold mb-4">
                      <span className="mr-2">Read more</span>
                      <span className="hidden group-hover:inline-block text-blue-soda dark:text-pink-sunset">
                        ➟
                      </span>
                    </p>
                  </a>
                </Link>
                <div className="inline-flex flex-wrap gap-1 text-sm md:text-base">
                  {post.meta.tags.map((slug, i) => {
                    const tag = getTag(slug);
                    return (
                      <Link href={{ pathname: `/tags/${tag.slug}` }} key={i}>
                        <a className="underline-effect">#{tag.name}</a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
