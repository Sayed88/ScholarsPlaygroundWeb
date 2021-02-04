import React from 'react';
import './Dashboard.css';
import VideoSection from './VideoSection';
import AboutThePlayground from './AboutThePlayground';
// import Footer from './Footer';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Click "
            <Link to='/logged-in-view'>
          Here
            </Link>
                  " to open the Loggedin View page or Login to your account
                 </p>
      <VideoSection />
      <AboutThePlayground />
      {/* <Footer /> */}
    </div>
  )
}

export default Dashboard
