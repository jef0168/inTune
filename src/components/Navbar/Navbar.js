import React, { Component } from 'react';
import './style.scss';

//images
import logo from '../images/logo.png';
import Icon from '@mdi/react';
import { mdiSettings, mdiMusicClefTreble, mdiAccount } from '@mdi/js';

// import likes from '../images/Clef-Note.png'
// import profile from '../images/profile.png'
// import explore from '../images/explore.png'
//Material UI
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import SearchIcon from '@material-ui/icons/Search'
// import InputBase from '@material-ui/core/InputBase';

export class Navbar extends Component {
  render() {
    return (
      <div className='navBar'>
        <div className='containerNav'>
          <div className='left'>
            <a href='/' className='home'>
              <div className='logo'>
                <img src={logo} alt='logo' />
              </div>
            </a>
          </div>
          <div className='middle'>
            <form method='get' action=''>
              <input
                className='searchBar'
                type='text'
                placeholder='Search'
                autoCapitalize='none'
                required
              />
              <div className='searchButton' id='s-But'>
                <button type='submit'>
                  Search
                  {/* <div id="s-circle"></div> */}
                  {/* <span></span> */}
                </button>
              </div>
            </form>
          </div>
          <div className='right'>
            <div className='buttons'>
              <div className='explore'>
                {/* <img src={mdiMusicClefTreble} alt="explore" /> */}
                <Icon
                  path={mdiMusicClefTreble}
                  title='Explore'
                  size={1.5}
                  horizontal
                  vertical
                  rotate={180}
                />
              </div>
              <div className='profile'>
                {/* <img src={mdiAccount} alt="profile" /> */}
                <Icon
                  path={mdiAccount}
                  title='Account'
                  size={1.5}
                  horizontal
                  vertical
                  rotate={180}
                />
              </div>
              <div className='settings'>
                {/* <img src={mdiSettings} alt="settings" /> */}
                <Icon
                  path={mdiSettings}
                  title='Settings'
                  size={1.5}
                  horizontal
                  vertical
                  rotate={180}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div className="navBar">
      //     <AppBar color='default' className='appBar' style={{ backgroundColor: '#ffff' }}>
      //         <Toolbar className='nav-container'>
      //             <div className="logo">
      //                 <Button color="inherit" component={Link} to="/"><img src={logo} alt='Logo' /></Button>
      //             </div>
      //             <div className="search">
      //                 {/* <div className="searchIcon" >
      //                 <SearchIcon/>
      //             </div>
      //             <InputBase color = 'default'
      //                 placeholder="Search..."
      //                 inputProps={{ 'aria-labael': 'search'}}
      //             /> */}
      //             </div>
      //             <div className="navButtons">
      //                 <Button color="inherit" component={Link} to="/explore"><img src={explore} alt='explore' /></Button>
      //                 <Button color="inherit"><img src={likes} alt='likes' /></Button>
      //                 <Button color="inherit" component={Link} to="/profile"><img src={profile} alt='profile' /></Button>
      //             </div>
      //         </Toolbar>
      //     </AppBar>
      // </div>
    );
  }
}

export default Navbar;
