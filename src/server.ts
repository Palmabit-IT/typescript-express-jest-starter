import express from "express"
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import bodyParser, { OptionsJson } from 'body-parser'
import errorHandler from './errorHandler'

// Routes
import index from './routes/index'

const app = express()

// It's best to use Helmet early in your middleware stack so that its headers are sure to be set.
app.use(helmet())
app.use(morgan('dev'))
app.use(compression())

// BodyParser
const optionsJson: OptionsJson = {
  limit: 1,
  strict: true, // When set to true, will only accept arrays and objects; when false will accept anything JSON.parse accepts
}
app.use(bodyParser.json(optionsJson)); // for parsing application/json

// Load routes
app.use('/', index)

app.listen(8000, () => console.log("Server running on 8000!!!"))

app.use(errorHandler)