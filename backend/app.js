const express = require('express')
const Quote = require('inspirational-quotes')

const app = express()

app.get('/', (req, res) => {
    res.send(Quote.getQuote())
})

app.listen(5001, () => {
    console.log('Server started successfully')
})