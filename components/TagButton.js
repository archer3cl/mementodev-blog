import Link from 'next/link';

export default function TagButton({ tag }) {
  return (
    <>
      <Link href={`/posts/tags/${tag.slug}`}>{tag.name}</Link>
    </>
  );
}
