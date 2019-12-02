import React, { Component } from 'react';
import './homeStyle.scss';
import logo from '../components/images/logo.png';
import music from '../components/images/music.png';

import Icon from '@mdi/react';
import {
  mdiMusicNoteQuarter,
  mdiMusicNoteEighth,
  mdiMusicNoteSixteenth
} from '@mdi/js';

export class home extends Component {
  constructor(props) {
    super(props);
    this.routeChangeLogin = this.routeChangeLogin.bind(this);
    this.routeChangeRegister = this.routeChangeRegister.bind(this);
  }

  routeChangeLogin() {
    let path = '/login';
    this.props.history.push(path);
  }

  routeChangeRegister() {
      let path = '/register';
      this.props.history.push(path);
  }
  

  render() {
    return (
      <div className='home-base'>
        <div className='left'>
          <div className='background'>
            <img src={music} alt='bg' />
          </div>
          <div className='introduction'>
            <div className='first'>
              {/* <img src={quarter} alt="quarter" /> */}
              <Icon
                path={mdiMusicNoteQuarter}
                title='music-note-quarter'
                size={3}
                horizontal
                vertical
                rotate={180}
              />
              <h1>Explore the music world</h1>
            </div>
            <div className='second'>
              {/* <img src={eigth} alt="eigth" /> */}
              <Icon
                path={mdiMusicNoteEighth}
                title='music-note-quarter'
                size={3}
                horizontal
                vertical
                rotate={180}
              />
              <h1>Jam out to new music</h1>
            </div>
            <div className='third'>
              {/* <img src={sixteen} alt="sixteen" /> */}
              <Icon
                path={mdiMusicNoteSixteenth}
                title='music-note-quarter'
                size={3}
                horizontal
                vertical
                rotate={180}
              />
              <h1>Connect with others</h1>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='image'>
            <img src={logo} alt='logo' />
          </div>
          <div className='quote'>
            <h1>Get inTune with the world around you </h1>
            <h2>Join inTune today!</h2>
          </div>
          <div className='signin'>
            <button
              type='button'
              id='loginButton'
              className='btn-login'
              onClick={this.routeChangeLogin}
            >
              {' '}
              Login
            </button>
          </div>
          <div className='signin'>
            <button
              type='button'
              id='registerButton'
              className='btn-login'
              onClick={this.routeChangeRegister}
            >
              {' '}
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
