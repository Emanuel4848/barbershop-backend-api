import { Request, Response } from "express";
import { prisma } from "../../config/prisma"; //esto ahora lo usa el repo xd
import { finAllUsers } from "./user.repository";
import { findUserById } from "./user.repository";
import { createUserR } from "./user.repository";
import { updateUserR } from "./user.repository";
import { deleteUserR } from "./user.repository";
import { createUserSchema } from "./user.schema";
import { z } from "zod";
import { ZodError } from "zod";





export const createUser = async (req: Request, res: Response) => {
        const user = await createUserR (
            req.body.name,
            req.body.email,
            req.body.password,
            req.body.id_rol
        );

        res.json({message: "usuario creado", user,});
};







export const getUsers = async (req: Request, res: Response) => {        
    const users = await finAllUsers()                       
    res.json({users})                                              
}



export const getUserByiD = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await findUserById(id)
    res.json({user});


} 

export const updateUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = await updateUserR(id, 
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.id_rol
        )

    res.json({
        message: "usuario actualizado",
        user
    });

};


export const deleteUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = await deleteUserR(id)
    res.json({message: "Usuario eliminado"})
};






 