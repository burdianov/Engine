import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/classroom' className='btn btn-light'>
        <i className='fas fa-chalkboard-teacher text-primary' /> Got to
        Classroom
      </Link>
      <Link to='/games' className='btn btn-light'>
        <i className='fas fa-gamepad text-primary' /> Go to Games
      </Link>
    </div>
  );
};

export default DashboardActions;
