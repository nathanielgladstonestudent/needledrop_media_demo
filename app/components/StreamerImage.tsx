interface StreamerImageProps {
  src: string;
  alt: string;
  backgroundColor?: string;
}

export default function StreamerImage({ 
  src, 
  alt, 
  backgroundColor = '#202225' 
}: StreamerImageProps) {
  return (
    <div 
      className="w-[16.66%] h-full flex items-center justify-center" 
      style={{ backgroundColor }}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}
