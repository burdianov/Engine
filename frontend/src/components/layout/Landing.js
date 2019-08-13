import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='mt-5'>
      <h1 className='text-center'>Engine</h1>
      <p className='lead container'>Добро пожаловать на наш сайт!</p>
      <div className='text-center'>
        <Link to='/register' className='btn btn-primary'>
          Sign Up
        </Link>
        <Link to='/login' className='btn btn-success ml-2'>
          Login
        </Link>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
