import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link pour la navigation
import { Awning, Decore, Hero, Navbar, Section2, Section3, Services1 } from '../components';
import { external, heroImg, heroImg2, papiers, parquet, swatters, trees } from '../assets';
import styles from '../style';

const Home = () => {
  return (
    <div>
      <div id='scroll_snap' className="relative h-screen overflow-hidden">
        <div className='absolute inset-0'>
          <img
            className="w-full h-full object-cover"
            src={heroImg2}
            alt="Background"
          />
        </div>
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className={`${styles.title} font-bold text-center text-white`}>
            مرحبا بكم 
          </h1>
        </div>
        <div className="relative z-10 h-full">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Section2 component1={Services1} title1="دهان" img1={external} component2={Services1} title2="تنسيق حدائق" img2={trees} />
      <Section2 component1={Awning} title1="مضلات و سواتر" img1={swatters} component2={Decore} title2="ديكورات" img2={parquet} />
    </div>
  );
}

export default Home;
