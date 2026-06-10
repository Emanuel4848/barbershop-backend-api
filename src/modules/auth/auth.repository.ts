import { prisma } from "../../config/prisma";



export const registerUsuarioAuthR = async(name: string, email: string, password: string, id_rol: number) => {
    return await prisma.users.create({
        data: {
            name: name,
            email: email,
            password: password,
            id_rol: id_rol
        }
    })
}




export const buscarUserByEmailR = async(email: string) => {
    return await prisma.users.findUnique({
        where: {
            email: email
        },
        include: {
            roles: true
        }
    })
}


