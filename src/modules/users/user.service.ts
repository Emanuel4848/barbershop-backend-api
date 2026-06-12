import { string } from "zod"
import { buscarrUserByEmailR, createUserR, findUserById, updateUserR } from "./user.repository"
import bcrypt from "bcrypt";
import { id } from "zod/v4/locales";


export const createUserS = async (name: string, email: string, password: string, id_rol: number) => {
    const Existeuser = await buscarrUserByEmailR(email)

    if(Existeuser) {
        throw new Error("El email ya está registrado")
    }

    const passHasheada = await bcrypt.hash(password, 10)

    const user = await createUserR(
        name,
        email,
        passHasheada,
        id_rol
    )

    return user

}


export const updateUserS = async (id: number, name?: string, email?: string, password?: string, id_rol?: number) => {
    const ExisteUser = await findUserById(id)

    if (!ExisteUser) {
        throw new Error("No existe el usuario")
    }

    if (email) {
        const ExisteUsuarioConEmail = await buscarrUserByEmailR(email)

        if (ExisteUsuarioConEmail && ExisteUsuarioConEmail.id_usuario !== id) {
            throw new Error("El email ya está registrado")
        }
    }


    
    let passwordFinal = ExisteUser.password;

    if (password) {
        passwordFinal = await bcrypt.hash(password, 10);
    }


    const user = await updateUserR(
        id,
        name,
        email,
        passwordFinal,
        id_rol
    )

    return user

}