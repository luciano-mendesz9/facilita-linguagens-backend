// import AuthService from "@/modules/auth/auth.service.js";
// import { Request, Response, NextFunction } from "express";

// const auth = new AuthService();
// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//     try {
//         const token = req.cookies?.auth_token;

//         if (!token) {
//             return res.status(401).json({ message: 'Unauthorized' });
//         }

//         const data = auth.undecodeToken(token);
//         if (!data) {
//             return res.status(401).json({ message: 'Unauthorized' });
//         }

//         next();
//     } catch (error) {
//         console.error('Erro no middleware de autenticação:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// }

import AuthService from '@/modules/auth/auth.service.js';
import { Request, Response, NextFunction } from 'express';

const auth = new AuthService()

export interface AuthRequest extends Request {
  user?: {
    publicUserId: string
  }
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.auth_token

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const payload = auth.verifyToken(token)

    if (!payload) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    req.user = {
      publicUserId: payload.publicUserId,
    }

    next()
  } catch (error) {
    console.error('Auth middleware error:', error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}

