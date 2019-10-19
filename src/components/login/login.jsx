import React, { Component } from 'react';
import logo from '../images/logo.png'

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <li>
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </li>
                </div>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                </form>
            </div>
            <div className="footer">
                <button type="submit" className="btn">Login</button>
            </div>
        </div>
    }
}