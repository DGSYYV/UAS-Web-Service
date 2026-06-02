import { prismaClient } from "../database/dbConfig.js";

export const getAllPrice = () => {
  return prismaClient.price.findMany({
    include: {
      shoes: true,
    },
  });
};

export const getPriceById = (id) => {
  return prismaClient.price.findUnique({
    where: {
      id_price: id,
    },
    include: {
      shoes: true,
    },
  });
};

export const createPrice = (data) => {
  return prismaClient.price.create({
    data,
  });
};

export const updatePrice = (id, data) => {
  return prismaClient.price.update({
    where: {
      id_price: id,
    },
    data,
  });
};

export const deletePrice = (id) => {
  return prismaClient.price.delete({
    where: {
      id_price: id,
    },
  });
};