import { Request, Response, NextFunction } from 'express';
import { TLSSocket } from 'tls';

export function requireCert(req: Request, res: Response, next: NextFunction) {
  const socket = req.socket as TLSSocket;

  if (socket.authorized) {
    return next();
  } else {
    return res.status(401).json({ message: 'Certificado inválido ou ausente' });
  }
}
