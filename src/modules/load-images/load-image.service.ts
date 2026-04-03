import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL } from "@/config/env.js"
import { prisma } from "@/lib/prisma.js"
import { createClient } from "@supabase/supabase-js"
import { randomUUID } from "crypto"
import { v2 as cloudinary } from 'cloudinary'

const supabase = createClient(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY
)

type SupabaseUploadProps = {
    bucket: string
    file: Express.Multer.File
    path?: string
}

type CloudinaryUploadProps = {
    file: Express.Multer.File,
    folder: string
}

class LoadImageService {

    constructor() {
        cloudinary.config({
            cloud_name: CLOUDINARY_CLOUD_NAME,
            api_key: CLOUDINARY_API_KEY,
            api_secret: CLOUDINARY_API_SECRET,
        })
    }

    async SupabaseUploadImage({ bucket, file, path }: SupabaseUploadProps) {

        try {

            const fileExt = file.originalname.split(".").pop()

            const fileName = `${randomUUID()}.${fileExt}`

            const filePath = path
                ? `${path}/${fileName}`
                : fileName

            const { data, error } = await supabase.storage
                .from(bucket)
                .upload(filePath, file.buffer, {
                    cacheControl: "3600",
                    upsert: false,
                    contentType: file.mimetype
                })

            if (error) {
                console.error("Erro no upload:", error)
                throw new Error("Erro ao enviar imagem")
            }

            const { data: publicUrl } = supabase.storage
                .from(bucket)
                .getPublicUrl(filePath)

            const image = await prisma.image.create({
                data: {
                    url: publicUrl.publicUrl
                }
            })

            return {
                id: image.id,
                url: publicUrl.publicUrl,
                path: data.path
            }

        } catch (error) {

            console.error("Upload error:", error)
            throw error

        }
    }

    async CloudinaryUploadImage({ file, folder }: CloudinaryUploadProps) {

        try {

            const result: any = await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder,
                    },
                    (error, result) => {
                        if (error) return reject(error)
                        resolve(result)
                    }
                )

                stream.end(file.buffer)
            })

            const image = await prisma.image.create({
                data: {
                    url: result.secure_url
                }
            })

            return {
                id: image.id,
                url: result.secure_url,
                public_id: result.public_id
            }

        } catch (error) {
            console.error("Cloudinary upload error:", error)
            throw new Error("Erro ao enviar imagem")
        }
    }
}

export default LoadImageService