import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';

const Index = ({ title, description, posts, ...props }) => (
  <Layout>
    <hi className="title">Welcome to my blog!</hi>
    <p className="description">{description}</p>
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
      mdx: content,
      metaInformation: data,
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
