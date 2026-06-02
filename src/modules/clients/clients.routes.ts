import { Router } from "express";
import { createClient, deleteClient, getClientByIdC, getClients, updateCliente } from "./clients.controller";
import { createClientSchema, updateClientSchema } from "./clients.schema";
import { validate } from "../../middlewares/validate";

const router = Router();



router.get("/clients", getClients)
router.post("/clients", validate(createClientSchema), createClient);
router.put("/clients/:id", validate(updateClientSchema), updateCliente)
router.delete("/clients/:id", deleteClient)
router.get("/clients/:id", getClientByIdC)
export default router;


