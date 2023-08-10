import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import SphereCanvas from "./Sphere";


const Hero = () => {
    return (
        <section className={`mt-24 flex flex-col align-middle w-full h-auto gap-4`}>
            <div className='relative mx-auto w-[100%] h-[550px]'>
                <SphereCanvas/>
                <div className='absolute flex flex-col items-center justify-center pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='stroke-text text-center text-[60px] md:text-[128px] sm:text-[84px] font-bold tracking-wider'>STEFAN</h1>
                    <h1 className='stroke-text text-center text-[60px] md:text-[128px] sm:text-[84px] font-bold tracking-wider -mt-8 sm:-mt-10 md:-mt-14'>POPOVICI</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero