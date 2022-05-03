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
      <h2 data-testid="profile-email">{user}</h2>
      <div>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes

        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes

        </button>
        <button
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
