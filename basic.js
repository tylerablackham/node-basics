const express = require('express')
const app = express();

console.log("Hello, Node.js!")

app.get('/', (req, res) => {
    res.send('Hello, Express!')
})

app.listen(8080, () => {
    console.log('Server listening on http://localhost:8080')
})

