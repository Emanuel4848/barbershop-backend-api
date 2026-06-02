import z from "zod"

export const createClientSchema = z.object({
    name: z.string().min(2),
    telefono: z.string().min(8),
    email: z.string().email().optional(),

})


export const updateClientSchema = z.object({
    name: z.string().min(2).optional(),
    telefono: z.string().min(8).optional(),
    email: z.email().optional().optional(),

})


