import prisma from "../lib/prisma.js"

export const monitorRepository = {
    findAll(){
        return prisma.monitor.findMany({ orderBy: {id: "desc"} });
    },

    findById(id: number) {
        return prisma.monitor.findUnique({ where: { id } });
    },

    create(data: any) {
        return prisma.monitor.create({ data });
    },

    update(id: number, data: any) {
        return prisma.monitor.update({ where: {id}, data });
    },

    delete(id: number) {
        return prisma.monitor.delete({ where: { id } });
    },
};