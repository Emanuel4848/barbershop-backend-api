import { date, number, string } from "zod"
import { findBarberById } from "../barbers/barber.repository"
import { getClientByIdR } from "../clients/clients.repository"
import { findServiceById } from "../services/service.repository"
import { createAppointmentR, deleteAppointmentR, findAppointmentByBarberAndDate, findAppointmentByIdR, findAppointmentsR, updateAppointmentR } from "./appointments.repository"
import { error } from "node:console"
import { numKeys } from "zod/v4/core/util.cjs"
import { stat } from "node:fs"


export const createAppointmentS = async (id_cliente: number, id_barber: number, id_service: number, appointment_date: string) => {
    const existCliente =  await getClientByIdR(id_cliente)
    if (!existCliente) {
        throw new Error("El cliente no existe")
    }

    const existBarber = await findBarberById(id_barber)
    if (!existBarber) {
        throw new Error("No existe el barbero")
    }

    const existService = await findServiceById(id_service)
    if (!existService) {
        throw new Error("No existe el servicio")
    }

    const existAppointmentWithBarber = await findAppointmentByBarberAndDate(id_barber, appointment_date)
    if (existAppointmentWithBarber) {
        throw new Error("El barbero ya tiene una cita a esta hora")
    }

    const appointment = await createAppointmentR(id_cliente, id_barber, id_service, appointment_date)
    return appointment
    

}

export const getAppointmentsS = async () => {
    const appointments = await findAppointmentsR()
    return appointments
}


export const getAppointmenByIdS = async (id: number) => {
    const appointment = await findAppointmentByIdR(id)

    if (!appointment) {
        throw new Error("La cita no existe")
    }
    
    return appointment
}






export const updateAppointmentS = async (id_appointment: number, id_cliente?: number, id_barber?: number, id_service?: number, appointment_date?: string, status?: string) =>{
    const exitsAppointment = await findAppointmentByIdR(id_appointment)
    if (!exitsAppointment) {
        throw new Error("La cita no existe")
    }

    if (id_cliente !== undefined) {
        const clientExists = await getClientByIdR(id_cliente);
    
        if (!clientExists) {
            throw new Error("El cliente no existe");
        }

    }

    if (id_barber !== undefined) {
        const barberExists = await findBarberById(id_barber)

        if (!barberExists) {
            throw new Error("El barbero no existe")
        }
    }


    if (id_service !== undefined) {
        const serviceExists = await findServiceById(id_service)

        if (!serviceExists) {
            throw new Error("El servicio no existe")
        }
    }

    const barberFinal = id_barber ?? exitsAppointment.id_barber   //usa id_barber que vino, y si no viene usa el de existAppoint...
    const dateFinal = appointment_date ?? exitsAppointment.appointment_date;

    //Revisar si el nuevo horario final ya está ocupado
    if (id_barber !== undefined || appointment_date !== undefined) {
        //buscar si ya exsite una cita con ese barbero y esa fecha.
        const appWithBarberAndDate = await findAppointmentByBarberAndDate(barberFinal, dateFinal)

        //si existe y no es la misma cita que estoy editando, error
        if (appWithBarberAndDate && appWithBarberAndDate.id_appointment !== id_appointment) {
            throw new Error("El barbero ya tiene una cita a esa hora")
        }



    }

    const appointment = await updateAppointmentR(
        id_appointment,
        id_cliente,
        barberFinal,
        id_service,
        dateFinal,
        status
    )

    return appointment

}

export const deleteAppointmentS = async (id: number) => {
    const appointmentExists = await findAppointmentByIdR(id)

    if (!appointmentExists) {
        throw new Error("La cita no existe")
    }

    return await deleteAppointmentR(id)
}












