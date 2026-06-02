import { id } from "zod/v4/locales";
import { prisma } from "../../config/prisma";



export const createServiceR = async (name: string, description: string, price: number) => {
    return await prisma.barber_services.create({
        data: {
            name: name,
            description: description,
            price: price
        }
    });
};


export const findAllServices = async () => {
    return await prisma.barber_services.findMany();
}


export const findServiceById = async (id: number) => {
    return await prisma.barber_services.findUnique({
        where: {
            id_service: id
        }
    });
};


export const updateServiceR = async (id: number, name: string, description: string, price: number) => {
    return await prisma.barber_services.update({
        where: {
            id_service: id,
        },
        data: {
            name: name,
            description: description,
            price: price
        }
    })
}




export const deleteServiceR = async (id: number) => {
    return await prisma.barber_services.delete({
        where: {
            id_service: id
        }
    })
}



export const existeServicioPorNameR = async (name: string) => {
    return await prisma.barber_services.findUnique({
        where: {
            name: name
        }
    })
}


