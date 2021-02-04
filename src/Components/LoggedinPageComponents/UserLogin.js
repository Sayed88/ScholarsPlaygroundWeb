import React from 'react';
import './UserLogin.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function UserLogin() {
    return (
        <div className="userLogin">
            <AccountCircleIcon fontSize="large"/>
            <h5>John / Jane Doe's Playground</h5>            
        </div>
    );
}

export default UserLogin;
