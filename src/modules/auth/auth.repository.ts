import { prisma } from "../../config/prisma";





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


