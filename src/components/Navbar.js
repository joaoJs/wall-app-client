import React, {useContext, Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import SessionContext from '../constants/context'

function Navbar() {
    const { session } = useContext(SessionContext)
    const isLoggedIn = session.isLoggedIn

    return (
        <Fragment>
            { isLoggedIn ?
            <div className="navBar">
                <Link to="/logout">Logout </Link>
                <Link to="/wall">Wall </Link>
            </div>
            :
            <div className="navBar">
                <Link to="/">Home </Link>
                <Link to="/register">Sign Up </Link>
                <Link to="/login">Login </Link>
                <Link to="/wall">Wall </Link>
            </div>
            }
        </Fragment>
    )
}

export default Navbar