import { prisma } from "../../config/prisma";



export const createBarberR = async (id_usuario: number, specialty?: string, is_active?: boolean) => {
    return await prisma.barbers.create({
        data: {
            id_usuario: id_usuario,
            specialty: specialty,
            is_active: is_active,
        }
    })
}



export const findAllBarbers = async () => {
    return await prisma.barbers.findMany()
}




export const findBarberById = async (id: number) => {
    return await prisma.barbers.findUnique({
        where: {
            id_barber: id,
        }
    })
}




export const updateBarberR = async (id: number, id_usuario: number, specialty: string, is_active: boolean) =>{
    return await prisma.barbers.update({
        where: {
            id_barber: id,
        },
        data: {
            id_usuario: id_usuario,
            specialty: specialty,
            is_active: is_active,
        }
    })
} 


export const deleteBarberR = async (id: number) => {
    return await prisma.barbers.delete({
        where: {
            id_barber: id
        }
    });
};




export const buscarUsuarioConRolPorIdR = async (id_usuario: number) => {
    return await prisma.users.findUnique({
        where: {
            id_usuario: id_usuario,       //trae usuario
        },
        include: {
            roles: true                  //trae fila roles segun el id_rol que esta en usuario.
        }
    });
}



export const buscarBarberoPorUsuarioIdR = async (id_usuario: number) => {
    return await prisma.barbers.findUnique({
        where: {
            id_usuario: id_usuario,
        }
    })
}

  