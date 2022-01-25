import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Profile extends Component {
    render() {


        if (!localStorage.getItem('token')) {
            return <Redirect to="/login" />
        }

        let name, email = '';
        if (this.props.user) {
            name = this.props.user.name;
            email = this.props.user.email;
        }
        // console.log(this.props.user);
        return (
            <div class="jumbotron col-sm-4 offset-sm-4 mt-5">
                <div class="">
                    <ul class="list-group">
                        <li class="list-group-item">Name: {name}</li>
                        <li class="list-group-item">Email: {email}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profile;
