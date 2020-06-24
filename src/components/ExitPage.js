import React from 'react'
import '../styles/index.css'
import SessionContext from '../constants/context'

class ExitPage extends React.Component {
    static contextType = SessionContext

    componentDidMount() {
        const { setSession } = this.context
        const expiredSession = {isLoggedIn: false}
        setSession(expiredSession)    
    }

    render() {
        return <h1>Bye</h1>
    }
}

export default ExitPage