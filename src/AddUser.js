import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {  
  
  state = {
  	firstName: '',
    lastName: '',
    userName: ''
  }
  
  handleSubmit = event => {
	event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  handleChange = event => {
  	this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      	<label>
          First Name
      	  <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} /> 
      	</label>
      	<label>
          Last Name
      	  <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} /> 
      	</label>
      	<label>
          User Name
      	  <input type="text" value={this.state.userName} name="userName" onChange={this.handleChange} /> 
      	</label>      
		<button>Add</button>
      </form>
    );
  };
};

AddUser.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddUser;