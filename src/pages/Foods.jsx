import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodsResults from '../components/FoodsResults';

function Foods() {
  return (
    <div>
      <Header title="Foods" visibleSearchIcon />
      <p>Foods</p>
      <FoodsResults />
      <Footer />
    </div>
  );
}

export default Foods;
