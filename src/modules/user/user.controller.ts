import { ENUM_USER_ROLES, ENUM_USER_ROLES_TYPE, ENUM_USER_STATUS } from "@/config/enums-db.js";
import { IS_PRODUCTION } from "@/config/env.js";
import { adminMiddleware, AuthRequest } from "@/middleware/adminMiddleware.js";
import { authMiddleware } from "@/middleware/authMiddleware.js";
import { Response, Router } from "express";
import UserService from "./user.service.js";
import UserPermissions from "@/config/permissions.js";
import AuthService from "../auth/auth.service.js";
import { mailer } from "../smtp/smtp.service.js";
import { alertCreateAdminHTMLTemplate } from "../smtp/smtp.html.js";

const UserRoutes = Router();
const userService = new UserService();
const auth = new AuthService();

UserRoutes.get('/enums/roles', (req, res) => {
    if (IS_PRODUCTION) {
        return res.status(400).json({ error: 'Unauthorized' });
    }

    return res.status(200).json(ENUM_USER_ROLES);
});

UserRoutes.get('/enums/permissions', (req, res) => {
    if (IS_PRODUCTION) {
        return res.status(400).json({ error: 'Unauthorized' });
    }

    return res.status(200).json(UserPermissions);
});

UserRoutes.get('/enums/status', (req, res) => {
    if (IS_PRODUCTION) {
        return res.status(400).json({ error: 'Unauthorized' });
    }

    return res.status(200).json(ENUM_USER_STATUS);
})

UserRoutes.get('/', authMiddleware, adminMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const email = req.query.email as string;

        if (!email) {
            return res.status(403).json({ error: 'E-mail required' });
        }

        const user = await userService.getUserByEmail(email);

        return res.status(user ? 200 : 404).json(user ? { ...user, id: undefined } : null);

    } catch (error) {
        console.error('Error get user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


UserRoutes.get('/collaborators', authMiddleware, adminMiddleware, async (req: AuthRequest, res: Response) => {
    try {

        const adminId = req.query.id as string | undefined;
        const admins = await userService.getAdmins({ publicUserId: adminId });

        if (!admins) {
            return res.status(404).json({ error: 'Admins not found' });
        };

        return res.status(200).json(adminId ? admins[0] : admins);
    } catch (error) {
        console.error('Error fetching admins:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


UserRoutes.post('/collaborators', authMiddleware, adminMiddleware, async (req: AuthRequest, res: Response) => {
    try {

        const body: {
            isCreateAccount: boolean;
            email: string;
            password?: string;
            config: {
                permissions: string[];
                isSuperAdmin: boolean;
                role: ENUM_USER_ROLES_TYPE
            }
        } = req.body;

        if (!body.email || !body.config) {
            throw new Error('Data required');
        }

        const admin = await userService.getUserByPublicId(req.user?.publicUserId as string);

        if (body.config.isSuperAdmin) {
            if (!admin?.isSuperAdmin) {
                throw new Error('Admin invalided');
            }
        }

        if (body.isCreateAccount) {
            if (!body.password) {
                throw new Error('Password required');
            }

            const data = await auth.signUp({
                email: body.email,
                firstName: '',
                lastName: '',
                password: body.password
            })

            if (!data) {
                throw new Error('Impossible Action');
            }

            await userService.updateUserByPublicId(data.user.publicId, {
                isCollaborator: true,
                isSuperAdmin: body.config.isSuperAdmin,
                role: body.config.role
            })

            await mailer.sendMail({
                from: '"Facilita Linguagens" <seuemail@gmail.com>',
                to: body.email,
                subject: 'Vínculo Administrativo Facilita Linguagens 🚀',
                html: alertCreateAdminHTMLTemplate({ name: 'Amigo/a', publicUserId: data.user.publicId })
            })

            return res.status(201).json({ ...data.user, id: undefined });
        }

        const user = await userService.getUserByEmail(body.email);

        if (!user) {
            throw new Error('User not found')
        }

        const userUpdated = await userService.updateUserByPublicId(user.publicId, {
            isCollaborator: true,
            isSuperAdmin: body.config.isSuperAdmin,
            status: 'PENDING',
            role: body.config.role
        })

        if (!userUpdated) {
            throw new Error('User not found')
        }

        await mailer.sendMail({
            from: '"Facilita Linguagens" <seuemail@gmail.com>',
            to: body.email,
            subject: 'Vínculo Administrativo Facilita Linguagens 🚀',
            html: alertCreateAdminHTMLTemplate({ name: userUpdated.firstName, publicUserId: userUpdated.publicId })
        })

        return res.status(201).json({ ...userUpdated, id: undefined });

    } catch (error) {
        console.error('Error fetching admins:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default UserRoutes;