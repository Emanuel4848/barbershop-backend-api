import { stat } from "node:fs"
import { prisma } from "../../config/prisma"


export const createAppointmentR = async (id_cliente: number, id_barber: number, 
    id_service: number, appointment_date: string) => {
        return await prisma.appointments.create({
            data: {
                id_cliente: id_cliente,
                id_barber: id_barber,
                id_service: id_service,
                appointment_date: appointment_date,
            }
        })
}

export const findAppointmentByBarberAndDate = async (id_barber: number, appointment_date: string | Date) => {
    return await prisma.appointments.findFirst({
        where: {
            id_barber: id_barber,
            appointment_date: appointment_date
        }
    })
}


export const findAppointmentsR =  async () => {
    return await prisma.appointments.findMany()
}


export const findAppointmentByIdR = async (id: number) => {
    return await prisma.appointments.findUnique({
        where: {
            id_appointment: id
        }
    })
}



export const updateAppointmentR = async (id_appointment: number, id_cliente?: number, id_barber?: number, id_service?: number, appointment_date?: string | Date, status?: string) => {
    return await prisma.appointments.update({
        where: {
            id_appointment: id_appointment,
        },
        data: {
            id_cliente: id_cliente,
            id_barber: id_barber,
            id_service: id_service,
            appointment_date: appointment_date,
            status: status
        }
    })
}

export const deleteAppointmentR = async (id: number) => {
    return await prisma.appointments.delete({
        where: {
            id_appointment: id
        }
    })
}


