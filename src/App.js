import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

//Components
import Navbar from './components/Navbar';

//Pages
import home from './pages/home';
import signin from './pages/signin';
import explore from './pages/explore';
import profile from './pages/profile';


function App() {
  return (
    <div className="App">
      {/* Used for the path at the end of the url to navigate to the different .js files i have in the pages folder */}
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/signin" component={signin} />
            <Route exact path="/explore" component={explore} />
            <Route exact path="/profile" component={profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
