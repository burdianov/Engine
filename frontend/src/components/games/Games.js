import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getWordsFromServer } from './../../redux/action-creators/games';

const Games = ({ getWordsFromServer }) => {
  useEffect(() => {
    getWordsFromServer();
  }, [getWordsFromServer]);

  return (
    <div className='dash-buttons'>
      <Link to='/words-game' className='btn btn-light'>
        <i className='fas fa-file-word text-primary' /> Words Game
      </Link>
    </div>
  );
};

Games.propTypes = {
  getWordsFromServer: PropTypes.func.isRequired
};

export default connect(
  null,
  { getWordsFromServer: getWordsFromServer }
)(Games);
