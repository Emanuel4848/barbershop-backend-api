import { Request, Response } from "express";
import { createServiceR, deleteServiceR, updateServiceR } from "./service.repository";
import { findAllServices } from "./service.repository";
import { findServiceById } from "./service.repository";

import { createServiceS, updateServiceS } from "./service.service";


export const createService = async (req: Request, res: Response) => {
    try {
        const service = await createServiceS(
            req.body.name,
            req.body.description,
            req.body.price
        )
        res.json({message: "Servicio creado", service});

    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }
};




export const getServices = async (req: Request, res: Response) => {
    const services = await findAllServices()

    res.json({services});
};


export const getService = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const service = await findServiceById(id)

    res.json({service})

};


export const updateService = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const service = await updateServiceS(id,
                req.body.name,
                req.body.description,
                req.body.price
        ); 
    
        res.json({ message: "Servicio actualizado", service})
    } catch (error:any) {
        res.status(400).json({
            message: error.message,
        })
    }

};



export const deleteService = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const service = await deleteServiceR(id)

    res.json({message: "servicio eliminado"})
}