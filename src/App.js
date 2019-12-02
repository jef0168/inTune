import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

//Components
// import Navbar from './components/Navbar/Navbar';

//Pages
import home from './pages/home';
// import login from './pages/loginForm'
import register from './components/auth/register'
import explore from './pages/explore';
import profile from './pages/profile';

function App() {
  return (
    <Fragment>
      {/* Used for the path at the end of the url to navigate to the different .js files i have in the pages folder */}
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={home} />
            {/* <Route exact path='/login' component={loginForm}/> */}
            <Route exact path='/register' component={register}/>
            <Route exact path='/explore' component={explore} />
            <Route exact path='/profile' component={profile} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
