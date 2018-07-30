import express from "express"
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import bodyParser, { OptionsJson } from 'body-parser'
import { errors as celebrateErrors } from 'celebrate'
import errorHandler from './errorHandler'
import { load as loadRoutes } from './routes'

const app = express()

// It's best to use Helmet early in your middleware stack so that its headers are sure to be set.
app.use(helmet())
app.use(morgan('dev'))
app.use(compression())

// BodyParser
const optionsJson: OptionsJson = {
  limit: '100kb',
  strict: true, // When set to true, will only accept arrays and objects; when false will accept anything JSON.parse accepts
}
app.use(bodyParser.json(optionsJson)); // for parsing application/json

// Load routes
loadRoutes(app)

const appPort = process.env.APP_PORT || 8000
app.listen(appPort, () => console.log(`Server running on ${appPort}!!!`))

// Errors Handlers
app.use(celebrateErrors())
app.use(errorHandler)