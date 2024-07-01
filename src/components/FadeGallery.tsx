import * as React from "react";

import { useEffect, useState } from "react";

import Loadlogo from '../assets/logo/logo.webp'

interface Props {
  isActive: number;
  gallery: { [key: number]: string };
}

const FadeGallery: React.FC<Props> = ({ gallery, isActive }) => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const allImagesLoaded = Object.values(loadedImages).every(Boolean);
    if (allImagesLoaded) {
      setLoading(false);
    }
  }, [loadedImages]);

  const handleImageLoad = (key: number) => {
    setLoadedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className={`fixed inset-0 flex items-center justify-center h-screen w-screen bg-white transition-opacity duration-500 ${loading ? 'opacity-100 z-50' : 'opacity-0 z-0'}`}>
          <img className="h-[30vh]" src={Loadlogo}/>
        </div>
      )}
      {Object.entries(gallery).map(([key, url]) => (
        <img
          key={key}
          className={`fixed object-cover w-full h-full transition-opacity duration-500 ${isActive === Number(key) ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          src={url}
          alt={`Gallery Image ${key}`}
          onLoad={() => handleImageLoad(Number(key))}
          style={{ zIndex: isActive === Number(key) ? 10 : 0 }}
        />
      ))}
    </div>
  );
};

export default FadeGallery;