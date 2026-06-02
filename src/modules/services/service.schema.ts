import { Decimal } from "@prisma/client/runtime/library";
import {string, z} from "zod";



export const createServiceSchema = z.object({
    name: z.string().min(2),
    description: z.string().min(2).optional(),
    price: z.number().positive(),
});


export const updateServiceSchema = z.object({
    name: z.string().min(2).optional(),
    description: string().min(2).optional(),
    price: z.number().positive().optional(),
})