export default function Image({
  src,
  width,
  height,
  description,
  alt,
  ...props
}) {
  return (
    <div className="grid grid-cols-1 justify-items-center">
      <img src={src} alt={alt} width={width} height={height} />
      {description && (
        <span className="text-center text-sm md:text-base -mt-6">
          {description}
        </span>
      )}
    </div>
  );
}
