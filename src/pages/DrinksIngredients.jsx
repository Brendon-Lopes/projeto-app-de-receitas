import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinksIngredientsCard from '../components/DrinksIngredientsCard';

function DrinksIngredients() {
  return (
    <div>
      <Header title="Explore Ingredients" />
      <DrinksIngredientsCard />
      <Footer />
    </div>
  );
}

export default DrinksIngredients;
