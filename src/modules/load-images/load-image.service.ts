import { NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL } from "@/config/env.js"
import { prisma } from "@/lib/prisma.js"
import { createClient } from "@supabase/supabase-js"
import { randomUUID } from "crypto"

const supabase = createClient(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY
)

type UploadProps = {
    bucket: string
    file: Express.Multer.File
    path?: string
}

class LoadImageService {

    async SupabaseUploadImage({ bucket, file, path }: UploadProps) {

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
}

export default LoadImageService