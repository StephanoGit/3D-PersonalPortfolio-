import React from 'react';
import Marquee from "react-fast-marquee";


import { experiences } from '../constants/index.js';
import { ReactComponent as Calendar} from '../assets/calendar.svg';
import { ReactComponent as Pinpoint} from '../assets/navigate-circle.svg';
import { ReactComponent as Arrow } from '../assets/caret-back-outline.svg';




const Experience = () => {
  return (
    <div className="bg-secondary bg-[url('src/assets/misc/vector-wave.svg')] bg-center bg-no-repeat">
        <div className='h-16'></div>
        <ul className='flex flex-col gap-8 lg:items-end w-[90%] mx-auto'>
            {experiences.map((exp, i) => (
                <li key={i} className={`${i % 2 == 0 ? 'lg:self-start' : ''} bg-secondary border-4 border-primary lg:w-[60%] xl:w-[55%] text-primary p-4`}>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl'>{exp.title}</h1>
                        <h2 className='text-2xl'>{exp.company_name}</h2>
                        <div className='flex flex-row gap-8'>
                            <span className='flex text-tertiary'><Pinpoint className='w-5 fill-tertiary mr-1'/>{exp.location}</span>
                            <span className='flex text-tertiary'><Calendar className='w-5 fill-tertiary mr-1'/>{exp.date}</span>
                        </div>
                        <p className='text-xl'>{exp.points}</p>
                    </div>
                </li>
            ))}
        </ul>
        <div className='h-16'></div>
        <Marquee autoFill={true} className='border-4 border-primary p-2 bg-secondary'>
                <div className='flex flex-row'><span className='mx-4 font-medium text-6xl text-primary'>CONTACT</span>
                <Arrow className='w-16 fill-tertiary -rotate-90'/>
                </div>
        </Marquee>
    </div>
  )
}

export default Experience