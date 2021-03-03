import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import tagsFile from '../../meta/tags.yml';

export default function TagsPage({ tag, posts, tags, ...props }) {
  return (
    <Layout>
      <header className="text-center mb-12">
        <h1 className="font-bold font-sans break-normal pt-6 pb-2 text-3xl md:text-4xl capitalize">
          {tag}
        </h1>
      </header>
      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const posts = postFilePaths.flatMap((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);
    if (!data.tags.includes(ctx.params.tag)) return [];
    return {
      meta: data,
      slug: filePath.replace(/^.*[\\/]/, '').slice(0, -4),
    };
  });

  const tag = tagsFile.tags.find((t) => t.slug === ctx.params.tag).name;

  return {
    props: {
      tag,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const paths = tagsFile.tags.map((tag) => `/tags/${tag.slug}`);

  return {
    paths,
    fallback: false,
  };
}
