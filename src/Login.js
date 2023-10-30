import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    
    const errors = {};
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    
    if (Object.keys(errors).length === 0) {
      console.log('Login data:', { username, password });
      this.setState({ username: '', password: '', errors: {} });
    } else {
      this.setState({ errors });
    }
  }

  render() {
    const { username, password, errors } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
