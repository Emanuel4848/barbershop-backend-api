import { Router } from "express";
import { createUser, deleteUser, getUserByiD, updateUser } from "./user.controller";
import { getUsers } from "./user.controller";
import { validate } from "../../middlewares/validate";
import { createUserSchema, updateUserSchema } from "./user.schema";
import { authMiddleware } from "../../middlewares/auth.middlewar";
import { authorizeRoles } from "../../middlewares/role.middleware";

const router = Router();





//POST /users
router.post("/users", authMiddleware, authorizeRoles("owner", "admin"),validate(createUserSchema), createUser);
router.get("/users", authMiddleware, authorizeRoles("owner", "admin"),getUsers)
router.get("/users/:id", authMiddleware, authorizeRoles("owner", "admin"), getUserByiD)
router.put("/users/:id",authMiddleware, authorizeRoles("owner", "admin"), validate(updateUserSchema), updateUser)
router.delete("/users/:id", authMiddleware, authorizeRoles("owner", "admin"),  deleteUser)


export default router