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
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/about">
            <Header />  
            <About />
            <Footer />
          </Route>

          <Route path="/partnerwithus">
            <Header />
            <PartnerWithUs />
            <Footer />
          </Route>

          <Route path="/workwithus">
            <Header />
            <WorkWithUs />
            <Footer />
          </Route>

          <Route path="/subscribe">
            <Header />
            <Subscribe />
            <Footer />
          </Route>

          <Route path="/signup">
            <SignUp />
            <Footer />
          </Route>
          
          <Route path="/login">
            <Login />
            <Footer />
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

