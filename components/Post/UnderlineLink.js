export default function UnderlineLink({ url, text, target, rel, ...props }) {
  return (
    <a
      className="underline-effect text-blue-soda dark:text-pink-sunset"
      href={url}
      target={target}
      rel={rel}
    >
      {text}
    </a>
  );
}
