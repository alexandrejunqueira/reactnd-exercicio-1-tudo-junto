import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

const UserList = props => {
  return (
    <ul>
    {props.users.map((user, index) => { 
      return <User 
    	key={index} 
    	firstName={user.firstName} 
    	lastName={user.lastName} 
    	userName={user.userName} 
    	showGames={props.showGames} />;
    })}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  showGames: PropTypes.bool.isRequired,
};

export default UserList;
