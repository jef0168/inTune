import React from 'react';
import logo from '../images/logo.png'
import axios from 'axios'

export class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',

        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:3000/users/add', user)
            .then(res => console.log(res.data));

        //window.location = '/profile';
        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return <div className="base-container" ref={this.props.containerRef}>
            <form onSubmit={this.onSubmit}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Register</button>
                </div>
            </form>
        </div>
    }
}