import React from 'react';

const Navbar = props => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>
        <i className='fas fa-headphones mr-2' />
        Engine
      </a>
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
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Profile <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Register
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Login
            </a>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link disabled'
              href='#'
              tabIndex='-1'
              aria-disabled='true'
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
