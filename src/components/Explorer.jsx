import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Explorer() {
  return (
    <section>
      <ButtonGroup
        style={ { width: '100%' } }
        className="me-2"
        aria-label="First group"
      >
        <Link to="/explore/foods">
          <Button
            variant="secondary"
            type="button"
            data-testid="explore-foods"
          >
            Explore Foods
          </Button>
        </Link>
        <Link to="/explore/drinks">
          <Button
            variant="secondary"
            type="button"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </Button>
        </Link>
      </ButtonGroup>
    </section>
  );
}

export default Explorer;
