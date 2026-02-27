import { adminMiddleware } from "@/middleware/adminMiddleware.js";
import { authMiddleware, AuthRequest } from "@/middleware/authMiddleware.js";
import { Response, Router } from "express";
import GenreService from "./genre.service.js";
import { stringify } from "node:querystring";

const GenreRoutes = Router();
const genreService = new GenreService();
// ciar um novo gênero
GenreRoutes.post('/', authMiddleware, adminMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const body: {
            name: string,
            creatorName: string,
            color: string
        } = req.body

        const isValidHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(body.color);

        if (!isValidHexColor) {
            throw new Error('Invalid color');
        }

        const nomeFormatado =
            body.name.charAt(0).toUpperCase() +
            body.name.slice(1).toLowerCase();

        const resultado = await genreService.createGenre({
            name: nomeFormatado,
            creatorName: body.creatorName,
            color: body.color

        })
        if (!resultado) {
            throw new Error("error ao criar genero")
        }
        return res.status(201).json(resultado)


    } catch (error) {
        console.error('Error creating genre:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


export default GenreRoutes;