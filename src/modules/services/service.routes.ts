import { Router } from "express";
import {createService, deleteService, getService, getServices, updateService} from "./service.controller"
import { validate } from "../../middlewares/validate";
import { createServiceSchema, updateServiceSchema } from "./service.schema";


const router = Router();


router.post("/services", validate(createServiceSchema), createService)

router.get("/services", getServices)

router.get("/services/:id", getService)

router.put("/services/:id", validate(updateServiceSchema), updateService)

router.delete("/services/:id", deleteService)

export default router