import React from 'react'


function Message(props) {
    return (
        <article>
            <p>{props.content.title}</p>
            <p>{props.content.message}</p>
            <p>{props.content.author}</p>
        </article>
    )
}

export default Message