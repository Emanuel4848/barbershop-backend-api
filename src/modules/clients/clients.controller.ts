import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { createClientR, deleteClientR, findAllClients, updateClienteR } from "./clients.repository";
import { numKeys } from "zod/v4/core/util.cjs";
import { number } from "zod";

export const getClients = async (req: Request, res: Response) => {
    console.log("createClientR:", createClientR)
    const clients = await findAllClients()

    res.json({clients})
}


export const createClient = async (req: Request, res: Response) => {
    const client = await createClientR(
        req.body.name,
        req.body.telefono,
        req.body.email
    );

    res.json({message: "Cliente creado", client})
}


export const updateCliente = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const client = await updateClienteR(id,
        req.body.name,
        req.body.telefono,
        req.body.email,
    )

    res.json({message: "Cliente actualziado", client})
};


export const deleteClient = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const client = await deleteClientR(id)

    res.json({message: "Cliente eliminado"})
}