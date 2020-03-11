const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()
server.use(express.json())
server.use(cors())
server.use(helmet())

const authRouter = require('../auth/auth-router.js')
const authenticate = require('../auth/authenticate-middleware.js')
const jokesRouter = require('../jokes/jokes-router.js')

server.use('/api/auth', authRouter)
server.use('/api/jokes', authenticate, jokesRouter)

module.exports = server
