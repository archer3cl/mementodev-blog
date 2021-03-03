import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';

export default function Index({ title, description, posts, tags, ...props }) {
  return (
    <Layout>
      <header className="text-center mb-12">
        <h1 className="font-bold font-sans break-normal pt-6 pb-2 text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="text-sm md:text-base font-normal">{description}</p>
      </header>
      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);

    return {
      meta: data,
      slug: filePath.replace(/^.*[\\/]/, '').slice(0, -4),
    };
  });

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
