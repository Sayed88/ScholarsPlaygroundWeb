import React from 'react';
import './SidebarPagesStyle.css';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import UserLogin from '../UserLogin';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


function Home() {
    return (
        <div className="home mt-5">
            <div className="WatchingViewLnk">
                <Link to="loggedinview">
                    <KeyboardBackspaceIcon />
                    back to Loggedin View Page
                </Link>
            </div>
            <UserLogin />
            <div className="homeSections">
                {/* <h1>Home Page</h1> */}
                <Sidebar />
                <div className="homeContent">
                    <h1>Home Page Contents</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
