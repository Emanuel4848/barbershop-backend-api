import { Router } from "express";
import { createAppointmentC, deleteAppointmentC, getAppointmentByIdC, getAppointmentsC, updateAppointmentC } from "./appointment.controller";
import { validate } from "../../middlewares/validate";
import { createAppointmentSchema, updateAppointmentSchema } from "./appointment.schema";
import { authMiddleware } from "../../middlewares/auth.middlewar";
import { authorizeRoles } from "../../middlewares/role.middleware";




const router = Router()

router.post("/appointments", authMiddleware, authorizeRoles("owner", "admin"), validate(createAppointmentSchema), createAppointmentC)
router.get("/appointments", authMiddleware, authorizeRoles("owner", "admin", "barber"),  getAppointmentsC)
router.get("/appointments/:id", authMiddleware, authorizeRoles("owner", "admin", "barber"), getAppointmentByIdC)
router.put("/appointments/:id", authMiddleware, authorizeRoles("owner", "admin", "barber"), validate(updateAppointmentSchema), updateAppointmentC)
router.delete("/appointments/:id", authMiddleware, authorizeRoles("owner", "admin"),  deleteAppointmentC)

export default router