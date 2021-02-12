import './App.css';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import PartnerWithUs from './Components/PartnerWithUs';
import WorkWithUs from './Components/WorkWithUs';
import Subscribe from './Components/Subscribe';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import LoggedinView from './Components/LoggedinPageComponents/LoggedinView';
import WatchingView from './Components/LoggedinPageComponents/WatchingView';
import Footer from './Components/Footer';
import BrowseView from './Components/LoggedinPageComponents/BrowseView';
import Home from './Components/LoggedinPageComponents/SidebarComponents/Home';
import Browse from './Components/LoggedinPageComponents/SidebarComponents/Browse';
import More from './Components/LoggedinPageComponents/SidebarComponents/More';
import Notifications from './Components/LoggedinPageComponents/SidebarComponents/Notifications';
import Setting from './Components/LoggedinPageComponents/SidebarComponents/Setting';
import Sidebar from './Components/LoggedinPageComponents/Sidebar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TermsOfUse from './Components/TermsOfUse';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ForgotPassword from './Components/ResetPassword';
import ResetPassword from './Components/ResetPassword';


function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>

          <Route path="/partner_withus">
            <Header />
            <PartnerWithUs />
            <Footer />
          </Route>

          <Route path="/work_withus">
            <Header />
            <WorkWithUs />
            <Footer />
          </Route>

          <Route path="/subscribe">
            <Header />
            <Subscribe />
            <Footer />
          </Route>

          <Route path="/watching_view">
          <div className="fixed-top bg-light">
                <Link to="/dashboard">
                    <h4 className="dashlink">
                        <DashboardIcon />
                        Dashboard
                    </h4>
                </Link>
            </div>
            <WatchingView />
            <Footer />
          </Route>

          <Route path="/browse_view">
          <div className="fixed-top bg-light">
                <Link to="/dashboard">
                    <h4 className="dashlink">
                        <DashboardIcon />
                        Dashboard
                    </h4>
                </Link>
            </div>
            <BrowseView />
            <Footer />
          </Route>

          <Route path="/loggedin_view">
          <div className="fixed-top bg-light">
                <Link to="/dashboard">
                    <h4 className="dashlink">
                        <DashboardIcon />
                        Dashboard
                    </h4>
                </Link>
            </div>
            <LoggedinView />
            <Footer />
          </Route>

          <Route path="/home">
          <div className="fixed-top bg-light ">
                <Link to="/dashboard">
                    <h4 className="dashlink">
                        <DashboardIcon  />
                        Dashboard
                    </h4>
                </Link>
            </div>
            <Home />
            <Footer />
          </Route>

          <Route path="/browse">
            <div className="fixed-top bg-light">
                <Link to="/dashboard">
                    <h4 className="dashlink">
                        <DashboardIcon />
                        Dashboard
                    </h4>
                </Link>
            </div>
            <Browse />
            <Footer />
          </Route>

          <Route path="/more">
          <div className="fixed-top bg-light">
                <Link to="/dashboard">
                    <h4 className="dashlink">
                        <DashboardIcon />
                        Dashboard
                    </h4>
                </Link>
            </div>
            <More />
            <Footer />
          </Route>

          <Route path="/notifications">
          <div className="fixed-top bg-light">
                <Link to="/dashboard">
                    <h4 className="dashlink">
                        <DashboardIcon />
                        Dashboard
                    </h4>
                </Link>
            </div>
            <Notifications />
            <Footer />
          </Route>

          <Route path="/setting">
          <div className="fixed-top bg-light">
                <Link to="/dashboard">
                    <h4 className="dashlink">
                        <DashboardIcon />
                        Dashboard
                    </h4>
                </Link>
            </div>
            <Setting />
            <Footer />
          </Route>

          <Route path="/terms_of_use">
            <div className="fixed-top bg-light">
                <Link to="/dashboard">
                    <h4 className="dashlink">
                        <DashboardIcon />
                        Dashboard
                    </h4>
                </Link>
            </div>
            <TermsOfUse />
          </Route>

          <Route path="/privacy_policy">
            <div className="fixed-top bg-light">
              <Link to="/dashboard">
                <h4 className="dashlink">
                  <DashboardIcon />
                  Dashboard
                </h4>
              </Link>
            </div>
            <PrivacyPolicy />
          </Route>

          <Route path="/reset_password">
            <ResetPassword />
          </Route>



          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/login">
            <Login />
          </Route>


       
          <Route path="/">
            <Header />
            <Dashboard />
            <Footer />
          </Route>


        </Switch>
      </Router>
      

      

    </div>
  );
}

export default App;

