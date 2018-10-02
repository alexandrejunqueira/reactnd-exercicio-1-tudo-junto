import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddUser from './AddUser';
import UserList from './UserList';
import ToggleGames from './ToggleGames';
import ErrorMessage from './ErrorMessage';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
  	users: [],
    showGames: true,
    error: '',
  }

  addUser = newUser => {
    if (this.state.users.filter(user => user.userName === newUser.userName).length === 0) {
      	this.setState({ error: '' });
  		return this.setState(oldState => ({ users: [...oldState.users, newUser] }));
    }
    this.setState({ error: 'Duplicated userName' });
  }
  
  toggleShowGames = () => {
  	this.setState(oldState => ({ showGames: !oldState.showGames }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<AddUser handleSubmit={this.addUser} />
		<ToggleGames showGames={this.state.showGames} handleClick={this.toggleShowGames} /> 
		<UserList showGames={this.state.showGames} users={this.state.users} />
		<ErrorMessage message={this.state.error} />
      </div>
    );
  }
}

export default App;
