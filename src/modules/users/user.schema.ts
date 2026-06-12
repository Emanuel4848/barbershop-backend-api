import { email, z } from "zod";

export const createUserSchema = z.object({   
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    id_rol: z.number()
});



export const updateUserSchema = z.object({
    name: z.string().min(2).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    id_rol: z.number().optional()
});

