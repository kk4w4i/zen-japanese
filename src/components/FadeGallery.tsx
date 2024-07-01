import * as React from "react";
interface Props {
  isActive: number;
  gallery: { [key: number]: string };
}

const FadeGallery: React.FC<Props> = ({ gallery, isActive }) => {
  return (
    <div className="relative w-full h-full">
      {Object.entries(gallery).map(([key, url]) => (
        <img
          key={key}
          className={`fixed object-cover w-full h-full transition-opacity duration-500 ${isActive === Number(key) ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          src={url}
          alt={`Gallery Image ${key}`}
          style={{ zIndex: isActive === Number(key) ? 10 : 0 }}
        />
      ))}
    </div>
  );
};

export default FadeGallery;