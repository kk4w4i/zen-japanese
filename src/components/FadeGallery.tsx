import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isActive: number;
  gallery: any;
}

const FadeGallery: React.FC<Props> = ({ gallery, isActive }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={isActive} // Use isActive as the key to trigger re-render
        className='fixed w-full h-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img className="fixed object-cover w-full h-full" src={gallery[isActive]} alt="Gallery Image" />
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeGallery;