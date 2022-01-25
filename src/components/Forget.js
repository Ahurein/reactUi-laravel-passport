import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Forget extends Component {
  render() {
    return (
      <div class="jumbotron col-sm-4 offset-sm-4 mt-5">
        <div class="">
          <form>
            <h3 className="text-center">Forget Password</h3>
            <div class="form-group">
              <label for="exampleInputEmail1">Email Address</label>
              <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <button type="submit" class="btn btn-primary btn-block">Request a new password</button>
            <br />
            Sign In <Link to="/login"> Click here </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Forget;
