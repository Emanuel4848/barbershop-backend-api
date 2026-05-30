import { Router } from "express";
import { createUser, deleteUser, getUserByiD, updateUser } from "./user.controller";
import { getUsers } from "./user.controller";
import { validate } from "../../middlewares/validate";
import { createUserSchema } from "./user.schema";

const router = Router();





//POST /users
router.post("/users", validate(createUserSchema), createUser);
router.get("/users", getUsers)
router.get("/users/:id", getUserByiD)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)


export default router