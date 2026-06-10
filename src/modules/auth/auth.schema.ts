import z, { email, object, string } from "zod";

export const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    id_rol: z.number(),
})


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})