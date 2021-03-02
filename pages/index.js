import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import { listTags } from '../lib/tags';
import TagButton from '../components/TagButton';

const Index = ({ title, description, posts, tags, ...props }) => (
  <Layout>
    <header className="text-center mb-4">
      <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
        {title}
      </h1>
      <p className="text-sm md:text-base font-normal text-gray-600">
        {description}
      </p>
    </header>
    <main>
      <PostList posts={posts} />
    </main>
  </Layout>
);

export default Index;

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      meta: data,
      slug: filePath.replace(/^.*[\\/]/, '').slice(0, -4),
    };
  });

  const tags = listTags();

  return {
    props: {
      posts,
      tags,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
