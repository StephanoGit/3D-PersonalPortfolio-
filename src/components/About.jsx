import React from 'react';
import Marquee from "react-fast-marquee";


import cvQR from '../assets/qrs/cv-qr.svg';
import {ReactComponent as Arrow} from '../assets/caret-back-outline.svg';
import SectionWrapper from '../hoc/SectionWrapper';

import { skills } from '../constants/index.js';
import cv_pdf from '../assets/misc/CV.pdf';


const About = () => {
    return (
        <div className='mx-auto w-[90%] mt-16 flex flex-col gap-4'>
            <div className='bg-secondary flex flex-col-reverse lg:flex-row p-3'>
                <div className='w-full '>
                    <a href={cv_pdf} target='_blank'><img src={cvQR} className='w-full object-contain cursor-pointer'/></a>
                </div>
                <div className='flex flex-col w-full justify-between lg:ml-3'>
                    <Marquee autoFill={true}>
                        <span className='mx-2 font-medium text-4xl text-primary'>WHO IS THIS GUY?</span>
                    </Marquee>
                    <div>
                        <span className='font-normal text-sm text-primary'>SCAN OR CLICK THE QR CODE FOR CV</span>
                    </div>
                    <div className='flex flex-row'>
                        {[...Array(14)].map((e, i) => (<Arrow key={i} alt='arrow' className='w-8 fill-tertiary invisible lg:visible xl:w-10 2xl:w-12'/>))}
                    </div>
                </div>
            </div>
            
            <div className='mx-auto flex flex-col lg:flex-row'>
                <div className='w-full border-4 border-secondary text-secondary p-8 text-justify'>
                    <p className='font-medium text-xl sm:text-3xl font-'>
                        Hi There! My name is <mark className='text-tertiary bg-transparent'>Radu-Stefan Popovici</mark> and
                        I am a 3rd year Computer Science student at <a href='https://www.manchester.ac.uk/' target="_blank" className='text-tertiary bg-transparent underline'>The Univeristy of Manchester</a>
                        , in the United Kingdom. Currently working on becoming a <mark className='text-tertiary bg-transparent'>self-taught fullstack developer</mark>, but my ultimate
                        goal is to become an engineer in the <mark className='text-tertiary bg-transparent'>computer vision, pattern recognition and deep-learning</mark> industry.
                        I am passionate about design, AI, computer vision and robotics.<br/><br/>
                        When I am not working, I enjoy working out, bouldering or going out for a drink with
                        my mates!
                    </p>
                </div>
                <div className="lg:w-1/2 border-4 border-secondary w-full bg-[url('/src/assets/misc/vector_grid.png')] object-contain bg-cover bg-no-repeat bg-center flex justify-center items-center">
                    <div className='grid grid-cols-3 gap-4 my-5'>
                        {skills.map((skill, index) => 
                            <div key={index} className='border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>{skill}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(About, 'about');