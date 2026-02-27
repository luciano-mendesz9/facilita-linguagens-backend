import { prisma } from "@/lib/prisma.js";
import { CreateGenreProps } from "./genre.type.js";
class GenreService {

    // pega todos os gêneros
    async getAllGenres() {

    }

    // pega um gênero por ID
    async getGenreById(id: string) {

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
    async updateGenre(id: string, data: any) {

    }

    // deleta um gênero
    async deleteGenre(id: string) {

    }
}

export default GenreService;