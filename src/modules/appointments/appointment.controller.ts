import { Response, Request } from "express"
import { createAppointmentS, deleteAppointmentS, getAppointmenByIdS, getAppointmentsS, updateAppointmentS } from "./appointment.service"
import { json } from "zod"
import { error } from "node:console"

export const createAppointmentC = async (req: Request, res: Response) => {

    try {
        const appointment = await createAppointmentS(
            req.body.id_cliente,
            req.body.id_barber,
            req.body.id_service,
            req.body.appointment_date
        )

        res.json({message: "Cita creada", appointment})
    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        })
    }
    

}

export const getAppointmentsC = async (req: Request, res: Response) => {
    try {
        const appointment = await getAppointmentsS ()

        res.json(appointment)
    }

    catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }

}

export const getAppointmentByIdC = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        
        const appointment = await getAppointmenByIdS(id)

        res.json({appointment})
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const updateAppointmentC = async (req: Request, res: Response) => {
    
    try {
        const id = Number(req.params.id)

    const appointment = await updateAppointmentS(
        id,
        req.body.id_cliente,
        req.body.id_barber,
        req.body.id_service,
        req.body.appointment_date,
        req.body.status
    )

    res.json({message: "Cita actualizada", appointment})

    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }
    

}

export const deleteAppointmentC = async (req:Request, res:Response) => {
    try {
        const id = Number(req.params.id)

        await deleteAppointmentS(id)

        res.json({message: "Cita eliminada"})

    }
    
    catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }
    
}