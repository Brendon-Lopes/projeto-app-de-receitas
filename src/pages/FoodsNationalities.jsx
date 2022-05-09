import React from 'react';
import ExploreNationality from '../components/ExploreNationality';

import Footer from '../components/Footer';
import Header from '../components/Header';

function FoodsNationalities() {
  return (
    <div>
      <Header title="Explore Nationalities" visibleSearchIcon />
      <ExploreNationality />
      <Footer />
    </div>
  );
}

export default FoodsNationalities;
