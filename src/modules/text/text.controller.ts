import { adminMiddleware } from "@/middleware/adminMiddleware.js";
import { authMiddleware, AuthRequest } from "@/middleware/authMiddleware.js";
import { Response, Router } from "express";
import multer from "multer";
import TextService from "./text.service.js";
import UserService from "../user/user.service.js";

const TextRoutes = Router();
const textService = new TextService();
const userService = new UserService();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 4 * 1024 * 1024
    }
})

TextRoutes.post(
    "/",
    authMiddleware,
    adminMiddleware,
    upload.array("images", 3),
    async (req: AuthRequest, res: Response) => {

        try {

            const body = req.body

            const files = req.files as Express.Multer.File[] | undefined

            if (!body.title || !body.authorName || !body.genreId) {
                return res.status(400).json({
                    error: "Campos obrigatórios faltando"
                })
            }

            const user = await userService.getUserByPublicId(req.user?.publicUserId as string);

            if (!user) {
                throw new Error('Usuário não existe');
            }

            const result = await textService.create({
                title: body.title,
                authorName: body.authorName,
                genreId: Number(body.genreId),
                isImageOnly: body.isImageOnly === true || body.isImageOnly === 'true' ? true : false,
                referenceUrl: body.referenceUrl,
                content: body.content,
                files,
                creatorPublicId: req.user?.publicUserId as string
            })

            return res.status(201).json(result)

        } catch (error: any) {

            if (error.message) {
                return res.status(400).json({
                    error: error.message
                })
            }

            console.error(error)

            return res.status(500).json({
                error: "Erro interno"
            })
        }

    }
)

export default TextRoutes