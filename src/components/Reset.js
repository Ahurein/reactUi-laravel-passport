import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Reset extends Component {

    state = {
        token: '',
        email: '',
        password: '',
        password_confirmation: '',
        message: ''
    }

    resetHandler = (e) => {
        e.preventDefault();
        let data = {
            token: this.state.token,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }
        axios.post('/resetpassword', data)
            .then(response => {
                document.getElementById('reset-form').reset();
                this.setState({ message: response.data.message })
            })
            .catch((error) => {
                this.setState({ message: error.response.data.message });
            })
    }


    render() {

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
                    <form onSubmit={this.resetHandler} id="reset-form">
                        <h3 className="text-center">Reset</h3>
                        {error}
                        <div class="form-group">
                            <label for="exampleInputEmail1">Token</label>
                            <input type="text" name="token" class="form-control" required onChange={e => this.setState({ token: e.target.value })} />
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

export default Reset;
