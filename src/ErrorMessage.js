import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = props => {

  return (
    <div>
		{props.message}
	</div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;