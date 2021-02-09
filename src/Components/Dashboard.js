import React from 'react';
import './Dashboard.css';
import VideoSection from './VideoSection';
import AboutThePlayground from './AboutThePlayground';
// import Footer from './Footer';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <p>Click " <Link to='/loggedinview'>Here</Link> " to open the Loggedin View page or Login to your account</p>

      <div className="dashboardVideo">
        <ReactPlayer
          url="https://youtu.be/4L-VHqVfmUA"
          width='100%'
          controls="true"
          
        />
      </div>

      {/* <VideoSection /> */}
      <AboutThePlayground />
      {/* <Footer /> */}
    </div>
  )
}

export default Dashboard
