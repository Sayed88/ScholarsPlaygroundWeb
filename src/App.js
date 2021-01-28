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

function App() {
  return (
    <div className="App">
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

          <Route path="/signup">
            <SignUp />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Dashboard />
          </Route>


        </Switch>
      </Router>

    </div>
  );
}

export default App;

