import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import globe from '../assets/misc/globe.webm';

const Preloader = ({ duration }) => {
    const [showPreloader, setShowPreloader] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowPreloader(false);
      }, duration);
  
      return () => {
        clearTimeout(timeout);
      };
    }, [duration]);
  
    return (
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-primary"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
          >
            <video autoPlay loop muted className="w-64 h-64">
              <source src={globe} type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  
  export default Preloader;