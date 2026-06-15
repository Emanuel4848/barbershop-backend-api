import { stat } from "node:fs"
import { getAppointmentsByStatusS, getRevenueS, getTopBarbersS, getTopServicesS } from "./report.service"
import { Request, Response } from "express"


export const getAppointmentsByStatusC = async (req: Request, res: Response) => {
    try {
        const report = await getAppointmentsByStatusS()

        res.json({report})

    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        })
    }
}


export const topServicesC = async (req: Request, res: Response) => {
    try {
        const top = await getTopServicesS()

        res.json({top})
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }
}


export const getTopBarbersC = async (req: Request, res: Response) => {

    try {
        const top = await getTopBarbersS()

        res.json({top})
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }

}

export const getRevenueC = async (req: Request, res: Response) => {
    try {
        const revenue = await getRevenueS()

        res.json({revenue})
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    } 
}