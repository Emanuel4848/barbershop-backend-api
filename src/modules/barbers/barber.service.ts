import { buscarBarberoPorUsuarioIdR, buscarUsuarioConRolPorIdR, createBarberR } from "./barber.repository";


export const createBarberoServiceS = async (id_usuario: number, specialty?: string, is_active?: boolean) => {
    const usuario = await buscarUsuarioConRolPorIdR(id_usuario)

    if (!usuario) {
        throw new Error("El usuario no existe");

    };


    if (usuario.roles.name !== "barber") {
        throw new Error ("El usuario no tiene rol de barbero");
    };


    const barberoExistente = await buscarBarberoPorUsuarioIdR(id_usuario);

    if (barberoExistente) {
         throw new Error ("El usuario ya es un barbero existente")
    }
    
    
    const barber = await createBarberR(
        id_usuario,
        specialty,
        is_active ?? true
    );

    return barber
};


