import { mailer } from '@/modules/smtp/smtp.service.js';
import UserService from '../user/user.service.js';
import { SignUpProps, SignInProps, TokenPayloadProps } from '@/modules/auth/auth.types.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CLIENT_DOMAIN, IS_PRODUCTION, JWT_SECRET } from '@/config/env.js';
import { verificationEmailHTMLTemplate } from '../smtp/smtp.html.js';
import { prisma } from '@/lib/prisma.js';

export type ProvidersAuthType = 'GOOGLE';
export type UserSocialAuthType = { image?: string, firstName: string, lastName: string, email: string, sub: string }

class AuthService {
    private userService: UserService = new UserService();

    async hasPermission(userPublicId: string, key: string): Promise<boolean> {
        try {
            const user = await prisma.user.findUnique({
                where: { publicId: userPublicId },
                include: {
                    permissions: {
                        include: {
                            permission: true
                        }
                    }
                }
            })

            if (!user) {
                throw new Error('Usuário não encontrado');
            }

            return user.permissions.some(
                p => p.permission.key === key
            );

        } catch (error) {
            console.error('Erro ao verificar permissão do usuário:', error);
            return false;
        }
    }

    async signUp(data: SignUpProps) {
        try {
            const hashPassword = await bcrypt.hash(data.password, 10);

            const user = await this.userService.createUser({
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                hashPassword,
            });

            if (!user) {
                throw new Error('Erro ao criar usuário');
            }

            const token = this.generateToken({
                isCollaborator: user.isCollaborator,
                isSuperAdmin: user.isSuperAdmin,
                publicUserId: user.publicId
            });

            /* EM PRODUÇÃO PRECISO DESCOMENTAR A LINHA ABAIXO E APAGAR A CONSECULTIVA */
            //await this.sendAccountVerificationEmail(data.email);
            await this.userService.updateUserByPublicId(user.publicId, { status: 'ACTIVE' }); // comentar esssa linha em produção

            return {
                user,
                token,
            };
        } catch (error) {
            console.error('Erro no sign-up:', error);
            return null
        }
    }

    async socialAuth(data: { provider: ProvidersAuthType, user: UserSocialAuthType }) {
        try {
            // 1. Verifica se essa conta social já existe
            const account = await prisma.account.findUnique({
                where: {
                    provider_providerAccountId: {
                        provider: data.provider,
                        providerAccountId: data.user.sub,
                    },
                },
                include: { user: true },
            })

            // 2. Se já existe → login direto
            if (account) {
                const token = this.generateToken({
                    isCollaborator: account.user.isCollaborator,
                    isSuperAdmin: account.user.isSuperAdmin,
                    publicUserId: account.user.publicId,
                })

                return { user: account.user, token }
            }

            // 3. Verifica se já existe usuário com esse email
            const existingUser = await prisma.user.findUnique({
                where: { email: data.user.email },
            })

            // 4. Se existir, linka conta social
            if (existingUser) {
                await prisma.account.create({
                    data: {
                        provider: data.provider,
                        providerAccountId: data.user.sub,
                        userId: existingUser.id,
                    },
                })

                const token = this.generateToken({
                    isCollaborator: existingUser.isCollaborator,
                    isSuperAdmin: existingUser.isSuperAdmin,
                    publicUserId: existingUser.publicId,
                })

                return { user: existingUser, token }
            }

            // 5. Se não existir nada → cria user + account
            const user = await prisma.user.create({
                data: {
                    email: data.user.email,
                    firstName: data.user.firstName,
                    lastName: data.user.lastName,
                    image: data.user.image,
                    status: 'ACTIVE',
                    accounts: {
                        create: {
                            provider: data.provider,
                            providerAccountId: data.user.sub,
                        },
                    },
                },
            })

            const token = this.generateToken({
                isCollaborator: user.isCollaborator,
                isSuperAdmin: user.isSuperAdmin,
                publicUserId: user.publicId,
            })

            return { user, token }

        } catch (error) {
            console.error('Erro na autenticação social:', error)
            return null
        }
    }


