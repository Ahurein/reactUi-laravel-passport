import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    message: ''
  }

  registerHandler = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }
    axios.post('/register', data)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.setState({
          isLoggedIn: true
        });
        this.props.updateUser(response.data.user);
      })
  }


  render() {

    if (this.state.isLoggedIn) {
      return <Redirect to="/profile" />
    }
    return (
      <div class="jumbotron col-sm-4 offset-sm-4 mt-5">
        <div class="">
          <form onSubmit={this.registerHandler}>
            <h3 className="text-center">Register</h3>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="text" name="name" class="form-control" required onChange={e => this.setState({ name: e.target.value })} />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" name="email" class="form-control" required onChange={e => this.setState({ email: e.target.value })} />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" class="form-control" required onChange={e => this.setState({ password: e.target.value })} />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input type="password" name="password_confirmation" class="form-control" required onChange={e => this.setState({ password_confirmation: e.target.value })} />
            </div>
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
            <br />
            <br />
            Already have an account <Link to="/login"> Sign In </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
