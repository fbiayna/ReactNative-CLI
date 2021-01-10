const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const userRouter = require('./src/routes/userRouter')

const app = express()
app.use(cors())
const port = process.env.PORT || 5000

app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/user', userRouter)

app.listen(port, () => (
  debug(`Server is running on port ${chalk.blue(port)}`)
))
