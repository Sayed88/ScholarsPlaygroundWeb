import React from 'react';
import "./WatchingView.css";
import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import CommentsSection from './Comments';
import UserLogin from './UserLogin';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ReactPlayer from 'react-player';



function WatchingView() {

    // Progresbar variable
    const now = 85;

    return (
        <div className="WatchingView">

            <div className="WatchingViewLnk">
                <Link to="/loggedin_view">
                    <KeyboardBackspaceIcon />
                    Back to Loggedin View Page
                </Link>            

                <h1>Video Watching View page</h1>
            </div>
            
            <div><UserLogin /></div>

            <div className="watchingVideoView">
                <Sidebar />
                <div className="videoWatchingmode">
                    <ReactPlayer className="video"
                        url="https://youtu.be/4L-VHqVfmUA"
                        controls="true"
                        width="100%"
                    />
                    <div className="videoDescription">
                        <h5>Video Description</h5>
                        <p className="videoText">
                            Video Description text here Video Description text here Video Description text here
                            Video Description text here Video Description text here Video Description text here
                            Video Description text here Video Description text here Video Description text here
                        </p>
                        <hr />

                        <CommentsSection />
                    </div>

                    <div className="progressBar">
                        <h4 className="progressBarHead" >Progress Bar</h4>
                        <ProgressBar now={now} animated label={`${now}%`} />
                    </div>
                </div>
            </div>

        </div>
    );
}


export default WatchingView;
