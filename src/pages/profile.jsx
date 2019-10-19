import React, { Component } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Post } from '../components/Post/postComponent'

export class profile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Post />
                {/* <h1>profile Page</h1> */}
            </div>
        )
    }
}

export default profile;
