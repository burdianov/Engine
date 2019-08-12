import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../redux/action-creators/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    country: '',
    education: ''
  });

  const { country, education } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();

    createProfile(formData, history);
  };

  return (
    <div className='form-wrapper'>
      <div className='row'>
        <div className='col-sm-10 offset-sm-2'>
          <h1 className='h1 text-primary'>Create Your Profile</h1>
          <p className='lead'>
            <i className='fas fa-user' /> Let's get some useful information
          </p>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className='form-group row'>
          <label htmlFor='name' className='col-sm-2 col-form-label'>
            Country
          </label>
          <div className='col-sm-10'>
            <select
              className='form-control'
              name='country'
              value={country}
              onChange={onChange}
            >
              <option value='0'>* Select Country</option>
              <option value='Moldova'>Moldova</option>
              <option value='UAE'>UAE</option>
              <option value='Great Britain'>Great Britain</option>
              <option value='USA'>USA</option>
              <option value='Spain'>Spain</option>
            </select>
            <small className='form-text text-muted'>Error messages here</small>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='name' className='col-sm-2 col-form-label'>
            Education
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              id='education'
              name='education'
              placeholder='Enter Education'
              value={education}
              onChange={onChange}
              // required
            />
            <small className='form-text text-muted'>Error messages here</small>
            <div className='col text-right pr-0'>
              <button className='btn btn-primary mt-3'>Create Profile</button>
            </div>
          </div>
        </div>
      </form>
      <Link className='btn btn-light' to='/dashboard'>
        Go Back
      </Link>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    createProfile
  }
)(withRouter(CreateProfile));
