import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'

import bills from './routes/bills'
import users from './routes/users'

import passport from 'passport'

const app = express()

require('./users/auth')(passport)

require('dotenv-safe').config()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cors())

let db = mongoose.connect(process.env.MG_CONN, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise

bills(app, passport)
users(app, passport)

app.listen(3000, () => {
    console.log('Express Server has been started')
})

