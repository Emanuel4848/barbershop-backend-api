import { Router } from "express";
import { getRoles } from "./role.controller";
import { authMiddleware } from "../../middlewares/auth.middlewar";
import { authorizeRoles } from "../../middlewares/role.middleware";


const router = Router()



router.get("/roles", authMiddleware, authorizeRoles("owner", "admin"), getRoles)



export default router;