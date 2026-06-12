import { Router } from "express";
import { validate } from "../../middlewares/validate";
import { loginSchema} from "./auth.schema";
import { loginUsersC, meC } from "./auth.controller";
import { authMiddleware } from "../../middlewares/auth.middlewar";

const router = Router();


router.post("/auth/login", validate(loginSchema), loginUsersC)
router.get("/auth/me", authMiddleware, meC)




export default router;