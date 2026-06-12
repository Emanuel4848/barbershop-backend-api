import { NextFunction, Request, Response } from "express"

//full middleware para todos los modulos



//1. recibir una lsita de roles permitidos
//2. leer elusuario guardado en req.user
//3. si no hay usuario -> error 401
//4. si el rol del usuario no esta permitido -> error 403
//5. Si el rol si está permitido -> next()




export const authorizeRoles = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as any).user;   //leyendo lo que se guardo antes en el authMiddleware
        
        if(!user) {                             //si no hay usuario
            return res.status(401).json({
                message: "No autenticado"
            })
        }

        if (!roles.includes(user.role)) {       //si el role no está permitido
            return res.status(403).json({
                message: "No autorizado"
            })
        }

        next();
    }
}