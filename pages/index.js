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
    <hi className="title">Welcome to my blog!</hi>
    <p className="description">{description}</p>
    <main>
      <PostList posts={posts} />
    </main>
    <ul>
      {tags.map((it, i) => (
        <li key={i}>
          <TagButton tag={it} />
        </li>
      ))}
    </ul>
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
