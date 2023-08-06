import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants/index.js';

import navIcon from '../assets/navIcon.svg';
import contract from '../assets/contract-outline.svg';
import expand from '../assets/expand-outline.svg';


const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);


    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link 
                    to="/"
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <span className='font-bold text-5xl text-secondary tracking-widest cursor-pointer z-10'>SP</span>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${
                            active === link.title ? "border-secondary" : "border-primary"
                        } border-2 hover:border-secondary p-2 ease-in-out duration-300
                        `} onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`} className='font-bold text-1xl text-secondary tracking-widest cursor-pointer'>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? contract : expand} alt='menu' className='w-[32px] h-[32px] object-contain cursor-pointer z-10'
                        onClick={() => setToggle(!toggle)}/>
                        <div className={`${
                                !toggle ? "hidden" : "flex"
                            } p-6 absolute top-0 right-0 bg-tertiary w-full h-screen flex flex-col align-middle justify-center`}>
                            <ul className='list-none flex justify-center flex-col gap-20 text-center'>
                            {navLinks.map((link) => (
                                <li key={link.id} className={`${
                                    active === link.title ? "text-primary" : "text-secondary"
                                } hover:text-primary p-2 ease-in-out duration-100
                                `} onClick={() => {setActive(link.title); setToggle(!toggle)}}>
                                    <a href={`#${link.id}`} className='font-bold text-2xl tracking-widest cursor-pointer'>{link.title}</a>
                                </li>
                            ))}
                            </ul>
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar