import React from 'react';

import githubQR from '../assets/qrs/github-qr.svg';
import instagramQR from '../assets/qrs/instagram-qr.svg';
import linkedinQR from '../assets/qrs/linkedin-qr.svg';
import gif from '../assets/misc/giphy.gif';
import globe from '../assets/misc/globe.webm';



const Social = () => {
    return (
        <div className='mx-auto w-[90%] mt-16 flex flex-row flex-1'>
            <div className='w-2/3 md:w-1/3 lg:w-2/3 lg:flex-row flex flex-col gap-4 p-4 justify-around border-4 border-secondary'>
                <a href='https://github.com/StephanoGit' target='_blank' className='flex justify-center'><img src={githubQR} className='w-[150px] object-contain cursor-pointer'/></a>
                <a href='https://www.instagram.com/raduu_popovici' target='_blank' className='flex justify-center'><img src={instagramQR} className='w-[150px] object-contain cursor-pointer'/></a>
                <a href='https://www.linkedin.com/in/radustefanpopovici/' target='_blank' className='flex justify-center'><img src={linkedinQR} className='w-[150px] object-contain cursor-pointer'/></a>
            </div>
            {/* <img src={gif} loop={true} className='w-1/3 md:w-2/3 lg:w-1/3 lg:max-h-[190px] object-cover'/> */}
            <div className='flex flex-col justify-around items-center w-1/3 md:w-2/3 lg:w-1/3 border-y-4 border-r-4 border-secondary'>
                <video autoPlay loop muted className="w-32 h-32 sm:w-64 rotate-90 md:rotate-0 lg:hidden">
                    <source src={globe} type="video/mp4" />
                </video>
                <video autoPlay loop muted className="w-32 h-32 sm:w-64 rotate-90 md:rotate-0 lg:hidden">
                    <source src={globe} type="video/mp4" />
                </video>
                <video autoPlay loop muted className="w-32 h-32 sm:w-64 rotate-90 md:rotate-0">
                    <source src={globe} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Social