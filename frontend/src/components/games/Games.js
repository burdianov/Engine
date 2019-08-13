import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/words-game' className='btn btn-light'>
        <i className='fas fa-file-word text-primary' /> Words Game
      </Link>
    </div>
  );
};

export default Games;
