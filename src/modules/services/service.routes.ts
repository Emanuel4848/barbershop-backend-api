import { Router } from "express";
import {createService, deleteService, getService, getServices, updateService} from "./service.controller"


const router = Router();


router.post("/services", createService)

router.get("/services", getServices)

router.get("/services/:id", getService)

router.put("/services/:id", updateService)

router.delete("/services/:id", deleteService)

export default router