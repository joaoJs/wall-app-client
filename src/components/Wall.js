import React from 'react'
import Message from './Message'
import '../styles/wall.css'

class Wall extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [{title: 'firs message', message: 'this is the first message', author: 'John'}]
        }
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