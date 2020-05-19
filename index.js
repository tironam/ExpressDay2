const express = require('express')
const { join } = require('path')
const app = express()

// const pieces  = req.url.split('/')
// const op = pieces[1]
// const a = parseInt(pieces[2])
// const b = parseInt(pieces[3])

// My code that I'm very proud of
// app.get('/:op/:a/:b', (req, res) => {
//     const pieces = req.url.split('/')
//     const op = pieces[1]
//     const a = parseInt(pieces[2])
//     const b = parseInt(pieces[3])

//     switch (op) {
//     case 'add':
//         res.end(`${a + b}`)
//         break
//     case 'subtract':
//         res.end(`${a - b}`)
//         break
//     case 'multiply':
//         res.end(`${a * b}`)
//         break
//     case 'divide':
//         res.end(`${a / b}`)
//         break
//     }
//     console.log(req.params)
// })

// Quniton's code
app.get('/:op/:a/:b', (req, res) => {
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)

    switch (req.params.op) {
        case 'add':
            res.end(`${a + b}`)
            break
        case 'subtract':
            res.end(`${a - b}`)
            break
        case 'multiply':
            res.end(`${a * b}`)
            break
        case 'divide':
            res.end(`${a / b}`)
            break
    }
})


// app.get('/michael', (req, res) => {
//     res.send(`I'm Michael! What's up? I like Ghostbusters and Spider-Man, because I'm actually a nine year old from the mid-80's!`)
// })



app.listen(3000, () => {
    console.log('http://localhost:3000')
})