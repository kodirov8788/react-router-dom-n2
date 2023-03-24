import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import "./Blog.css"
function Blog() {
    return (
        <div>
            <div className="blog_nav">
                <ul>
                    <li>
                        <NavLink to={"settings"}>Setting</NavLink>
                    </li>
                    <li>
                        <NavLink to={"security"}>Security</NavLink>
                    </li>
                </ul>
            </div>
            <h1>Blog</h1>
            <Link to={"/"}><h2>Home</h2></Link>

            <Link to={"/about"}><h2>About</h2></Link>
            <Outlet />


        </div>
    )
}

export default Blog