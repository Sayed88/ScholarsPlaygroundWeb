import './App.css';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import PartnerWithUs from './Components/PartnerWithUs';
import WorkWithUs from './Components/WorkWithUs';
import Subscribe from './Components/Subscribe';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/partnerwithus">
            <PartnerWithUs />
          </Route>

          <Route path="/workwithus">
            <WorkWithUs />
          </Route>

          <Route path="/subscribe">
            <Subscribe />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Dashboard />
          </Route>


        </Switch>
      </Router>

    </div>
  );
}

export default App;

