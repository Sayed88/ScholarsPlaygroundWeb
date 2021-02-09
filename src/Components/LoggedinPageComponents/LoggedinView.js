import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import VideoPlay from './VideoPlay';
import "./LoggedinView.css";
import VideosLists from './VideosLists';
import UserLogin from './UserLogin';
import MyFilteringComponent from './MyFilteringComponent';
import ViewListIcon from '@material-ui/icons/ViewList';


function LoggedinView() {

    // const countries =
    // [

    //     "Afghanistan",
    //     "Åland Islands",
    //     "Albania",
    //     "Algeria"
    // ];

    return (
        <div className="loggedinView">


            {/* <div className="fixed-top bg-light">
                <Link to="/dashboard">
                    <h4 className="dashlink">
                        <ViewListIcon />
                        Dashboard
                    </h4>
                </Link>
            </div> */}
            <br />
            <br />
            <h1>Logged in View Mode</h1>
            
            <div>
                <UserLogin />
            </div>

            <div className="browseViewPage">
                <Link to="/browseview">
                    Click here to see the Browse View Page
                </Link>
            </div>

            {/* <div className="filter">
                <MyFilteringComponent content={countries} />              
            </div> */}

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