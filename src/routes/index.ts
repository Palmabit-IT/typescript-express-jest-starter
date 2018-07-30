import { Router, Request, Response, NextFunction } from 'express';
import validator from '../modules/index/middlewares/validator'
const router = Router()

router.get("/",
  validator,
  (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World')
  })

export default router