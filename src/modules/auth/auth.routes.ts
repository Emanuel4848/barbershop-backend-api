import { Router } from "express";
import { validate } from "../../middlewares/validate";
import { loginSchema, registerSchema } from "./auth.schema";
import { loginUsersC, meC, registerUserC } from "./auth.controller";
import { authMiddleware } from "../../middlewares/auth.middlewar";

const router = Router();

router.post("/auth/register", validate(registerSchema), registerUserC)
router.post("/auth/login", validate(loginSchema), loginUsersC)
router.get("/auth/me", authMiddleware, meC)




export default router;