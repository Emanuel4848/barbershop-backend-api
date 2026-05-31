import { prisma } from "../../config/prisma";
import { findAllRoles } from "./role.repository";
import { Request, Response } from "express";

export const getRoles = async (req: Request, res: Response) => {
    const roles = await findAllRoles();

    res.json({roles});
};