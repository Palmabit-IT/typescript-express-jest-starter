import dotenv, {  DotenvOptions } from 'dotenv'
const dotenvOptions:  DotenvOptions = {
  path: '.env' + (process.env.NODE_ENV ? '.' + process.env.NODE_ENV : '')
}

export default dotenv.config(dotenvOptions)