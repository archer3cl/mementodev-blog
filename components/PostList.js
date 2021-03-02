import Link from 'next/link';
import formatDate from '../lib/formatDate';
import { getTag } from '../lib/tags';

export default function PostList({ posts }) {
  if (posts === 'undefined') return null;
  return (
    <div>
      {!posts && <div>No posts!</div>}
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-6">
        {posts &&
          posts.map((post) => (
            <article key={post.slug} className="mb-4">
              <div className="flex flex-col md:border-l-2 md:border-gray-400 md:pl-4 md:py-3">
                <h2 className="font-bold font-sans break-normal text-gray-900 text-3xl md:text-4xl mb-2">
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <a>{post.meta.title}</a>
                  </Link>
                </h2>
                <p className="text-sm md:text-base mb-4 text-gray-600">
                  {formatDate(post.meta.date)}
                </p>
                <p className="text-sm md:text-base mb-4 text-gray-600">
                  {post.meta.excerpt}
                </p>
                <div>
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <a className="text-sm md:text-base mb-4 uppercase font-bold">
                      Read more ➟
                    </a>
                  </Link>
                </div>
                <div className="inline-flex flex-wrap gap-1 text-sm md:text-base">
                  {post.meta.tags.map((slug, i) => {
                    const tag = getTag(slug);
                    return (
                      <Link
                        href={{ pathname: `/post/tags/${tag.slug}` }}
                        key={i}
                      >
                        <a>#{tag.name}</a>
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
