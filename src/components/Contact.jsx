import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Marquee from "react-fast-marquee";
import { ReactComponent as Wave }from '../assets/misc/wave.svg';


const Contact = () => {
  const [state, handleSubmit] = useForm("xjvqygdp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='w-[90%] mx-auto my-[50px]'>
        <div className='flex flex-row bg-secondary px-4'>
            <span className='w-2/3 text-4xl text-primary flex items-center'>SAY HELLO!</span>
            <Wave className='w-1/3 h-[60px]'></Wave>
        </div>
        <form method="POST" onSubmit={handleSubmit} className='flex flex-col'>
            {/* <label htmlFor="name">Full Name</label> */}
            <input id="name" type="text" name="name" placeholder='FULL NAME' required className='bg-primary border-x-4 border-b-4 border-secondary text-3xl p-2 text-secondary placeholder-secondary'/>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            {/* <label htmlFor="email">Email Address</label> */}
            <input id="email" type="email" name="email" placeholder='EMAIL' required className='bg-primary border-x-4 border-b-4 border-secondary text-3xl p-2 text-secondary placeholder-secondary'/>
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            {/* <label htmlFor="message">Message</label> */}
            <textarea id="message" name="message" placeholder='MESSAGE' required className='bg-primary border-x-4 border-b-4 border-secondary text-3xl p-2 text-secondary placeholder-secondary'></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting} className='bg-tertiary text-right w-2/3 mt-3 text-3xl py-2 px-4 text-secondary'>
                SUBMIT
            </button>
            <ValidationError errors={state.errors} />
        </form>
    </div>
  );
}

export default Contact