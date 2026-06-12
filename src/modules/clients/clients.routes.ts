import { Router } from "express";
import { createClient, deleteClient, getClientByIdC, getClients, updateCliente } from "./clients.controller";
import { createClientSchema, updateClientSchema } from "./clients.schema";
import { validate } from "../../middlewares/validate";
import { authMiddleware } from "../../middlewares/auth.middlewar";
import { authorizeRoles } from "../../middlewares/role.middleware";



const router = Router();



router.get("/clients", authMiddleware, authorizeRoles("owner", "admin", "barber"), getClients);
router.post("/clients", authMiddleware, authorizeRoles("owner", "admin"), validate(createClientSchema), createClient);
router.put("/clients/:id", authMiddleware, authorizeRoles("owner", "admin"),  validate(updateClientSchema), updateCliente)
router.delete("/clients/:id", authMiddleware, authorizeRoles("owner", "admin"), deleteClient)
router.get("/clients/:id", authMiddleware, authorizeRoles("owner", "admin", "barber"), getClientByIdC)
export default router;


