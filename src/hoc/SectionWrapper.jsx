import React from "react";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section>
        <span className='hash-span h-0' id={idName}></span>
        <Component />
      </section>
    );
  };

export default SectionWrapper;
