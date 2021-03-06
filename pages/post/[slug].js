import fs from 'fs';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import path from 'path';
import rehypePrism from '@mapbox/rehype-prism';
import { NextSeo } from 'next-seo';
import { TwitterIcon, TwitterShareButton } from 'next-share';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import Image from '../../components/Post/Image';
import Video from '../../components/Post/Video';
import UnderlineLink from '../../components/Post/UnderlineLink';

const components = { Video, UnderlineLink, Image };

export default function BlogPostPage({ mdx, meta, slug }) {
  const content = hydrate(mdx, { components });
  const postUrl = `https://mmnto.dev/post/${slug}`;
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.excerpt}
        openGraph={{
          url: postUrl,
          title: meta.title,
          description: meta.excerpt,
          images: [
            {
              url: `https://mmnto.dev/images/post/${slug}/Header.jpg`,
              width: 1920,
              height: 720,
              alt: 'Banner for site, showing page title',
            },
          ],
        }}
      />
      <Layout pageTitle={meta.title}>
        <BlogPost meta={meta}>{content}</BlogPost>
        <div className="flex flex-col gap-4 md:flex-row md:justify-evenly items-end">
          <a
            href={encodeURI(`https://twitter.com/search?q=${postUrl}`)}
            target="_blank"
            rel="noreferrer"
            className="underline-effect font-bold text-blue-soda dark:text-pink-sunset"
          >
            Discuss on Twitter
          </a>
          <TwitterShareButton
            url={postUrl}
            title={meta.title}
            className="flex items-center w-max group"
          >
            <TwitterIcon size="32" className="mr-2" />
            <div className="group-hover:underline-effect">Share on Twitter</div>
          </TwitterShareButton>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const folderPath = path.join(process.cwd(), 'posts');
  const filePath = path.join(folderPath, `${ctx.params.slug}.mdx`);
  const rawFileSource = fs.readFileSync(filePath);
  const { content, data } = matter(rawFileSource);
  const source = await renderToString(content, {
    components,
    scope: data,
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });
  return {
    props: {
      mdx: source,
      meta: data,
      slug: ctx.params.slug,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
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
