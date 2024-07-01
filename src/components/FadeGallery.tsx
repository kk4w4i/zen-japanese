import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import LoadingLogo from "../assets/logo/logo-black.png"

interface Props {
  isActive: number;
  gallery: { [key: number]: string };
}

const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    })
  );
};

const FadeGallery: React.FC<Props> = ({ gallery, isActive }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imageUrls = Object.values(gallery);

  useEffect(() => {
    preloadImages(imageUrls)
      .then(() => setIsLoading(false))
      .catch((error) => console.error("Failed to preload images", error));
  }, [imageUrls]);

  if (isLoading) {
    return (
        <div className="fixed h-screen w-screen bg-white z-50">
            <img className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] h-[10rem]' src={LoadingLogo} />
        </div>
    )
    
  }

  return (
    <AnimatePresence>
      <motion.div
        key={isActive} // Use isActive as the key to trigger re-render
        className="fixed w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img
          className="fixed object-cover w-full h-full"
          src={gallery[isActive]}
          alt="Gallery Image"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeGallery;