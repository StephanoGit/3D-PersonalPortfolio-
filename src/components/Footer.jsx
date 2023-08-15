import React from 'react'

import rings from '../assets/misc/rings.mp4';

const Footer = () => {
  return (
    <div className='bg-secondary flex flex-row items-center justify-around p-4'>
        <span className='font-bold text-5xl text-primary tracking-widest cursor-pointer z-10'>SP</span>
        <video playsInline autoPlay loop muted className="w-16 h-16">
              <source src={rings} type="video/mp4" />
        </video>
        <div className='flex flex-col text-primary underline'>
            <a href='https://github.com/StephanoGit' target='_blank'>GitHub</a>
            <a href='https://www.instagram.com/raduu_popovici' target='_blank'>Instagram</a>
            <a href='https://www.linkedin.com/in/radustefanpopovici/' target='_blank'>LinkedIn</a>
            <a href='mailto:poporaduu@gmail.com'>Email</a>
        </div>
    </div>
  )
}

export default Footer