// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {

  state = { username: "", password: "" };


  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    axios.post("/api/user-signup", { username, password })
      .then(() => {
        this.setState({ username: "", password: "" });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          <label>Description:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Signup;