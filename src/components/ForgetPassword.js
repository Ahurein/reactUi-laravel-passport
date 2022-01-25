import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class ForgetPassword extends Component {
    state = {
        email: '',
        message: ''
    };

    formHandler = (e) => {
        e.preventDefault();
        let data = {
            email: this.state.email,
        }
        console.log('before axios');
        axios.post('/forgetpassword', data)
            .then((response) => {
                this.setState({
                    message: response.data.message
                });
                document.getElementById("forget-form").reset();
            })
            .catch((error) => {
                this.setState({
                    message: error.response.data.message
                });
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
                    <form onSubmit={this.formHandler} id="forget-form">
                        <h3 className="text-center">Forget Password</h3>
                        {error}
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" class="form-control" required onChange={e => { this.setState({ email: e.target.value }) }} />
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                        <br />
                        <br />
                        Log in your account: <Link to="/login"> Click here </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default ForgetPassword;
