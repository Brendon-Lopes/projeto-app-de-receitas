import React from 'react';
import DrinkCard from '../components/DrinkCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Drinks() {
  return (
    <div>
      <Header title="Drinks" visibleSearchIcon />
      <DrinkCard />
      <Footer />
    </div>
  );
}

export default Drinks;
