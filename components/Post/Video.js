export default function Video({
  videoSrcURL,
  videoTitle,
  description,
  ...props
}) {
  return (
    <div className="grid grid-cols-1 gap-y-4">
      <div className="flex flex-col justify-center">
        <iframe
          className="w-full mx-auto"
          height="315"
          style={{ maxWidth: '512px' }}
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
      {description && (
        <span className="text-center text-sm md:text-base">{description}</span>
      )}
    </div>
  );
}
