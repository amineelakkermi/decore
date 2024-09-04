import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../style';
import { awnings, trees } from '../assets';

const Paints = () => {
  return (
    <section className={`relative flex ${styles.flexCenter} w-full h-screen`}>
      <div className='absolute w-full h-screen flex justify-center items-center inset-0 overflow-hidden'>
        {/* Enveloppez l'image dans un Link pour la rendre cliquable */}
        <Link className='h-screen w-full' to="/detail/awning">
          <img
            className="w-[100%] h-[100%]  transition-all duration-700"
            src={awnings}
            alt="Background"
          />
           <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className={`${styles.title} font-bold text-center text-white`}>
            مضلات و سواتر
          </h1>
        </div>
        </Link>
      </div>
    </section>
  );
}

export default Paints;
