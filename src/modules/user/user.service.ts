//import { Prisma } from "@prisma/client";
import { CreateUserProps } from "./user.types.js";
import { prisma } from "@/lib/prisma.js";

class UserService {
    async getUserByPublicId(userId: string) {
        try {
            const user = await prisma.user.findUnique({
                where: { publicId: userId },
            });
            return user;
        } catch (error) {
            console.error("Erro ao buscar user via PublicId", error);
            return null;
        }
    }

    async getUserByEmail(email: string) {
        try {
            const user = await prisma.user.findUnique({
                where: { email },
            });
            return user;
        } catch (error) {
            console.error("Erro ao buscar user via Email:", error);
            return null;
        }
    }

    async getAllUsers({ cursor, limit = 50, }: { cursor?: string; limit?: number; }) {
        try {
            const where = {
                isCollaborator: false,
                isSuperAdmin: false,
            };

            const users = await prisma.user.findMany({
                where,
                orderBy: [
                    { createdAt: "desc" },
                    { id: "desc" },
                ],
                take: limit + 1, // pega 1 a mais pra saber se tem mais
                ...(cursor && {
                    cursor: {
                        id: Number(cursor), // se cursor for id numérico
                    },
                    skip: 1, // evita repetir o último item
                }),
                select: {
                    id: true, // necessário pro cursor
                    publicId: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    image: true,
                    status: true,
                    createdAt: true,
                },
            });

            let nextCursor: number | null = null;

            if (users.length > limit) {
                const nextItem = users.pop(); // remove o extra
                nextCursor = nextItem!.id;
            }

            const total = await prisma.user.count({ where });

            return {
                data: users,
                nextCursor,
                total,
                hasMore: !!nextCursor,
            };
        } catch (error) {
            console.error("Erro ao buscar users:", error);
            throw error;
        }
    }

    async getAdmins({ publicUserId }: { publicUserId?: string }) {
        try {
            const admins = await prisma.user.findMany({
                where: {
                    publicId: publicUserId || undefined,
                    isCollaborator: true,
                },
                omit: {
                    id: true,
                    updatedAt: true,
                    createdAt: true,
                }
            });
            return admins;
        } catch (error) {
            console.error("Erro ao buscar admin via Id:", error);
            return null;
        }
    }

    async createUser(data: CreateUserProps) {
        try {
            const newUser = await prisma.user.create({
                data: {
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                }
            });

            await prisma.account.create({
                data: {
                    userId: newUser.id,
                    password: data.hashPassword,
                    provider: 'CREDENTIALS',
                    providerAccountId: 'CREDENTIALS-' + newUser.publicId,
                }
            });
            return newUser;
        } catch (error) {
            console.error("Erro ao criar novo user:", error);
            return null;
        }
    }

    async updateUserByPublicId(userId: string, data: any /*Prisma.UserUpdateInput*/) {

        try {
            const update = await prisma.user.update({
                where: { publicId: userId },
                data,
            });
            return update;
        } catch (error) {
            console.error("Erro ao atualizar user via PublicId:", error);
            return null;
        }
    }
}

export default UserService;
