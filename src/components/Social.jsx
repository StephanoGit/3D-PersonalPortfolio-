import React from 'react';

import githubQR from '../assets/qrs/github_qr.svg';
import gif from '../assets/misc/giphy.gif';


const Social = () => {
    return (
        <div className='mx-auto w-[90%] flex flex-row h-[200px] mt-4'>
            <div className='flex flex-row justify-around w-[60%] sm:w-[70%] border-4 border-secondary items-center'>
                <img src={githubQR} className='w-[150px] object-contain cursor-pointer'/>
                <img src={githubQR} className='w-[150px] object-contain cursor-pointer'/>
                <img src={githubQR} className='w-[150px] object-contain cursor-pointer'/>
            </div>
            <img src={gif} loop={true} className='w-[40%] h-auto object-cover'/>
        </div>
    )
}

export default Social