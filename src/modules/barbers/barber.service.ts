import { throwDeprecation } from "node:process";
import { buscarUsuarioConRolPorId, createBarberR } from "./barber.repository"
import { createBarber } from "./barber.controller";


export const createBarberoServiceS = async (id_usuario: number, specialty: string, is_active: boolean) => {
    const usuario = await buscarUsuarioConRolPorId(id_usuario)

    if (!usuario) {
        throw new Error("El usuario no existe");

    };


    if (usuario.roles.name !== "barber") {
        throw new Error ("El usuario no tiene rol de barbero");
    };

    
    const barber = await createBarberR(
        id_usuario,
        specialty,
        is_active
    );

    return barber
};
