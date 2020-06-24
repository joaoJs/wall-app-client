import React from 'react'
import Message from './Message'
import '../styles/wall.css'

class Wall extends React.Component {
    constructor() {
        super()
        this.state = {
            error: null,
            isLoaded: false,
            messages: [{title: 'firs message', message: 'this is the first message', author: 'John'}],
            isUserLoggedIn: false 
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/messages")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState((state, props) => ({
                    isLoaded: true,
                    messages: state.messages.concat(result.messages),
                    isUserLoggedIn: result.isUserLoggedIn
                }))
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render() {
        return (
            <div>
                <h2>Bellow are the messages</h2>
                <ul>
                    {this.state.messages.map((message, i) =>
                        <Message content={message} key={i}/>
                    )}
                </ul>
            </div>
        )
    }
}

export default Wall