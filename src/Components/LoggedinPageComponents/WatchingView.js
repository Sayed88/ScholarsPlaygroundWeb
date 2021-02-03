import React from 'react';
import "./WatchingView.css";
import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CommentsSection from './Comments';


function WatchingView() {
    return (
        <div className="WatchingView">
            <Link to="/dashboard">
                <h3>
                    ScholarsPlayground
                </h3>
            </Link>
            <Link to="/loggedinview">
                Back to Loggedin View Page
            </Link>

            <h1>Video Watching View page</h1>
            <div className="watchingVideoView">
                <Sidebar />

                <div className="videoWatchingmode">
                    <h3 className="video">Video</h3>

                    <div className="videoDescription">
                        <h5>Video Title</h5>
                        <p className="videoText">
                            Video Description text here Video Description text here Video Description text here
                            Video Description text here Video Description text here Video Description text here
                            Video Description text here Video Description text here Video Description text here
                        </p>
                        {/* <div className="commentsSection">
                            <h5><span>Comments</span></h5>
                            <div className="comments">
                                <AccountCircleIcon />
                                <p className="commentstext">Here is comments section that you can add to the video</p>
                            </div>
                            <div className="comments">
                                <AccountCircleIcon />
                                <p className="commentstext">Here is comments section that you can add to the video</p>
                            </div>
                            <div className="comments">
                                <AccountCircleIcon />
                                <p className="commentstext">Here is comments section that you can add to the video</p>
                            </div>
                            <div className="comments">
                                <AccountCircleIcon />
                                <p className="commentstext">Here is comments section that you can add to the video</p>
                            </div>
                                <input className="textInput" type="text" placeholder="add your comment here" />
                        </div> */}

                        <CommentsSection />
                    </div>
                </div>

            </div>
        </div>
    );
}


export default WatchingView;
