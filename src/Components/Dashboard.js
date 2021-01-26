import React from 'react';
import './Dashboard.css';
import VideoSection from './VideoSection';
import AboutThePlayground from './AboutThePlayground';
import Footer from './Footer';

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <VideoSection />
            <AboutThePlayground />
            <Footer />
        </div>
    )
}

export default Dashboard
