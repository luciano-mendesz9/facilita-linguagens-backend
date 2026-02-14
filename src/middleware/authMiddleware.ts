import AuthService from '@/modules/auth/auth.service.js';
import { Request, Response, NextFunction } from 'express';

const auth = new AuthService();

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
       throw new Error('Token invalid')
    }

    const payload = auth.verifyToken(token);

    if (!payload) {
      throw new Error('Payload invalid')
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

// import AuthService from '@/modules/auth/auth.service.js'
// import UserService from '@/modules/user/user.service.js'
// import { Request, Response, NextFunction } from 'express'

// const auth = new AuthService()
// const userService = new UserService();

// export interface AuthRequest extends Request {
//   user?: {
//     publicUserId: string
//   }
// }

// export function authMiddleware({ requireAdmin }: { requireAdmin: boolean }) {
//   return async (req: AuthRequest, res: Response, next: NextFunction) => {
//     try {

//       console.log('entrou no middle')
//       const token = req.cookies?.auth_token

//       if (!token) {
//         console.log('sem token')
//         throw new Error('Token invalid')
//       }

//       const payload = auth.verifyToken(token)

//       if (!payload) {
//         throw new Error('Payload invalid')
//       }

//       req.user = {
//         publicUserId: payload.publicUserId
//       }

//       console.log(req.user)

//       if (!requireAdmin) {
//         return next()
//       }

//       const user = await userService.getUserByPublicId(req.user.publicUserId)

//       console.log(user)
//       if (
//         !user ||
//         user.role === 'USUARIO' ||
//         user.status !== 'ACTIVE' ||
//         !user.isCollaborator
//       ) {
//         throw new Error('Unauthorized')
//       }

//       console.log('entrou no next')
//       return next()

//     } catch (error) {
//       console.error('Auth middleware error:', error)
//       return res.status(401).json({ message: 'Unauthorized' })
//     }
//   }
// }
