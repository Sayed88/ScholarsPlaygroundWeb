
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={FolderOpenIcon} title="Browse" />
            <SidebarRow Icon={MoreHorizIcon} title="More" />            
            <SidebarRow Icon={NotificationsIcon} title="Notifications" />
            <SidebarRow Icon={SettingsIcon} title="Setting" />
            <hr />
        </div>
    );
}

export default Sidebar;