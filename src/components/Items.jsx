import PropTypes from 'prop-types';

const Items = ({ artists, images, tracks}) => {
  return (
    <li>
      <p>{artists}</p>
      <p>{images}</p>
      <p>{JSON.stringify(tracks)}</p>
    </li>
  );
};

Items.propTypes = {
    artists: PropTypes.string,
    images: PropTypes.string,
    tracks: PropTypes.string,
    id: PropTypes.string,
  };
  

export default Items;
