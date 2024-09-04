import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link pour la navigation
import styles from '../style';
import { swatters, trees } from '../assets';

const Paints = () => {
  return (
    <div className={`relative  flex flex-1 ${styles.flexCenter}`}>
      <div className='absolute flex justify-center items-center  inset-0 overflow-hidden'>
        {/* Enveloppez l'image dans un Link pour la rendre cliquable */}
        <Link className='w-full h-screen' to="/detail/landscaping">
          <img
            className="w-[100%] h-[100%] object-cover transition-all duration-700 "
            src={trees}
            alt="Background"
          />
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className={`${styles.title} font-bold text-center text-white`}>
            تنسيق حدائق
          </h1>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Paints;
