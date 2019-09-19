import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import Navbar from './components/Navbar';

//Pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';
import explore from './pages/explore';
import profile from './pages/profile';


function App() {
  return (
    <div className="App">
      {/* Used for the path at the end of the url to navigate to the different .js files i have in the pages folder */}
      <Router>
      <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/login" component={login} />
            <Route exact path="/explore" component={explore} />
            <Route exact path="/profile" component={profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
