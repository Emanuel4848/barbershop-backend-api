import { email, z } from "zod";

export const createUserSchema = z.object({   //cree un obj a validar
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});



