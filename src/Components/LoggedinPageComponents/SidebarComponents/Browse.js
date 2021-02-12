import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarPagesStyle.css';
import Sidebar from '../Sidebar';
import UserLogin from '../UserLogin';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


function Browse() {
    return (
        <div className="browse mt-5">
            <div className="WatchingViewLnk">
                <Link to="loggedin_view">
                    <KeyboardBackspaceIcon />
                    back to Loggedin View Page
                </Link>
            </div>
            <UserLogin />
            <div className="browseSections">
                <Sidebar />
                <div className="browseContent">
                    <h1>Browse Page contents </h1>
                </div>
            </div>
        </div>
    );
}

export default Browse;
