import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
//images
import logo from './logo150.png'
import likes from './Clef-Note.png'
import profile from './profile.png'
import explore from './explore.png'
//Material UI 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase';


export class Navbar extends Component {
    render() {
        return (
            <div className="navBar">
              <AppBar color='default' className='appBar' style={{ backgroundColor: '#ffff' }}>
                <Toolbar className='nav-container'>
                    <div className="logo">
                        <img src={logo} alt='Logo'/>
                    </div>
                    <div className="search">
                        {/* <div className="searchIcon" >
                            <SearchIcon/>
                        </div>
                        <InputBase color = 'default' 
                            placeholder="Search..."
                            inputProps={{ 'aria-labael': 'search'}}
                        /> */}
                    </div>
                    <div className="navButtons">
                        <Button color="inherit" component={Link} to="/explore"><img src={explore} alt='explore'/></Button>
                        <Button color="inherit"><img src={likes} alt='likes'/></Button>
                        <Button color="inherit" component={Link} to="/profile"><img src={profile} alt='profile'/></Button>
                    </div>
                </Toolbar>
            </AppBar>  
            </div>
        )
    }
}

export default Navbar
