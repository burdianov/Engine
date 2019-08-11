import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAlert } from '../../redux/action-creators/alert';

const Alert = ({ alerts, removeAlert }) => {
  const onClose = id => {
    removeAlert(id);
  };
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div
        key={alert.id}
        className={`mt-2 alert alert-dismissible fade show alert-${
          alert.alertType
        }`}
        role='alert'
      >
        {alert.msg}
        <button
          onClick={() => onClose(alert.id)}
          type='button'
          className='close'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(
  mapStateToProps,
  { removeAlert }
)(Alert);
