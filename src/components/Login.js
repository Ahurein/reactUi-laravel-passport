import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
  state = {
    email: '',
    password: '',
    message: ''
  };

  formHandler = (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('/login', data)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        this.setState({
          isLoggedIn: true,
          message: response.data.message
        })
        this.props.updateUser(response.data.user);

      })
      .catch(error => {
        console.log(error);
        this.setState({ message: error.response.data.message })
      })

  }
  render() {

    if (localStorage.getItem('token')) {
      return <Redirect to="/profile" />
    }

    let error;
    console.log(this.state.message);
    if (this.state.message) {
      error = (
        <div className="alert alert-danger" role="alert">
          {this.state.message}
        </div>
      );
    }

    return (
      <div class="jumbotron col-sm-4 offset-sm-4 mt-5">
        <div class="">
          <form onSubmit={this.formHandler}>
            <h3 className="text-center">Login</h3>
            {error}
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" name="email" class="form-control" required onChange={e => { this.setState({ email: e.target.value }) }} />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" class="form-control" required onChange={e => { this.setState({ password: e.target.value }) }} />
            </div>
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
            <br />
            <br />
            Forget password <Link to="/forget"> Click here </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;

