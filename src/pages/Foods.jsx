import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodCard from '../components/FoodCard';

function Foods() {
  return (
    <div>
      <Header title="Foods" visibleSearchIcon />
      <FoodCard />
      <Footer />
    </div>
  );
}

export default Foods;
