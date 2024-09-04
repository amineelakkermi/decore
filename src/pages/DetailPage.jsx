import React from 'react';
import { useParams } from 'react-router-dom'; // Importez useParams pour récupérer le paramètre de la route
import { Navbar, Navbar2, ProductDetail } from '../components';

const DetailPage = () => {
  const { category } = useParams(); // Récupérez la catégorie depuis l'URL

  return (
    <div>
      <Navbar2 />
      <div>
      <ProductDetail category={category} /> {/* Passez la catégorie au composant ProductDetail */}
      </div>
    </div>
  );
}

export default DetailPage;
