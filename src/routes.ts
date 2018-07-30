'use strict'

import { Application } from 'express'

// Routes
import index from './routes/index'

export function load(app: Application) {
  app.use('/', index)
}