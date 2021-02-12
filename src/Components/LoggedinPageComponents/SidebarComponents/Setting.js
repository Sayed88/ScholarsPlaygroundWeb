import React from 'react';
import './SidebarPagesStyle.css';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import UserLogin from '../UserLogin';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


function Setting() {
    return (
        <div className="setting mt-5">
            <div className="WatchingViewLnk">
                <Link to="loggedin_view">
                    <KeyboardBackspaceIcon />
                    back to Loggedin View Page
                </Link>
            </div>
            <UserLogin />
            <div className="settingSections">
                {/* <h1>Setting Page</h1> */}
                <Sidebar />
                <div className="settingContent">
                    <h1>Setting Page Contents</h1>
                </div>
            </div>
        </div>
    );
}

export default Setting;
