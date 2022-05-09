import React from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile({ history }) {
  const user = JSON.parse(localStorage.getItem('user'))?.email;
  function clearLocalStorage() {
    localStorage.clear();
    history.push('/');
  }
  return (
    <div>
      <Header title="Profile" />
      <p
        className="font-weight-bold text-monospace text-center shadow-sm"
        data-testid="profile-email"
      >
        {user}

      </p>
      <div>
        <button
          variant="secondary"
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes

        </button>
        <button
          variant="secondary"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes

        </button>

        <button
          variant="secondary"
          type="button"
          data-testid="profile-logout-btn"
          onClick={ clearLocalStorage }
        >
          Logout

        </button>
      </div>
      <Footer />
    </div>
  );
}
Profile.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
