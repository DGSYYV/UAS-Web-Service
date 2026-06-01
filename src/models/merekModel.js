const prisma = require('../database/dbConfig');

const getAll = () => {
    return prisma.merek.findMany();
};

const getById = (id) => {
    return prisma.merek.findUnique({
        where: {
            id_merek: Number(id)
        }
    });
};

const create = (data) => {
    return prisma.merek.create({
        data
    });
};

const update = (id, data) => {
    return prisma.merek.update({
        where: {
            id_merek: Number(id)
        },
        data
    });
};

const remove = (id) => {
    return prisma.merek.delete({
        where: {
            id_merek: Number(id)
        }
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};