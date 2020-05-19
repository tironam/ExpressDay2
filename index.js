const express = require('express')
const { join } = require('path')

const app = express()

// This middleware allows you to serve up a full folder of front-end code
app.use(express.static(join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
})

app.listen(3000, () => console.log('http://localhost:3000'))