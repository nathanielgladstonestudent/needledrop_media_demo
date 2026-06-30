interface ContentThumbnailsProps {
  images: string[];
  fixedWidth?: boolean;
  descriptions?: string[];
}

export default function ContentThumbnails({ images, fixedWidth = false, descriptions }: ContentThumbnailsProps) {
  return (
    <div className={`flex flex-1 ${fixedWidth ? 'justify-start' : 'gap-3'}`}>
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`flex gap-2 ${fixedWidth ? 'w-[calc(25%-0.5625rem)]' : 'flex-1'}`}
          style={fixedWidth ? { marginRight: index < images.length - 1 ? 'calc(25% + 0.75rem)' : '0' } : {}}
        >
          <div className="rounded-lg overflow-hidden bg-zinc-600 dark:bg-zinc-700 flex-shrink-0 w-full">
            <img
              src={image}
              alt={`Content ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          {descriptions && descriptions[index] && (
            <p className="text-white text-xs leading-tight flex-1">
              {descriptions[index]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
