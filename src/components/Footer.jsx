import React from 'react'

import rings from '../assets/misc/rings.mp4';

const Footer = () => {
  return (
    <div className='bg-secondary flex flex-row items-center justify-around p-4'>
        <span className='font-bold text-5xl text-primary tracking-widest cursor-pointer z-10'>SP</span>
        <video autoPlay loop muted className="w-16 h-16">
              <source src={rings} type="video/mp4" />
        </video>
        <div className='flex flex-col text-primary underline'>
            <a>Instagram</a>
            <a>LinkedIn</a>
            <a>GitHub</a>
            <a href='mailto:poporaduu@gmail.com'>Email</a>
        </div>
    </div>
  )
}

export default Footer