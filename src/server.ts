import express from "express"
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import errorHandler from './errorHandler'

// Routes
import index from './routes/index'

const app = express()

// It's best to use Helmet early in your middleware stack so that its headers are sure to be set.
app.use(helmet())
app.use(morgan('dev'))
app.use(compression())

// Load routes
app.use('/', index)

app.listen(8000, () => console.log("Server running on 8000!!!"))

app.use(errorHandler)