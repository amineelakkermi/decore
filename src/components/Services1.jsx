import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link pour la navigation
import styles from '../style';
import { external, trees } from '../assets';

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Services1 = ({title , img}) => {
  return (
    <section className={`relative flex flex-1 ${styles.flexCenter}`}>
      <div className='absolute flex justify-center items-center  inset-0 overflow-hidden'>
        {/* Enveloppez l'image dans un Link pour la rendre cliquable */}
        <Link onClick={scrollTop} className='w-full h-screen' to="/detail/paints">
          <img
            className="w-[100%] h-[100%] object-cover transition-all duration-700 hover:scale-105 "
            src={img}
            alt="Background"
          />
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className={`${styles.title} font-bold text-center text-white`}>
           {title}
          </h1>
        </div>
        </Link>
      </div>
    </section>
  );
}

export default Services1;
