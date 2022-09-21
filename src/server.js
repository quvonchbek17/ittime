const express = require('express')
const app = express()


app.use('/*', (req, res) => res.send("Yaxshi"))
const port =  8080

app.listen(port)
