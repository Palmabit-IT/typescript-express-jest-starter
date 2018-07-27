import express from "express"
import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet'
import morgan from 'morgan'
import errorHandler from './errorHandler'

const app = express()

// It's best to use Helmet early in your middleware stack so that its headers are sure to be set.
app.use(helmet())
app.use(morgan('dev'))

app.listen(8000, () => console.log("Server running on 8000!!!"))

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World')
})

app.use(errorHandler)