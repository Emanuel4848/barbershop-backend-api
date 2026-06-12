import { Router } from "express";
import {createService, deleteService, getService, getServices, updateService} from "./service.controller"
import { validate } from "../../middlewares/validate";
import { createServiceSchema, updateServiceSchema } from "./service.schema";
import { authMiddleware } from "../../middlewares/auth.middlewar";
import { authorizeRoles } from "../../middlewares/role.middleware";


const router = Router();


router.post("/services", authMiddleware, authorizeRoles("owner", "admin"), validate(createServiceSchema), createService)

router.get("/services",authMiddleware, authorizeRoles("owner", "admin", "barber"), getServices)

router.get("/services/:id", authMiddleware, authorizeRoles("owner", "admin", "barber"), getService)

router.put("/services/:id", authMiddleware, authorizeRoles("owner", "admin"), validate(updateServiceSchema), updateService)

router.delete("/services/:id", authMiddleware, authorizeRoles("owner", "admin"), deleteService)




export default router