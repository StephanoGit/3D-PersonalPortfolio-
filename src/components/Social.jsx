import React from 'react';

import githubQR from '../assets/qrs/github-qr.svg';
import instagramQR from '../assets/qrs/instagram-qr.svg';
import linkedinQR from '../assets/qrs/linkedin-qr.svg';
import gif from '../assets/misc/giphy.gif';


const Social = () => {
    return (
        <div className='mx-auto w-[90%] mt-16 flex flex-row'>
            <div className='w-2/3 md:w-1/3 lg:w-2/3 lg:flex-row flex flex-col gap-4 p-4 justify-around border-4 border-secondary'>
                <a href='https://github.com/StephanoGit' target='_blank' className='flex justify-center'><img src={githubQR} className='w-[150px] object-contain cursor-pointer'/></a>
                <a href='https://www.instagram.com/raduu_popovici' target='_blank' className='flex justify-center'><img src={instagramQR} className='w-[150px] object-contain cursor-pointer'/></a>
                <a href='mailto:poporaduu@gmail.com' target='_blank' className='flex justify-center'><img src={linkedinQR} className='w-[150px] object-contain cursor-pointer'/></a>
            </div>
            <img src={gif} loop={true} className='w-1/3 md:w-2/3 lg:w-1/3 lg:max-h-[190px] object-cover'/>
        </div>
    )
}

export default Social