import {
  Request,
  Response,
  NextFunction,
} from 'express'

export default function (err: any, req: Request, res: Response, next: NextFunction) {
  res.status(500).send('Something broke!');
}