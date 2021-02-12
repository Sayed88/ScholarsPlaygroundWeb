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

            <h1>Logged in View Mode ___ Welcom Back Sholar</h1>
            
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

            <div className="uploadSection">
                <Form>
                    <h5>Upload Your Video Here</h5> <hr /> <br />
                    <Form.Group>
                        <Form.File id="uploadFile" />
                    </Form.Group>
                    <p>Need Confirmation if Upload Video Section is Necessery?</p>
                </Form>
            </div>
            
        </div>
    )
}

export default LoggedinView;