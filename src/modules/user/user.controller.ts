import { ENUM_USER_ROLES, ENUM_USER_STATUS } from "@/config/enums-db.js";
import { IS_PRODUCTION } from "@/config/env.js";
import { adminMiddleware, AuthRequest } from "@/middleware/adminMiddleware.js";
import { authMiddleware } from "@/middleware/authMiddleware.js";
import { Response, Router } from "express";
import UserService from "./user.service.js";
import UserPermissions from "@/config/permissions.js";

const UserRoutes = Router();
const userService = new UserService();

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

UserRoutes.get('/:id', authMiddleware, async (req: AuthRequest, res: Response) => {

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

export default UserRoutes;