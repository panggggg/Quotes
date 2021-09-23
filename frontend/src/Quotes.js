import React, { useState } from 'react'
import axios from 'axios'

export const Quotes = () => {

    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")

    function getQuotes() {
        axios('http://localhost:5001/', { crossdomain: true})
            .then(response => {
                setText(response.data.text)
                setAuthor(response.data.author)
            })
    }

    return (
        <div>
            <button onClick={getQuotes}>
                Generate Quote
            </button>
            <h1>{text}</h1>
            <h3>{`- ${author}`}</h3>
        </div>
    )
}