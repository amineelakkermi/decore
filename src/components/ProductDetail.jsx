import React from 'react';
import { useParams } from 'react-router-dom';
import { awningImg, awnings, external, gypsum, herb, internal, marble, papiers, parquet, swatters, trees, waterfalls, wood } from '../assets';
import styles from '../style';

const ProductDetail = () => {
  const { category } = useParams();

  // Données pour chaque catégorie
  const categoryData = {
    paints: {
      title: "دهانات",
      images: [internal , external],
      serviceTitles: ["داخلي", "خارجي"],
    },
    landscaping: {
      title: "تنسيق حدائق",
      images: [trees , herb , waterfalls],
      serviceTitles: ["شجر صناعي", "عشب صناعي", "أحواض شلالات",]
    },
    awning: {
      title: "مضلات و سواتر",
      images: [awnings , swatters],
      serviceTitles: ["مضلات سيارات" , "سواتر"],
    },
    decore: {
      title: "ديكورات",
      images: [marble , parquet , wood, gypsum , papiers],
      serviceTitles: ["الرخام", "باركيه", "بديل الخشب", "جبس", "ورق"]
    },
    // Ajoutez d'autres catégories si nécessaire
  };

  const { title, images, serviceTitles } = categoryData[category] || {};

  return (
  <section className={`${styles.padding} w-full min-h-[100vh] flex flex-col gap-10 justify-center items-center`}>
  <h1 className={`${styles.title} text-center mt-20`}>{title}</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-7xl'>
  {images && images.map((img, index) => (
  <div key={index} className='h-[400px] flex flex-col justify-center items-center'>
  <div className='flex w-full h-[80%] justify-center items-center overflow-hidden'>
  <img src={img} className='w-full h-[100%] object-cover transition-transform duration-300 ease-in-out hover:scale-105'
  alt={`img ${index}`} 
  />
  </div>
  <h4 className='text-center mt-3 text-xl font-semibold'>{serviceTitles[index]}</h4>
  </div>
  ))}
  </div>
</section>

  );
};

export default ProductDetail;
