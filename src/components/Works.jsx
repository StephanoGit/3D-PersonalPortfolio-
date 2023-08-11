import React from 'react';
import Marquee from "react-fast-marquee";

import globe from '../assets/misc/globe.webm';
import {ReactComponent as Arrow} from '../assets/caret-back-outline.svg';
import SectionWrapper from '../hoc/SectionWrapper';

import Deck from './Deck'
import styles from './styles.module.css'

const Works = () => {
    return (
        <div className='bg-secondary h-full w-full mt-16'>
            <Marquee autoFill={true} className='border-4 border-primary p-2'>
                <div className='flex flex-row'><span className='mx-4 font-medium text-6xl text-primary'>PROJECTS</span>
                <Arrow className='w-16 fill-tertiary -rotate-90'/>
                </div>
            </Marquee>
            <div className={styles.container}>
                <Deck />
            </div>
            <Marquee autoFill={true} className='border-4 border-primary p-2'>
                <div className='flex flex-row'><span className='mx-4 font-medium text-6xl text-primary'>EXPERIENCE</span>
                <Arrow className='w-16 fill-tertiary -rotate-90'/>
                </div>
            </Marquee>
        </div>
    )
}

export default SectionWrapper(Works, 'work')