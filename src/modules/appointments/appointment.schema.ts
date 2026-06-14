import z, { number, string } from "zod";

export const createAppointmentSchema = z.object({
    id_cliente: z.number(),
    id_barber: z.number(),
    id_service: z.number(),
    appointment_date: z.string()
});




export const updateAppointmentSchema = z.object({
    id_cliente: z.number().optional(),
    id_barber: z.number().optional(),
    id_service: z.number().optional(),
    appointment_date: z.string().optional(),
    status: z.enum(["scheduled", "completed", "cancelled"]).optional()
})