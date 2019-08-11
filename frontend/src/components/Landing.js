import React from 'react';
import { Link } from 'react-router-dom';

const Landing = props => {
  return (
    <section className='mt-5'>
      <h1 className='text-center'>Engine</h1>
      <p className='lead container'>
        Перед тем как полностью завязать с изучением английского языка, дайте
        себе последний шанс - навестите наш сайт.
      </p>
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

export default Landing;
