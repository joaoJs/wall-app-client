import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {

    return (
        <div className="navBar">
            <Link to="/">Home </Link>
            <Link to="/register">Sign Up </Link>
            <Link to="/login">Login </Link>
            <Link to="/wall">Wall </Link>
        </div>
    )
}

export default Navbar