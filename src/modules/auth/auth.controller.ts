import { any, email } from "zod"
import { loginUserS, registerUserS } from "./auth.service"
import { Request, Response } from "express"



export const registerUserC = async(req: Request, res: Response) => {
    try {
        const user = await registerUserS(
            req.body.name,
            req.body.email,
            req.body.password,
            req.body.id_rol
        )
    
        res.json({message: "Usuario creado", user})
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }

}


export const loginUsersC = async (req: Request, res: Response) => {

    try {
        const authData =  await loginUserS(
            req.body.email,
            req.body.password
        )
        
        res.json({message:"Login correcto",token: authData.token, user: authData.user})
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }

}


export const meC = async (req:Request, res: Response) => {
    res.json({
        user: (req as any).user
    })
}