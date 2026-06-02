import { asyncWrapProviders } from "node:async_hooks"
import { prisma } from "../../config/prisma"
import { createBarberR, deleteBarberR, findAllBarbers, findBarberById, updateBarberR } from "./barber.repository"
import { Request, Response } from "express"
import { createBarberoServiceS } from "./barber.service"




export const createBarber = async (req: Request, res: Response) => {
    try {
        const barber = await createBarberoServiceS(
            req.body.id_usuario,
            req.body.specialty,
            req.body.is_active
        );

        res.json({message: "Barbero creado", barber});
    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        })
    }

}













export const getBarbers = async (req: Request, res: Response) => {
    const barbers = await findAllBarbers()

    res.json({barbers}) 
}


export const getBarber = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const barber = await findBarberById(id)

    res.json(barber)
}



export const updateBarber = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const barber = await updateBarberR(id,
        req.body.id_usuario,
        req.body.specialty,
        req.body.is_active,
    )

    res.json({message: "Barbero actualizado", barber})
}


export const deleteBarber =  async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    deleteBarberR(id)

    res.json({message: "Barbero elimando"})
}