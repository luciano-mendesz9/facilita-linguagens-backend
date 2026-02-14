import { prisma } from '@/lib/prisma.js';
import { Request, Response, NextFunction } from 'express';

export interface AuthRequest extends Request {
  user?: {
    publicUserId: string
  }
}

export async function adminMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  try {

    if (!req.user?.publicUserId) {
      throw new Error('Unauthorized');
    }

    const user = await prisma.user.findFirst({
      where: {
        publicId: req.user.publicUserId,
      }
    })

    if (!user || user.role === 'USUARIO' || user.status !== 'ACTIVE' || !user.isCollaborator) {
      throw new Error('Unauthorized');
    }

    next();
  } catch (error) {
    console.error('Admin Auth middleware error:', error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}


