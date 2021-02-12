import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

function ResetPassword() {
    return (
        <div className="col-md-6 col-sm-12 mx-auto">

          <div class="card text-center mt-5">
            <div class="card-header">
              <h1>Password Reset</h1>
            </div>
            <div class="card-body">
              <h5 class="card-title">Forgot Password</h5>
              <p class="card-text">Enter your e-mail address and we'll send you a link to reset your password.</p>
              <input className="form-control" type="email" placeholder="E-Mail Address" /> <br />
              
              <a href="#" class="btn btn-primary">Submit</a>
            </div>
            <div class="card-footer text-muted">
              <Link to="/">
                Back to Dashboard
              </Link>
            </div>
          </div>





           {/* <div class="card text-center">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Password Reset</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Back to Login</a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <h5 class="card-title">Forgot Password</h5>
                <p class="card-text">Enter your e-mail address and we'll send you a link to reset your password.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </div> */}
            {/* <h1>Forgot Password</h1> 
            <p>Enter your e-mail address and we'll send you a link to reset your password.</p>
            <button className="btn btn-outline-info" type="submit">Submit</button>          */}
        </div>
    );
}

export default ResetPassword;

