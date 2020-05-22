import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes'

const app = express()

require('dotenv-safe').config()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

let db = mongoose.connect(process.env.MG_CONN, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise

routes(app)

app.listen(3000, () => {
    console.log('Express Server has been started')
})

