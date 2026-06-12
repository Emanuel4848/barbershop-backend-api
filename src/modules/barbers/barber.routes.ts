import { Router } from "express";
import { createBarber, deleteBarber, getBarber, getBarbers, updateBarber } from "./barber.controller";
import { createBarberSchema, updateBarberSchema } from "./barber.schema";
import { validate } from "../../middlewares/validate";
import { authMiddleware } from "../../middlewares/auth.middlewar";
import { authorizeRoles } from "../../middlewares/role.middleware";



const router = Router()


router.get("/barbers", authMiddleware, authorizeRoles("owner", "admin", "barber"), getBarbers)
router.post("/barbers", authMiddleware, authorizeRoles("owner", "admin"), validate(createBarberSchema), createBarber);
router.get("/barbers/:id", authMiddleware, authorizeRoles("owner", "admin", "barber"),  getBarber)
router.put("/barbers/:id", authMiddleware, authorizeRoles("owner", "admin"), validate(updateBarberSchema), updateBarber)
router.delete("/barbers/:id", authMiddleware, authorizeRoles("owner", "admin"), deleteBarber)


export default router