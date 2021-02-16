import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function SignOut() {
    return (
        <div className="signOut">
            <Link to="/">
                <Button variant="outline-primary btn-sm m-2">
                        <ExitToAppIcon className="navIcn" />
                        Sign out
                </Button>
            </Link>            
        </div>
    );
}

export default SignOut;
