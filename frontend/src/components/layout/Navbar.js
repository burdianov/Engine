import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/action-creators/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <a className='nav-link' onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />
          <span className='d-none d-sm-inline'> Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
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
  );

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
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
