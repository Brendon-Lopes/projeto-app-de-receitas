import React from 'react';
import propTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import usePath from '../hooks/usePath';

function RecomendationCard({ data }) {
  const { strNameThumbI, strCategoryI, strNameI } = usePath();

  return (
    <div style={ { maxWidth: '900px' } }>
      <Carousel interval={ 4000 }>
        {data.map((rec, index) => (
          <Carousel.Item key={ index }>
            <div
              key={ index }
              data-testid={ `${index}-recomendation-card` }

            >
              <img
                src={ rec[strNameThumbI] }
                alt={ rec[strNameI] }
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h4 style={ { textShadow: '2px 2px 2px black' } }>{rec[strCategoryI]}</h4>
                <h3
                  style={ { textShadow: '2px 2px 2px black' } }
                  data-testid={ `${index}-recomendation-title` }
                >
                  {rec[strNameI]}

                </h3>
              </Carousel.Caption>
            </div>
          </Carousel.Item>))}
      </Carousel>
    </div>
  );
}

RecomendationCard.propTypes = {
  imgSrc: propTypes.string,
  category: propTypes.string,
  name: propTypes.string,
  index: propTypes.number,
}.isRequired;

export default RecomendationCard;
