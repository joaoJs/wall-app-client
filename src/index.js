import React from 'react'
import ReactDOM from 'react-dom'
import IndexPage from './components/IndexPage'
import SignUpPage from './components/SignUpPage' 
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <main>
            <Navbar />
            <Switch>
                <Route path='/' component={IndexPage} exact />
                <Route path='/register' component={SignUpPage} />
                <Route path='/login' component={LoginPage} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}

ReactDOM.render(<BrowserRouter>
                    <App />
                </BrowserRouter>, 
                document.getElementById('root'))