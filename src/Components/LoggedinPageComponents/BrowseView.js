import React from 'react';
import './BrowseView.css';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import VideosComments from './VideosComments';
import UserLogin from './UserLogin';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import { Dropdown, Form } from 'react-bootstrap';
function BrowseView() {

    return (
        <div className="browseViewPage">
            <div className="WatchingViewLnk">
                <Link to="loggedin_view">
                    <KeyboardBackspaceIcon />
                    back to Loggedin View Page
                </Link>
            </div>

            <h1>Browse View page</h1>
            <div className="user">
                <UserLogin />
            </div>
            
            <div className="btmLn">
                <div className="searchFilter">
                    <SearchBar />
                </div>                    
            </div>
                
            <div className="browseView">
                <Sidebar />
                <VideosComments className="browseViewFeed" />
            </div>

            <div className="uploadSection">
                <Form>
                    <h5>Upload Your Video Here</h5> <hr /> <br />
                    <Form.Group>
                        <Form.File id="uploadFile" />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default BrowseView;
