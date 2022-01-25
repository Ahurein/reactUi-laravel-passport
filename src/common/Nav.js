import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {

    logout = () => {
        localStorage.clear();
        this.props.updateUser(null);
    }
    render() {
        let profile, buttons = '';

        if (localStorage.getItem('token')) {
            profile = (<li class="nav-item active"><Link class="nav-link" to="/profile">Profile</Link></li >)
            buttons = (<li class="nav-item active"><Link class="nav-link" to="/" onClick={this.logout}>Logout</Link></li >)
        } else {

            buttons = (
                <React.Fragment>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/register">Register</Link>
                    </li>
                </React.Fragment>
            )
        }
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">React|Laravel</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/home">Home</Link>
                        </li>
                        {profile}
                    </ul>

                    <span class="navbar-text">
                        <ul class="navbar-nav mr-auto">
                            {buttons}
                        </ul>
                    </span>
                </div>
            </nav>
        )
    }
}