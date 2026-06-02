import { error } from "node:console"
import { createServiceR, existeServicioPorNameR, updateServiceR } from "./service.repository"
import { string } from "zod"


export const createServiceS = async (name: string, description: string, price: number) => {
    const service = await existeServicioPorNameR(name)

    if (service) {
        throw new Error("El servicio ya existe")
    }

    const newService = await createServiceR(
        name,
        description,
        price 
    );

    return newService;
};



export const updateServiceS = async (id: number, name: string, description: string, price: number) => {
    const service = await existeServicioPorNameR(name)

    if (service && service.id_service !== id) { //si existe un servicio con ese name y no es el que estoy editando: error
        throw new Error("Ya existe un servicio con ese nombre")
    }

    const updatedService = await updateServiceR(
        id,
        name,
        description,
        price
    );

    return updatedService

}