import NextImage from 'next/image';

export default function Image({
  src,
  width,
  height,
  description,
  alt,
  ...props
}) {
  return (
    <div className="grid grid-cols-1 gap-y-4">
      <div className="flex justify-center">
        <NextImage
          className="self-center"
          src={src}
          width={width}
          height={height}
          alt={alt}
          layout="fixed"
        />
      </div>
      {description && (
        <span className="text-center text-sm md:text-base">{description}</span>
      )}
    </div>
  );
}
