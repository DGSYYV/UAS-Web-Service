import { PrismaClient } from "../database/dbConfig";

export const getAllShoeTypes = async () => {
    return await PrismaClient.shoeType.findMany();
};

export const getShoeTypeById = async (id) => {
    return await PrismaClient.shoeType.findUnique({
        where:{
            id_shoes_type: Number (id)
        }
    });
};

export const createShoeType = async (data) => {
    return await PrismaClient.shoeType.create({
        data: {
            type_name: data.type_name,
            category: data.category
        }
    });
};

export const updateShoeType = async (id, data) => {
    return await PrismaClient.shoeType.update({
        where: {
            id_shoes_type: Number (id)
        },
        data: {
            type_name: data.type_name,
            category: data.category
        }
    });
};

export const deleteShoeType = async (id) => {
    return await PrismaClient.shoeType.delete({
        where: {    
            id_shoes_type: Number (id)
        }
    });
};