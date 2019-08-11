import React from 'react';

const Landing = props => {
  return (
    <section className='container mt-5'>
      <h1>Engine</h1>
      <p className='lead'>
        Перед тем как полностью завязать с изучением английского языка, дайте
        себе последний шанс - навестите наш сайт.
      </p>
      <div>
        <a href='signup.html' className='btn btn-primary'>
          Sign Up
        </a>
        <a href='signin.html' className='btn btn-success ml-2'>
          Login
        </a>
      </div>
    </section>
  );
};

export default Landing;
