import { Router } from "express";
import { getAppointmentByIdC } from "../appointments/appointment.controller";
import { getAppointmentsByStatusC, getRevenueC, getTopBarbersC, topServicesC } from "./report.controller";
import { authMiddleware } from "../../middlewares/auth.middlewar";
import { authorizeRoles } from "../../middlewares/role.middleware";

const router = Router()

router.get("/appointments-by-status", authMiddleware, authorizeRoles("owner", "admin"), getAppointmentsByStatusC)
router.get("/top-services", authMiddleware, authorizeRoles("owner", "admin"), topServicesC)
router.get("/top-barbers", authMiddleware, authorizeRoles("owner", "admin"), getTopBarbersC)
router.get("/revenue", authMiddleware, authorizeRoles("owner", "admin"), getRevenueC)

export default router