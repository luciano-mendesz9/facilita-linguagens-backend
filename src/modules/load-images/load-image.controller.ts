import { authMiddleware, AuthRequest } from "@/middleware/authMiddleware.js"
import { Response, Router } from "express"
import multer from "multer"
import LoadImageService from "./load-image.service.js"

const LoadImagesRoutes = Router()

const loadImageService = new LoadImageService()

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 4 * 1024 * 1024
    } 
})

LoadImagesRoutes.post("/upload", authMiddleware, upload.single("image"),
    async (req: AuthRequest, res: Response) => {

        try {

            if (!req.file) {
                return res.status(400).json({
                    error: "Nenhuma imagem enviada"
                })
            }

            const result = await loadImageService.SupabaseUploadImage({
                bucket: "image-texts",
                file: req.file
            })

            return res.status(201).json(result)

        } catch (error: any) {

            if (error.code === "LIMIT_FILE_SIZE") {
                return res.status(400).json({
                    error: "Imagem maior que 4MB"
                })
            }

            console.error(error)

            return res.status(500).json({
                error: "Erro ao fazer upload da imagem"
            })

        }

    }
)

export default LoadImagesRoutes;