import { it } from "node:test"
import { getAppointmentsByStatusR, getRevenueR, getTopBarbersR, getTopServicesR } from "./report.repository"


export const getAppointmentsByStatusS = async () => {
    const appointments = await getAppointmentsByStatusR()

    const result = appointments.map((item => {
        return {
            status: item.status,
            total: item._count.status
        }
    }))
    return result

}

export const getTopServicesS = async () => {
    const top =  await getTopServicesR()
    return top
}

export const getTopBarbersS = async () => {
    const top = await getTopBarbersR()

    return top
}

export const getRevenueS = async () => {
    const revenue = await getRevenueR() as any[]

    return revenue[0]
}