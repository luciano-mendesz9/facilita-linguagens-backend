import { adminMiddleware } from "@/middleware/adminMiddleware.js";
import { authMiddleware, AuthRequest } from "@/middleware/authMiddleware.js";
import { Response, Router } from "express";
import GenreService from "./genre.service.js";

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

        const color = body.color.split('')[0] === '#' ? body.color : `#${body.color}`;
        const isValidHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(color);

        if (!isValidHexColor) {
            return res.status(401).json({ error: 'Invalid Color' })
        }

        const nomeFormatado =
            body.name.charAt(0).toUpperCase() +
            body.name.slice(1).toLowerCase();

        const resultado = await genreService.createGenre({
            name: nomeFormatado,
            creatorName: body.creatorName,
            color: color
        });

        if (!resultado) {
            throw new Error("error ao criar genero")
        }
        return res.status(201).json(resultado)


    } catch (error) {
        console.error('Error creating genre:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

GenreRoutes.get("/", authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const genreId = req.query.id
            ? Number(req.query.id)
            : undefined;

        if (genreId && isNaN(genreId)) {
            return res.status(400).json({ message: "Invalid id" });
        }

        if (genreId) {
            const genre = await genreService.getGenreById(genreId);

            if (!genre) { return res.status(404).json({ message: "Gênero(s) não encontrado(s)" }); }

            return res.status(200).json(genre);
        }
        const genres = await genreService.getAllGenres();
        return res.status(200).json(genres);
    } catch (error) {
        console.error("Error getting genres:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// GenreRoutes.delete(
//     '/:id?',
//     authMiddleware,
//     adminMiddleware,
//     async (req: AuthRequest, res: Response) => {
//         try {
//             const { id } = req.params;
//             const { ids } = req.body;

//             if (Array.isArray(ids) && ids.length > 0) {
//                 const parsedIds = ids.map((id: any) => Number(id)).filter((id: number) => !isNaN(id));

//                 if (parsedIds.length === 0) {
//                     return res.status(400).json({ message: 'IDs inválidos' });
//                 }

//                 const result = await genreService.deleteManyGenres(ids);

//                 return res.status(200).json({
//                     message: 'Gêneros deletados com sucesso',
//                     deletedCount: result.count
//                 });
//             }

//             if (id) {
//                 const genreId = Number(id);

//                 if (isNaN(genreId)) {
//                     return res.status(400).json({ message: 'ID inválido' });
//                 }

//                 const deletedGenre = await genreService.deleteGenre(genreId);

//                 if (!deletedGenre) {
//                     return res.status(404).json({ message: 'Gênero não encontrado' });
//                 }

//                 return res.status(200).json({
//                     message: 'Gênero deletado com sucesso'
//                 });
//             }

//             return res.status(400).json({
//                 message: 'Nenhum ID informado para deleção'
//             });

//         } catch (error) {
//             console.error('Error deleting genre:', error);
//             return res.status(500).json({ message: 'Internal server error' });
//         }
//     }
// );

GenreRoutes.delete('/:id', authMiddleware, adminMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const genreId = Number(req.params.id);

        if (isNaN(genreId)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        const deletedGenre = await genreService.deleteGenre(genreId);

        if (!deletedGenre) {
            return res.status(404).json({ message: 'Gênero não encontrado' });
        }

        return res.status(200).json({
            message: 'Gênero deletado com sucesso'
        });

    } catch (error) {
        console.error('Error deleting genre:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

GenreRoutes.delete('/', authMiddleware, adminMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { ids } = req.body;

        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ message: 'Envie um array de IDs' });
        }

        const parsedIds = ids
            .map((id: any) => Number(id))
            .filter((id: number) => !isNaN(id));

        if (parsedIds.length === 0) {
            return res.status(400).json({ message: 'IDs inválidos' });
        }

        const result = await genreService.deleteManyGenres(parsedIds);

        return res.status(200).json({
            message: 'Gêneros deletados com sucesso',
            deletedCount: result.count
        });

    } catch (error) {
        console.error('Error deleting genres:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default GenreRoutes;