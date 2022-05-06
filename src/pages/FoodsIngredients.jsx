import React from 'react';
import FoodsIngredientsCard from '../components/FoodsIngredientsCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

function FoodsIngredients() {
  return (
    <div>
      <Header title="Explore Ingredients" />
      <FoodsIngredientsCard />
      <Footer />
    </div>
  );
}

export default FoodsIngredients;
