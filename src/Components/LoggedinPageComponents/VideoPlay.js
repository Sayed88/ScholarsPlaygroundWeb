import React from 'react';
import './VideoPlay.css';
import { Link } from 'react-router-dom';

function VideoPlay() {
    return (
        <div className="videoPlay">
            <h3>Video in Loggedin View</h3>
            <Link to="/watching_view">
                <p>Click here to go to Watching Video page</p>
            </Link>
        </div>
    );
}

export default VideoPlay;
