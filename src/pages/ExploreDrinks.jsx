import React from 'react';
import ExploreDrinksComponent from '../components/ExploreDrinksComponent';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinks() {
  return (
    <div>
      <Header title="Explore Drinks" />
      <ExploreDrinksComponent />
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
