import React from 'react';
import './BrowseView.css';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import VideosComments from './VideosComments';
import UserLogin from './UserLogin';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import { Dropdown } from 'react-bootstrap';
function BrowseView() {

    return (
        <div className="browseViewPage"> 

            <div className="WatchingViewLnk">
                <Link to="loggedin_view">
                    <KeyboardBackspaceIcon />
                    back to Loggedin View Page
                </Link>
            </div>

            <h1>Browse View page ___ Welcome Back Scholar</h1>
            <div className="user">
                <UserLogin />
            </div>
            
            <div className="btmLn">
                <div className="filterSearch">
                    <div className="filter">
                        <Dropdown>
                            <Dropdown.Toggle variant="light">
                                Filter
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/reset">All</Dropdown.Item>
                                <Dropdown.Item href="#/topic">Topic</Dropdown.Item>
                                <Dropdown.Item href="#/grade">Grade</Dropdown.Item>
                                <Dropdown.Item href="#/partner">Partner</Dropdown.Item>
                                <Dropdown.Item href="#/a-z">Ascending order</Dropdown.Item>
                                <Dropdown.Item href="#/z-a">Descending order</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className="search">
                        <SearchBar />
                    </div>
                    
                </div>
            </div>
                
            <div className="browseView">
                <Sidebar />
                <VideosComments className="browseViewFeed" />
            </div>
        </div>
    );
}

export default BrowseView;
