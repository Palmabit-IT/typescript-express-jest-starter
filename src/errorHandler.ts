import {
  Request,
  Response,
  NextFunction,
} from 'express'

export default function (err: any, req: Request, res: Response, next: NextFunction) {
  const statusCode = err.statusCode || 500
  const message = err.expose ? { message: err.message } : {} // expose property to determine if the message property should be displayed to the client
  res.status(statusCode).send(message);
}