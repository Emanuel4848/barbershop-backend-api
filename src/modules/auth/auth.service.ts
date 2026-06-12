import { th } from "zod/v4/locales";
import { buscarUserByEmailR } from "./auth.repository"
import { error } from "node:console";
import bcrypt from "bcrypt";
import { email, string } from "zod";
import jwt from "jsonwebtoken";




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