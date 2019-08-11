import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log('success');
  };

  return (
    <div className='form-wrapper'>
      <div className='row'>
        <div className='col-sm-10 offset-sm-2'>
          <h1 className='h1 text-primary'>Sign In</h1>
          <p className='lead'>
            <i className='fas fa-user' /> Sign Into Your Account
          </p>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className='form-group row'>
          <label htmlFor='email' className='col-sm-2 col-form-label'>
            Email
          </label>
          <div className='col-sm-10'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter email'
              required
            />
            <small className='form-text text-muted'>Error messages here</small>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='password' className='col-sm-2 col-form-label'>
            Password
          </label>
          <div className='col-sm-10'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Password'
              required
            />
            <div className='col text-right pr-0'>
              <button className='btn btn-primary mt-3'>Login</button>
            </div>
          </div>
        </div>
      </form>
      <div className='my-1'>
        Don't have an account? <Link to='/register'>Sign Un</Link>
      </div>
    </div>
  );
};

export default Login;
