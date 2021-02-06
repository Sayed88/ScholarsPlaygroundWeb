import './App.css';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import PartnerWithUs from './Components/PartnerWithUs';
import WorkWithUs from './Components/WorkWithUs';
import Subscribe from './Components/Subscribe';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
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

function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/about">
            <Header />
            <About />
          </Route>

          <Route path="/partnerwithus">
            <Header />
            <PartnerWithUs />
          </Route>

          <Route path="/workwithus">
            <Header />
            <WorkWithUs />
          </Route>

          <Route path="/subscribe">
            <Header />
            <Subscribe />
          </Route>

          <Route path="/watchingview">
            <WatchingView />
          </Route>

          <Route path="/browseview">
            <BrowseView />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/browse">
            <Browse />
          </Route>

          <Route path="/more">
            <More />
          </Route>

          <Route path="/notifications">
            <Notifications />
          </Route>

          <Route path="/setting">
            <Setting />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/loggedinview">
            <LoggedinView />
          </Route>

          <Route path="/">
            <Header />
            <Dashboard />
          </Route>


        </Switch>
      </Router>
      <Footer />

    </div>
  );
}

export default App;

