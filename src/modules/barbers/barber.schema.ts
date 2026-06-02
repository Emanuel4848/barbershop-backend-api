import { z } from "zod";


export const createBarberSchema = z.object({
    id_usuario: z.number(),
    specialty: z.string().min(2).optional(),
    is_active: z.boolean().optional(),
});

export const updateBarberSchema = z.object({
    specialty: z.string().min(2).optional(),
    is_active: z.boolean().optional(),
});

