import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { verify } from 'jsonwebtoken';

export default function auth(req: Request, res: Response, next: NextFunction) {

  const headerToken = req.headers.authorization;
  const token = headerToken?.replace('Bearer ', '');
  const secret = process.env.TOKEN_SECRET || '';

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || req.socket.remoteAddress;

  if (headerToken) {
    try {
      const user = verify(token ?? '', secret);

      req.user = user;
      req.headers.ip = ip!
      next();
    } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid Token Bearer' });
    }

  } else {
    return res.status(StatusCodes.FORBIDDEN).json({ error: 'Bearer Token Not Found' });
  }

}
