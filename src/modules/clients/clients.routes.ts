import { Router } from "express";
import { createClient, deleteClient, getClients, updateCliente } from "./clients.controller";

const router = Router();



router.get("/clients", getClients)
router.post("/clients", createClient);
router.put("/clients/:id", updateCliente)
router.delete("/clients/:id", deleteClient)
export default router;