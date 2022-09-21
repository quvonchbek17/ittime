const express = require('express')
const dotenv = require('dotenv')
const app = express()
const router = require('./modules')
const cors = require('cors')


dotenv.config()
app.use(express.json())
app.use(cors())
app.use(router)
app.use('/*', (req, res) => res.sendStatus(404))


app.listen(process.env.PORT)
