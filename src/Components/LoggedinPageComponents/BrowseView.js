import React from 'react';
import './BrowseView.css';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import FilterListIcon from '@material-ui/icons/FilterList';
import FilteredList from './FilteredList';
import VideosComments from './VideosComments';
import UserLogin from './UserLogin';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import ViewListIcon from '@material-ui/icons/ViewList';


function BrowseView() {
    return (
        <div className="browseViewPage"> 
           {/* <div className="dashLnk fixed-top bg-light" >
                <Link to="/dashboard">                    
                    <h4 className="dashlink"><ViewListIcon />Dashboard</h4>
                </Link>
            </div> */}

            <div className="WatchingViewLnk">
                <Link to="loggedinview">
                    <KeyboardBackspaceIcon />
                    back to Loggedin View Page
                </Link>
            </div>
            <h1>Browse View page</h1>

            <UserLogin />

            {/* <div className="filter">
                <p> Filter <FilterListIcon /></p>
            </div> */}
                {/* <FilteredList /> */}

                <div className="searchInput">
                    <SearchBar />
                </div>
                
            <div className="browseView">
                <Sidebar />
                <VideosComments className="browseViewFeed" />
            </div>
        </div>
    );
}

export default BrowseView;
