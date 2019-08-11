import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link className='navbar-brand nav-link' to='/'>
            <i className='fas fa-school mr-2 logo' />
            Engine
          </Link>
        </li>
      </ul>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='profile.html'>
              Profile
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/register'>
              Register
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
