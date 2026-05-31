import { prisma } from "../../config/prisma";


export const findAllRoles = async () => {
    return await prisma.roles.findMany();
};
