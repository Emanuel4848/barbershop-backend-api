import { string } from "zod";
import { prisma } from "../../config/prisma";

export const findAllClients = async () => {
    return await prisma.clients.findMany()
}


export const createClientR = async (name: string, telefono: string, email: string ) => {
    return await prisma.clients.create({
        data: {
            name: name,
            telefono: telefono,
            email: email,
        }
    });
};


export const updateClienteR = async (id: number, name: string, telefono: string, email: string) => {
    return await prisma.clients.update({
        where: {
            id_cliente: id
        }, data: {
            name:name,
            telefono: telefono,
            email: email
        }
    });
};


export const deleteClientR = async (id: number) => {
    return await prisma.clients.delete({
        where: {
            id_cliente: id
        }
    });
};