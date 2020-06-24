import React, { useContext } from 'react'
import '../styles/index.css'
import SessionContext from '../constants/context'

function IndexPage() {
    const { session } = useContext(SessionContext)

    return !session.isLoggedIn && <h1>Welcome to Wall App</h1>
}

export default IndexPage