import React from 'react';
import propTypes from 'prop-types';

const YoutubeEmbed = ({ embedId }) => (
  <div data-testid="video">
    <iframe
      width="320"
      height="240"
      src={ `https://www.youtube.com/embed/${embedId}` }
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer;
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: propTypes.string.isRequired,
};

export default YoutubeEmbed;
