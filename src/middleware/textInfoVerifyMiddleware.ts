import { prisma } from '@/lib/prisma.js';
import { Request, Response, NextFunction } from 'express';

export interface AuthRequest extends Request {
    user?: {
        publicUserId: string
    }
}

export async function textInfoVerifyMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
    try {

        const { textInfoId, textQuestionId } = req.params as { textInfoId: string; textQuestionId: string | undefined };

        if (!textInfoId) {
            throw new Error('TextInfoId is required');
        }

        const textInfo = await prisma.textInfo.findUnique({
            where: { publicId: textInfoId },
            select: {
                id: true,
                questions: textQuestionId
                    ? {
                        where: { id: textQuestionId },
                        select: { id: true },
                    }
                    : false,
            },
        });

        if (!textInfo) {
            return res.status(404).json({ message: 'TextInfo not found' });
        }

        if (textQuestionId && (!textInfo.questions || textInfo.questions.length === 0)) {
            return res.status(404).json({ message: 'TextQuestion not found' });
        }

        next();
    } catch (error) {
        console.error('TextInfo middleware error:', error)
        return res.status(401).json({ message: 'TextInfo not Found' })
    }
}


