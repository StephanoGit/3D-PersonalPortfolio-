import React from 'react';

import githubQR from '../assets/qrs/github-qr.svg';
import instagramQR from '../assets/qrs/instagram-qr.svg';
import emailQR from '../assets/qrs/email-qr.svg';

import gif from '../assets/misc/giphy.gif';


const Social = () => {
    return (
        <div className='mx-auto w-[90%] flex flex-row h-auto mt-4'>
            <div className='flex flex-row flex-wrap justify-around w-[60%] sm:w-[70%] border-4 border-secondary items-center'>
                <a href='https://github.com/StephanoGit' target='_blank'><img src={githubQR} className='w-[150px] object-contain cursor-pointer'/></a>
                <a href='https://www.instagram.com/raduu_popovici' target='_blank'><img src={instagramQR} className='w-[150px] object-contain cursor-pointer'/></a>
                <a href='mailto:poporaduu@gmail.com' target='_blank'><img src={emailQR} className='w-[150px] object-contain cursor-pointer'/></a>
            </div>
            <img src={gif} loop={true} className='w-[40%] h-auto lg:max-h-[160px] object-cover'/>
        </div>
    )
}

export default Social