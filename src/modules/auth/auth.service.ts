import { th } from "zod/v4/locales";
import { buscarUserByEmailR, registerUsuarioAuthR } from "./auth.repository"
import { error } from "node:console";
import bcrypt from "bcrypt";
import { email, string } from "zod";
import jwt from "jsonwebtoken";


//crear user con password hasheado
export const registerUserS = async(name: string, email: string , password: string, id_rol: number) => {
    const ExisteUser  = await buscarUserByEmailR(email);

    if (ExisteUser) {
        throw new Error("El email ya esta registrado")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await registerUsuarioAuthR(
        name,
        email,
        hashedPassword,
        id_rol   
    )
    return user

}



//login para validar password y generar JWT


export const loginUserS = async (email: string, password: string) => {
    const user = await buscarUserByEmailR(email)

    if (!user) {
        throw new Error("Credenciales incorrectas")
    }

    const passwordValida = await bcrypt.compare(password, user.password);

    if (!passwordValida) {
        throw new Error("Credenciales incorrectas")
    }


    //aca genera el Token
    const token = jwt.sign(
        {
            id_usuario: user.id_usuario,
            email: user.email,                  //esto es el payload del token, datos para mostrar en forntend y token para futuras request
            role: user.roles.name
        },
        process.env.JWT_SECRET!,        //clave que firma el token
        {
            expiresIn: "1d",
        }
    );

    return {
        token,
        user: {
            id_usuario: user.id_usuario,
            name: user.name,
            email: user.email,
            role: user.roles.name
        }
    }
    
}