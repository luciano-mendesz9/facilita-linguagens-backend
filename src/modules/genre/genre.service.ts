import { prisma } from "@/lib/prisma.js";
import { CreateGenreProps } from "./genre.type.js";
class GenreService {

    // pega todos os gêneros
    async getAllGenres() {
        try {
            const genres = await prisma.textualGenre.findMany({
                orderBy: {
                    name: 'asc'
                }
            });
            return genres;
        } catch (error) {
            console.error("error a pegar os generos", error)
            return null
        }

    }

    // pega um gênero por ID
    async getGenreById(genreId: number) {
        try {
            const genre = await prisma.textualGenre.findUnique({
                where: { id: genreId }
            });
            return genre;
        } catch (error) {
            console.error("error a pegar o genero por id", error)
            return null
        }
    }


    // cria um novo gênero
    async createGenre(data: CreateGenreProps) {
        try {
            const NewGenre = await prisma.textualGenre.create({
                data: {
                    name: data.name,
                    creatorName: data.creatorName,
                    color: data.color
                }
            });
            return NewGenre
        } catch (error) {
            console.error("error a criar novo genero", error)
            return null
        }

    }

    // atualiza um gênero existente
    async updateGenre(genreId: number, data: any) {
        try {
            const updateGenre = await prisma.textualGenre.update({
                where: { id: genreId },
                data,
            })
            return updateGenre;
        } catch (error) {
            console.error("error a atualizar genero", error)
            return null
        }
    }

    // deleta um gênero
    async deleteGenre(deleteGenreId: number) {
        // verifica se existe gênero
        const genre = await prisma.textualGenre.findUnique({
            where: { id: deleteGenreId }
        });

        if (!genre) {
            return { deleted: false, notFound: true };
        }

        // verifica se existe texto vinculado
        const textCount = await prisma.textInfo.count({
            where: { genreId: deleteGenreId }
        });

        if (textCount > 0) {
            return {
                deleted: false,
                blocked: true,
                reason: 'HAS_TEXT',
                textCount
            };
        }

        await prisma.textualGenre.delete({
            where: { id: deleteGenreId }
        });

        return { deleted: true };
    }

    async deleteManyGenres(ids: number[]) {

        // busca gêneros existentes
        const existingGenres = await prisma.textualGenre.findMany({
            where: { id: { in: ids } },
            select: { id: true }
        });

        const existingIds = existingGenres.map(g => g.id);

        // verifica quais possuem textos
        const genresWithTexts = await prisma.textInfo.groupBy({
            by: ['genreId'],
            where: {
                genreId: { in: ids }
            },
            _count: true
        });

        const blockedIds = genresWithTexts.map(g => g.genreId);

        const deletableIds = existingIds.filter(id => !blockedIds.includes(id));

        let deletedCount = 0;

        if (deletableIds.length > 0) {
            const result = await prisma.textualGenre.deleteMany({
                where: {
                    id: { in: deletableIds }
                }
            });

            deletedCount = result.count;
        }

        return {
            deletedCount,
            blockedIds,
            notFoundIds: ids.filter(id => !existingIds.includes(id))
        };
    }
}

export default GenreService;