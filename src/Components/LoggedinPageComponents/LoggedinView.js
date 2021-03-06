import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import VideoPlay from './VideoPlay';
import "./LoggedinView.css";
import VideosLists from './VideosLists';
import UserLogin from './UserLogin';
import { Form } from 'react-bootstrap';

function LoggedinView() {
    
    return (
        <div className="loggedinView">
            <h1>Logged in View Mode </h1>
            
            <div>
                <UserLogin />
            </div>

            <div className="browseViewPage">
                <Link to="/browse_view">
                    Click here to see the Browse View Page
                </Link>
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