import React from 'react';
import './VideoPlay.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

function VideoPlay() {
    return (
        <div className="videoPlay">
              {/* <ReactPlayer className="videoPlayPlayer"
                    url="https://youtu.be/4L-VHqVfmUA"
                    // controls="true"
                    width="100%"
                /> */}
            <h3>Video in Loggedin View</h3>
            <Link to="/watching_view">
                <p>Click here to go to Watching Video page</p>
            </Link>
        </div>
    );
}

export default VideoPlay;
