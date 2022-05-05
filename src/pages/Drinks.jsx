import React from 'react';
import DrinksResults from '../components/DrinksResults';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Drinks() {
  return (
    <div>
      <Header title="Drinks" visibleSearchIcon />
      <DrinksResults />
      <Footer />
    </div>
  );
}

export default Drinks;
