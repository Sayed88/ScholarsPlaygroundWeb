
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/home" className="sideLinks">
                <SidebarRow className="sidRw" selected Icon={HomeIcon} title="Home" />
            </Link> 
            <Link to="/browse" className="sideLinks">
                <SidebarRow Icon={FolderOpenIcon} title="Browse" />
            </Link>
            <Link to="/more" className="sideLinks">
                <SidebarRow Icon={MoreHorizIcon} title="More" />
            </Link>         
            <Link to="notifications" className="sideLinks">
                <SidebarRow Icon={NotificationsIcon} title="Notifications" />
            </Link>
            <Link to="setting" className="sideLinks">
                <SidebarRow Icon={SettingsIcon}  title="Setting" />
            </Link>
            {/* <hr /> */}
        </div>
    );
}

export default Sidebar;