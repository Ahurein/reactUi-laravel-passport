import react, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './Nav'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Register from '../components/Register'
import ForgetPassword from '../components/ForgetPassword'
import Reset from '../components/Reset'
import axios from 'axios'


export default class Header extends Component {
    state = {
        user: {}
    }


    setUser = user => {
        this.setState({
            user: user
        })
    }

    componentDidMount() {
        axios.get('/user')
            .then(response => {
                this.setUser(response.data)
                console.log('ok');
                console.log(response.data);
                console.log(this.state.user);

            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <Router>
                <Nav updateUser={this.setUser} />
                <Switch>

                    <Route exact path="/home" component={Home} />
                    <Route exact path="/profile" component={() => <Profile user={this.state.user} />} />
                    <Route exact path="/login" component={() => <Login updateUser={this.setUser} />} />
                    <Route exact path="/register" component={() => <Register updateUser={this.setUser} />} />
                    <Route exact path="/forget" component={ForgetPassword} />
                    <Route exact path="/reset/:id" component={Reset} />
                </Switch>

            </Router>

        )
    }
}