import { id } from "zod/v4/locales";
import { prisma } from "../../config/prisma";



export const createUserR = async (name: string, email: string, password: string) => {
    return await prisma.users.create({
        data: {
            name: name,
            email: email,
            password: password
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


export const updateUserR = async (id: number, name: string, email: string, password: string, role: string) => {
    return await prisma.users.update({
        where: {
            id_usuario: id,
        },
        data: {
            name: name,
            email: email,
            password: password,
            role: role
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