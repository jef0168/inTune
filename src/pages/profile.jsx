import React, { Component } from 'react'
import { Navbar } from '../components/Navbar'

export class profile extends Component {
    render() {
        return (
            <div>
                <div className="navBar">
                    <Navbar />
                </div>
                <h1>profile Page</h1>
            </div>
        )
    }
}

export default profile;
