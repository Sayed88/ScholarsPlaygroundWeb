import React from 'react';
import { Link } from 'react-router-dom';

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
          
        </div>
    );
}

export default ResetPassword;

