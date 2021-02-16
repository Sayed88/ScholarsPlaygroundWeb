import React from 'react';
import './SidebarPagesStyle.css';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import UserLogin from '../UserLogin';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import VideosLists from '../VideosLists';
import SearchBar from '../SearchBar';

function Home() {
    return (
        <div className="home mt-5">
            <div className="WatchingViewLnk">
                <Link to="loggedin_view">
                    <KeyboardBackspaceIcon />
                    back to Loggedin View Page
                </Link>
            </div>
            <UserLogin />

            <div className="search-filter">
                <SearchBar />
            </div>
            <div className="homeSections">
                <Sidebar />
                <div className="homeContent">
                    <h1>Home Page Contents -- Scholar</h1>
                    <VideosLists />
                </div>
            </div>
        </div>
    );
}

export default Home;
