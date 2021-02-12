import React from 'react';
import './Dashboard.css';
import AboutThePlayground from './AboutThePlayground';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Subscribe from './Subscribe';

function Dashboard() {
  
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      {/* temporary link for the logged in View  */}
      <p>Click " <Link to='/loggedin_view'>Here</Link> " to open the Loggedin View page or Login to your account</p>

      <div className="dashboardVideo">
        <ReactPlayer
          url="https://youtu.be/4L-VHqVfmUA"
          width='100%'
          controls="true"          
        />
      </div>

      <div>
        <AboutThePlayground />
      </div>
      
      <div className="subscribe">
        <Subscribe />
      </div>

    </div>
  );
}

export default Dashboard;
