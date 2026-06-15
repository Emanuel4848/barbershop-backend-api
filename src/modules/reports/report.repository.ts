import { prisma } from "../../config/prisma"


export const getAppointmentsByStatusR = async () => {
    return await prisma.appointments.groupBy({
        by: ["status"],
        _count: {
            status: true
        }
    })
}

export const getTopServicesR = async () => {
    return await prisma.$queryRaw `
        select a.id_service, s.name, count(*)::int as cantidad
        from appointments a
        inner join barber_services s on a.id_service = s.id_service
        group by a.id_service, s.name
        order by cantidad desc
    `
}


export const getTopBarbersR = async () => {
    return await prisma.$queryRaw`
        select b.id_barber, u.name, count(*)::int Cantidad
        from appointments a
        inner join barbers b on b.id_barber = a.id_barber
        inner join users u on b.id_usuario = u.id_usuario
        group by b.id_barber, u.name
        order by Cantidad desc

    `
}


export const getRevenueR = async () => {
    return await prisma.$queryRaw`
        select coalesce(sum(s.price), 0)::float total_revenue
        from appointments a
        inner join barber_services s on s.id_service = a.id_service
        where a.status = 'completed'

    `
}
