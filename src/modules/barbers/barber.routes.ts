import { Router } from "express";
import { createBarber, deleteBarber, getBarber, getBarbers, updateBarber } from "./barber.controller";
import { createBarberSchema, updateBarberSchema } from "./barber.schema";
import { validate } from "../../middlewares/validate";



const router = Router()


router.get("/barbers", getBarbers)
router.post("/barbers", validate(createBarberSchema), createBarber);
router.get("/barbers/:id", getBarber)
router.put("/barbers/:id", validate(updateBarberSchema), updateBarber)
router.delete("/barbers/:id", deleteBarber)


export default router