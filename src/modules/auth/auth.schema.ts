import z, { email, object, string } from "zod";



export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})