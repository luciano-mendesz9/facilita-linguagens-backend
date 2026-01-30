import { ENUM_USER_ROLES, ENUM_USER_STATUS } from "@/config/enums-db.js";
import { IS_PRODUCTION } from "@/config/env.js";
import { Router } from "express";

const UserRoutes = Router();

UserRoutes.get('/enums/roles', (req, res) => {
    if (IS_PRODUCTION) {
        return res.status(400).json({ error: 'Unauthorized' });
    }

    return res.status(200).json(ENUM_USER_ROLES);
});

UserRoutes.get('/enums/status', (req, res) => {
    if (IS_PRODUCTION) {
        return res.status(400).json({ error: 'Unauthorized' });
    }

    return res.status(200).json(ENUM_USER_STATUS);
})

export default UserRoutes;