import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { decode } from "node:punycode";


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;   //en los headers busca el campo "authorization"        (Authorization: Bearer eyJ....)

    if (!authHeader) {                  //si no viene autorización:
        return res.status(401).json({
            message: "Token no proporcionado",
        })
    }


    const token = authHeader.split(" ")[1];  //si viene autorización, sacar el token de el




    if(!token) {
        return res.status(401).json({
            message: "Formato de token invalido"        //Bearer sin token
        })
    }




    try {
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);  //verifica token contra clave
        console.log(decoded);  //datos dentro del token, lo que retorne en service auth. //contenido ya leido del token
    //iat: cuando se creo el token
    //exp: cuando expira el token
        (req as any).user = decoded; //en la req actual, guarda los datos deltoken en la propiedad user
        next();


    } catch (error) {
        return res.status(401).json({
            message: "Token inválido o expirado"
        })
    }

}


 //1. lee el token
 //2. Lo separa del "Bearer"
 //3. Verifica el token con JWT_SECRET
 //4. Decodifica el contenido
 //5. Muestra los datos internos del token