import React, { useRef, useEffect, useState } from 'react';
import SphereCanvas from "./Sphere";
import { motion } from 'framer-motion'

const Hero = () => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [firstLoad, setfirstLoad] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
              } else {
                setIsVisible(false); // Reset isVisible state when element is out of view
                setfirstLoad(false);
              }
            });
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.3, // Adjust this threshold as needed
          }
        );
    
        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
    
        return () => {
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        };
      }, []);



    return (
        <section className={`mt-24 flex flex-col align-middle w-full h-auto gap-4`}>
            <div className='relative mx-auto w-[100%] h-[550px]'>
                <SphereCanvas/>
                <motion.div 
                    ref={elementRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0}}
                    exit={{ opacity: 0}}
                    transition={{duration: 2, ease: 'easeInOut', delay: firstLoad ? 3 : 0}}
                    className='absolute flex flex-col items-center justify-center pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='stroke-text text-center text-[60px] md:text-[128px] sm:text-[84px] font-bold tracking-wider'>STEFAN</h1>
                    <h1 className='stroke-text text-center text-[60px] md:text-[128px] sm:text-[84px] font-bold tracking-wider -mt-8 sm:-mt-10 md:-mt-14'>POPOVICI</h1>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero