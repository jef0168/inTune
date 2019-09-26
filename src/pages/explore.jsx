import React, { Component } from 'react'
import { Navbar } from '../components/Navbar'

export class explore extends Component {
    render() {
        return (
            <div>
                <div className="navBar">
                    <Navbar />
                </div>
                <h1>Explore Page</h1>
            </div>
        )
    }
}

export default explore;
