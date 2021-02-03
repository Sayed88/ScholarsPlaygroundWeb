import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import VideoPlay from './VideoPlay';
import "./LoggedinView.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideosLists from './VideosLists';

function LoggedinView() {
    return (
        <div className="loggedinView">


            <Link to="/dashboard">
                <h3 className="dashlink">Dashboard</h3>
            </Link>
            <br />
            <br />
            <h1>Logged in View Mode</h1>
            
            <div className="userLogin">
                <AccountCircleIcon fontSize="large"/>
                <h5>John / Jane Doe's Playground</h5>
            </div>

            <div className="loggedinViewComponentsSection">
                <Sidebar />
                <VideoPlay />
            </div>
            <div className="videosListsSection">
                <VideosLists />
            </div>            
        </div>
    )
}

export default LoggedinView;