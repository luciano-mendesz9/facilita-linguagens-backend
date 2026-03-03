import { prisma } from "@/lib/prisma.js";
import { CreateGenreProps } from "./genre.type.js";
class GenreService {

    // pega todos os gêneros
    async getAllGenres() {
        try {
            const genres = await prisma.textualGenre.findMany({
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
        try {
            const deletedGenre = await prisma.textualGenre.delete({
                where: { id: deleteGenreId }
            });
            return deletedGenre;
        } catch (error) {
         console.error("error a deletar genero", error)
         return null   
        }

    }
}

export default GenreService;