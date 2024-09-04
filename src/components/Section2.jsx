import React from 'react';
import styles from '../style';

const Section2 = ({ component1: Component1, component2: Component2, title1, img1, title2, img2 }) => {
  return (
    <section className={`flex md:flex-row flex-col relative h-[90vh] w-full`}>
      <Component1 title={title1} img={img1} />
      <Component2 title={title2} img={img2} />
    </section>
  );
};

export default Section2;
