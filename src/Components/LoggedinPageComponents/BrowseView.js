import React from 'react';
import './BrowseView.css';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import FilterListIcon from '@material-ui/icons/FilterList';
import FilteredList from './FilteredList';
import VideosComments from './VideosComments';
import UserLogin from './UserLogin';
import Sidebar from './Sidebar';

function BrowseView() {
    return (
        <div>
            <Link to="dashboard">
                <h5>Dashboard</h5>
            </Link>
            <Link to="loggedinview">
                <KeyboardBackspaceIcon />
                back to Loggedin View Page
            </Link>
            <h1>Browse View page</h1>

            <UserLogin />
            <div className="filter">
                <p> Filter <FilterListIcon /></p>
                {/* <FilteredList /> */}
            </div>
            <div className="browseView">
                <Sidebar />
                <VideosComments className="browseViewFeed" />
            </div>
        </div>
    );
}

export default BrowseView;
