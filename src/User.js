import React from 'react';
import PropTypes from 'prop-types';

const User = props => {

  const games = props.showGames ? props.games : '*'; 
  
  return (
    <li>
		{props.userName} played {games} games.
	</li>
  );
};

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  showGames: PropTypes.bool.isRequired,
  games: PropTypes.number,
};

User.defaultProps = {
  games: 0,
};

export default User;