import fs from 'fs';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import path from 'path';

export default function BlogPostPage({ mdx, metaInformation }) {
  const content = hydrate(mdx);
  return (
    <>
      <p>Test</p>
      <div>SEO Information: {JSON.stringify(metaInformation)}</div>
      <div>{content}</div>
    </>
  );
}

export async function getStaticProps(ctx) {
  const folderPath = path.join(process.cwd(), 'posts');
  const filePath = path.join(folderPath, `${ctx.params.slug}.mdx`);
  const rawFileSource = fs.readFileSync(filePath);
  const { content, data } = matter(rawFileSource);
  const source = await renderToString(content);
  return {
    props: {
      mdx: source,
      metaInformation: data,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -4);
      return slug;
    });
    return data;
  })(require.context('../../posts', true, /\.mdx$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
