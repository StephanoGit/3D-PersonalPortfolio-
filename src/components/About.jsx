import React from 'react';
import Marquee from "react-fast-marquee";


import cvQR from '../assets/qrs/cv_qr.svg';
import {ReactComponent as Arrow} from '../assets/caret-back-outline.svg';



const About = () => {
    const divs = [
        {
          x: 100,
          y: 100,
        },
        {
          x: 200,
          y: 200,
        },
      ];

    return (
        <div className='mx-auto w-[90%] mt-16 flex flex-col gap-4'>
            <div className='bg-secondary flex flex-col-reverse sm:flex-row p-3'>
                <div className='w-full sm:w-2/5'>
                    <a href='#' target='_blank'><img src={cvQR} className='w-full object-contain cursor-pointer'/></a>
                </div>
                <div className='flex flex-col w-full sm:w-3/5 ml-3 justify-between'>
                    <Marquee autoFill={true}>
                        <span className='mx-2 font-medium text-4xl text-primary'>WHO IS THIS GUY?</span>
                    </Marquee>
                    <div>
                        <span className='font-normal text-sm text-primary'>SCAN THE QR CODE FOR MY CV</span>
                    </div>
                    <div className='flex flex-row'>
                        {[...Array(14)].map((e, i) => (<Arrow key={i} alt='arrow' className='w-8 fill-tertiary invisible sm:visible'/>))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row'>
                <div className='w-full sm:w-3/4 border-4 border-secondary text-secondary p-8 text-justify'>
                    <p className='font-normal text-xl sm:text-3xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! <br/><br/>
                        Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut!
                    </p>
                </div>
                <div className="border-4 border-secondary w-full sm:w-1/4 bg-[url('src/assets/misc/vector_grid.png')] object-contain bg-cover bg-no-repeat bg-center flex justify-center items-center">
                    <div className='grid grid-cols-3 gap-4 my-5'>
                        <div className='col-start-1 col-end-2 border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>React</div>
                        <div className='border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>HTML5</div>
                        <div className='border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>Git</div>

                        <div className='col-span-2 border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>CSS/Tailwind/BootStrap</div>
                        <div className='border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>C/C++</div>

                        <div className='border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>Python</div>
                        <div className='border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>Django</div>
                        <div className='border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>Flask</div>

                        <div className='border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>MySQL</div>
                        <div className='border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>Java</div>
                        <div className='border-tertiary rounded-full text-tertiary bg-secondary border-2 px-2 text-center'>Django</div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About