    async sendAccountVerificationEmail(email: string) {
        try {
            const user = await this.userService.getUserByEmail(email);
            if (!user) {
                throw new Error('Usuário não encontrado');
            }

            const token = await prisma.accountVerificationToken.create({
                data: {
                    userId: user.publicId,
                    expiresAt: new Date(Date.now() + 15 * 60 * 1000),
                }
            })

            await mailer.sendMail({
                from: '"Facilita Linguagens" <seuemail@gmail.com>',
                to: email,
                subject: 'Confirme sua conta no Facilita Linguagens 🚀',
                html: verificationEmailHTMLTemplate({ token: token.id, name: user.firstName })
            });

            return {
                message: 'Email de verificação enviado com sucesso',
                success: true,
            }

        } catch (error) {
            console.error('Erro ao enviar email de verificação:', error);
            return {
                message: 'Erro ao enviar email de verificação',
                success: false,
            }
        }
    }

    async changePassword(userPublicId: string, newPassword: string) {
        try {
            const hashPassword = await bcrypt.hash(newPassword, 10);
            const isUpdated = await this.userService.updateUserByPublicId(userPublicId, { password: hashPassword });

            if (!isUpdated) {
                throw new Error('Erro ao alterar senha');
            }
            return true;
        } catch (error) {
            console.error('Erro ao alterar senha:', error);
            return false;
        }
    }

    async signIn(data: SignInProps) {
        try {
            const user = await prisma.user.findUnique({
                where: { email: data.email },
            });

            if (!user) {
                throw new Error('Email ou senha inválidos');
            }

            const account = await prisma.account.findFirst({
                where: {
                    userId: user.id,
                    provider: 'CREDENTIALS'
                }
            })

            if (!account) {
                throw new Error('Email ou senha inválidos');
            }

            const passwordMatch = await bcrypt.compare(
                data.password,
                account.password || ''
            );

            if (!passwordMatch) {
                throw new Error('Email ou senha inválidos');
            }

            const token = this.generateToken({
                isCollaborator: user.isCollaborator,
                isSuperAdmin: user.isSuperAdmin,
                publicUserId: user.publicId
            });

            return {
                user,
                token,
            };
        } catch (error) {
            console.error('Erro no sign-in:', error);
            return null;
        }
    }

    async validateAccount(token: string) {
        try {

            const verificationToken = await prisma.accountVerificationToken.findUnique({
                where: { id: token },
            });

            if (!verificationToken) {
                throw new Error('Token de verificação inválido');
            }

            if (verificationToken.expiresAt < new Date()) {
                throw new Error('Token de verificação expirado');
            }

            const isVerificated = await this.userService.updateUserByPublicId(verificationToken.userId, { status: 'ACTIVE' });

            if (!isVerificated) {
                throw new Error('Erro ao verificar conta do usuário');
            }

            await prisma.accountVerificationToken.delete({
                where: { id: token },
            });

            return true;

        } catch (error) {
            console.error('Erro ao validar conta:', error);
            return false;
        }
    }

    generateCookieConfig() {
        const info = {
            httpOnly: true,
            secure: IS_PRODUCTION,
            sameSite: IS_PRODUCTION ? 'none' : 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            path: '/',
            domain: IS_PRODUCTION ? `.${CLIENT_DOMAIN}` : 'localhost',
        }

        return info
    }

    verifyToken(token: string) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET) as TokenPayloadProps;
            return decoded;
        } catch (error) {
            console.error('Erro ao decodificar token:', error);
            return null;
        }
    }

    private generateToken(payload: TokenPayloadProps) {

        return jwt.sign(
            payload,
            JWT_SECRET,
            { expiresIn: '7d' }
        );
    }
}

export default AuthService;
