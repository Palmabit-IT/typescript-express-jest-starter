'use strict'

import { Joi } from 'celebrate'

export default {
  query: {
    token: Joi.string().token().required()
  }
}