import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvqygdp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input id="name" type="text" name="name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}

export default Contact