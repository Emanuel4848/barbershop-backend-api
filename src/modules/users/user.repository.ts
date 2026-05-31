import { number } from "zod";
import { prisma } from "../../config/prisma";



export const createUserR = async (name: string, email: string, password: string, id_rol: number) => {
    return await prisma.users.create({
        data: {
            name: name,
            email: email,
            password: password,
            id_rol: id_rol
        }
    })
}





export const finAllUsers = async () => {
    return await prisma.users.findMany();
};



export const findUserById = async (id: number) => {
    return await prisma.users.findUnique({
        where: {
            id_usuario: id,
        },
    });
};


export const updateUserR = async (id: number, name: string, email: string, password: string, id_rol: number) => {
    return await prisma.users.update({
        where: {
            id_usuario: id,
        },
        data: {
            name: name,
            email: email,
            password: password,
            id_rol: id_rol
        }
    });
};

export const deleteUserR = async (id: number) => {
    return await prisma.users.delete({
        where: {
            id_usuario: id
        }
    })
}