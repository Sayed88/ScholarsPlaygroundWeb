import React from 'react';
import "./WatchingView.css";
import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CommentsSection from './Comments';
import UserLogin from './UserLogin';
import ViewListIcon from '@material-ui/icons/ViewList';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ReactPlayer from 'react-player';



function WatchingView() {
    return (
        <div className="WatchingView">
            {/* <div className="dashLnk fixed-top bg-light" >
                <Link to="/dashboard">                    
                    <h4 className="dashlink"><ViewListIcon />Dashboard</h4>
                </Link>
            </div> */}

            <div className="WatchingViewLnk">
                <Link to="/loggedinview">
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
                    {/* <h3 className="video">Video</h3> */}

                    <div className="videoDescription">
                        <h5>Video Title</h5>
                        <p className="videoText">
                            Video Description text here Video Description text here Video Description text here
                            Video Description text here Video Description text here Video Description text here
                            Video Description text here Video Description text here Video Description text here
                        </p>
                        <hr />
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
