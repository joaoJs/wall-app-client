import React from 'react'
import ReactDOM from 'react-dom'
// import IndexPage from './components/IndexPage'
import SignUpPage from './components/SignUpPage' 
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import Wall from './components/Wall'
import ExitPage from './components/ExitPage'
import { SessionProvider } from './constants/context'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SessionContext from './constants/context'
import IndexPage from './components/IndexPage'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    static contextType = SessionContext

    componentDidMount() {
        console.log('mounted')
        const session = this.context
        console.log(session)
        this.setState({isLoggedIn: session.isLoggedIn})
        console.log(this.state)
    }

    render() {
        return (
            <SessionProvider value={this.state.session}>
                <main>
                    <Navbar sessionState={this.state.session}/>
                    <Switch>
                        <Route path='/' component={IndexPage} exact />
                        <Route path='/register' component={SignUpPage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/wall' component={Wall} />
                        <Route path='/logout' component={ExitPage} />
                        <Route component={Error} />
                    </Switch>
                </main>
            </SessionProvider>
        )
    }
}

ReactDOM.render(<BrowserRouter>
                    <App />
                </BrowserRouter>, 
                document.getElementById('root'))