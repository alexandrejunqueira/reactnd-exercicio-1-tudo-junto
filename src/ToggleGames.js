import React from 'react';
import PropTypes from 'prop-types';

const ToggleGames = props => (  
  <button onClick={props.handleClick}> 
    {props.showGames ? 'Hide the Number of Games Played' : 'Show the Number of Games Played'}
  </button>  
);

ToggleGames.propTypes = {
  showGames: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ToggleGames;