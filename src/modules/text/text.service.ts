import { prisma } from "@/lib/prisma.js";
import LoadImageService from "../load-images/load-image.service.js";

const loadImageService = new LoadImageService();

type CreateTextInput = {
    title: string
    authorName: string
    genreId: number
    isImageOnly?: boolean
    referenceUrl?: string
    content?: string,
    creatorPublicId: string,
    files?: Express.Multer.File[]
}

class TextService {

    async create(data: CreateTextInput) {
        const {
            title,
            authorName,
            genreId,
            isImageOnly,
            referenceUrl,
            content,
            files,
            creatorPublicId
        } = data

        const genre = await prisma.textualGenre.findUnique({
            where: { id: genreId }
        })

        if (!genre) {
            throw new Error("Gênero não encontrado")
        }

        console.log(data)

        if (!isImageOnly && !content) {
            throw new Error("Texto precisa de conteúdo")
        }

        if (isImageOnly && (!files || files.length === 0)) {
            throw new Error("Textos apenas com imagem precisam de pelo menos uma imagem")
        }

        const text = await prisma.textInfo.create({
            data: {
                title,
                authorName,
                referenceUrl,
                isImageOnly: isImageOnly || false,
                genreId,
                creatorPublicId,
                content: isImageOnly
                    ? undefined
                    : {
                        create: {
                            content: content!
                        }
                    },
            },
            include: {
                genre: {
                    select: {
                        color: true,
                        name: true
                    }
                }
            }
        });

        let uploadedImages = 0
        let imageErrors = 0

        if (files && files.length > 0) {

            const filesLimited = files.slice(0, 3)

            for (const file of filesLimited) {

                try {

                    const upload = await loadImageService.SupabaseUploadImage({
                        bucket: "image-texts",
                        file
                    })

                    if (!upload?.url) {
                        imageErrors++
                        continue
                    }

                    await prisma.textImage.create({
                        data: {
                            textInfoId: text.id,
                            url: upload.url
                        }
                    })

                    uploadedImages++

                } catch {
                    imageErrors++
                }
            }
        }

        return {
            text: {
                title: text.title,
                publicId: text.publicId,
                createdAt: text.createdAt,
                genre: text.genre,
                creatorPublicId: text.creatorPublicId
            },
            images: {
                uploaded: uploadedImages,
                errors: imageErrors
            }
        }
    }
    async getManyTextInfo() {

        const texts = await prisma.textInfo.findMany({
            include: {
                genre: {
                    select: {
                        name: true,
                        color: true
                    }
                }
            },
            orderBy: {
                title: "asc"
            }
        })

        return texts.map(text => ({
            title: text.title,
            publicId: text.publicId,
            createdAt: text.createdAt,
            genre: text.genre,
            creatorPublicId: text.creatorPublicId
        }))
    }
    async getTextInfoById(publicId: string) {

        const text = await prisma.textInfo.findUnique({
            where: {
                publicId
            },
            include: {
                genre: {
                    select: {
                        name: true,
                        color: true
                    }
                },
                content: true,
                images: {
                    where: {
                        textInfo: {
                            publicId: publicId
                        }
                    }, select: {
                        url: true
                    }
                }
            }
        })

        if (!text) {
            throw new Error("Texto não encontrado")
        }

        return {
            title: text.title,
            authorName: text.authorName,
            referenceUrl: text.referenceUrl,
            isImageOnly: text.isImageOnly,
            createdAt: text.createdAt,
            genre: text.genre,
            creatorPublicId: text.creatorPublicId,
            content: text.content?.content,
            images: text.images
        }
    }

    async getContentText(textInfopublicId: string) {
        const text = await prisma.textInfo.findUnique({
            where: {
                publicId: textInfopublicId
            },
            select: {
                content: true,
                genre: true
            }
        })
        return text
    }

    async getDetailsText(publicId: string) {
        try {
            const textInfo = await this.getTextInfoById(publicId);

            if (!textInfo) {
                throw new Error("Texto não encontrado")
            }

            const creator = await prisma.user.findUnique({
                where: {
                    publicId: textInfo.creatorPublicId
                },
                select: {
                    firstName: true,
                    lastName: true,
                    publicId: true,
                    image: true
                }
            });

            const textContent = await this.getContentText(publicId);

            const data = {
                publicId: publicId,
                title: textInfo.title,
                authorName: textInfo.authorName,
                referenceUrl: textInfo.referenceUrl,
                isImageOnly: textInfo.isImageOnly,
                createdAt: textInfo.createdAt,
                genre: textInfo.genre,
                creator: creator ? {
                    firstName: creator.firstName || 'Ex-Admin',
                    lastName: creator.lastName || 'Desconhecido',
                    publicId: creator.publicId || null,
                    image: creator.image || null
                } : null,
                content: textContent?.content,
                images: textInfo.images
            }

            return data;

        } catch {
            return null
        }
    }
}

export default TextService