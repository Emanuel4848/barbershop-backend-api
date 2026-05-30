import { Request, Response } from "express";
import { createServiceR, deleteServiceR, updateServiceR } from "./service.repository";
import { findAllServices } from "./service.repository";
import { findServiceById } from "./service.repository";
import { Numeric } from "zod/v4/core/util.cjs";


export const createService = async (req: Request, res: Response) => {

    const service = await createServiceR (
        req.body.name,
        req.body.description,
        req.body.price
    );

    res.json({message: "Servicio creado", service})
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
    const id = Number(req.params.id);


    const service = await updateServiceR(id,
            req.body.name,
            req.body.description,
            req.body.price
    ); 

    res.json({ message: "Servicio actualizado", service})
};



export const deleteService = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const service = await deleteServiceR(id)

    res.json({message: "servicio eliminado"})
}