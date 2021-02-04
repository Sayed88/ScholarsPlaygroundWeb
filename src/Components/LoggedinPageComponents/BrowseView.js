import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import FilterListIcon from '@material-ui/icons/FilterList';
import FilteredList from './FilteredList';
import VideosComments from './VideosComments';

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
            <div className="filter">
                <p> Filter <FilterListIcon /></p>
                {/* <FilteredList /> */}
            </div>
            <VideosComments />
        </div>
    );
}

export default BrowseView;
