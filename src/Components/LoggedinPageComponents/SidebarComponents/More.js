import React from 'react';
import './SidebarPagesStyle.css';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import UserLogin from '../UserLogin';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


function More() {
    return (
        <div className="more mt-5">
            <div className="WatchingViewLnk">
                <Link to="loggedin_view">
                    <KeyboardBackspaceIcon />
                    back to Loggedin View Page
                </Link>
            </div>
            <UserLogin />
            <div className="moreSections">
                {/* <h1>More page</h1> */}
                <Sidebar />
                <div className="moreContent">
                    <h1>More Page Contents</h1>
                </div>
            </div>
        </div>
    );
}

export default More;
