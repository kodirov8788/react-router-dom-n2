import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css"
function About() {
    return (
        <div>
            <h1>About</h1>
            <Link to={"/"}><h2>Home</h2></Link>
            <Link to={"/blog"}><h2>blog</h2></Link>

        </div>
    )
}

export default About