import React from 'react';
import ExploreFoodsComponent from '../components/ExploreFoodsComponent';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoods() {
  return (
    <div>
      <Header title="Explore Foods" />
      <ExploreFoodsComponent />
      <Footer />
    </div>
  );
}

export default ExploreFoods;
